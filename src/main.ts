import {
	addIcon,
	App,
	Editor,
	type MarkdownPostProcessorContext,
	MarkdownView,
	Modal,
	Notice,
	parseYaml,
	Plugin,
	type PluginManifest,
	TFile,
} from 'obsidian';
import AdversaryBlockRenderer from 'src/view/adversary-renderer';
import { Linkifier } from './parser/linkify';
import { type DaggerheartToolsSettings, DaggerheartToolsSettingsTab, DEFAULT_SETTINGS } from './settings/settings';
import type { Adversary, AdversaryParameters } from './types/adversary';
import { AdversarySuggester } from './util/suggester';
import { IconStore } from './view/icon-store';
import { AdversaryModal } from './view/adversary-modal';
import { Api } from './api/api';
import { Bestiary } from './bestiary/bestiary';
import type { Combatant, Encounter } from './types/encounter';
import { nanoid } from './util/util';
import { AbilityCardRepository, AdversaryRepository, EncounterRepository, EnvironmentRepository } from './bestiary/repository';



export default class DaggerheartToolsPlugin extends Plugin {
	settings: DaggerheartToolsSettings = Object.assign(DEFAULT_SETTINGS);
	api: Api = new Api(this);
	adversaries = new AdversaryRepository(this);
	encounters = new EncounterRepository(this);
	environments = new EnvironmentRepository(this);
	abilityCards = new AbilityCardRepository(this);

	constructor(app: App, manifest: PluginManifest) {
		super(app, manifest)
	}

	async onload() {
		console.log("Loaded Daggerheart-Tools")
		await this.loadSettings();
		addIcon(IconStore.iconId, IconStore.iconSvgContent);

		this.adversaries.load();
		this.encounters.load();

		(window["DaggerheartTools"] = this.api) &&
            this.register(() => delete window["DaggerheartTools"]);

		
		Bestiary.initialize(this);

		Linkifier.initialize(this.app.metadataCache, this.app);

		const ribbonIconEl = this.addRibbonIcon('daggerheart-compatible', 'Daggerheart Tools', (evt: MouseEvent) => {
			new Notice('Opening an new adversary Modal!');
			this.app.commands.executeCommandById('daggerheart-tools:open-new-adversary-modal');
		});
		ribbonIconEl.addClass('daggerheart-tools-ribbon-class');

		// This adds an editor command that can perform some operation on the current editor instance
		// this.addCommand({
		// 	id: 'add-adversary-to-note',
		// 	name: 'Add adversary to current document',
		// 	editorCallback: (editor: Editor, view: MarkdownView) => {
		// 		new Notice("This feature does not work correctly yet.");
		// 	}
		// });


		// TODO: make add at cursor pallette command, trigger it from here.

		
		// This adds a complex command that can check whether the current state of the app allows execution of the command
		this.addCommand({
			id: 'open-new-adversary-modal',
			name: 'Add a new Adversary to the database',
			checkCallback: (checking: boolean) => {
				// Conditions to check
				const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (markdownView) {
					// If checking is true, we're simply "checking" if the command can be run.
					// If checking is false, then we want to actually perform the operation.
					if (!checking) {
						new AdversaryModal(this.app, this).open();
					}

					// This command will only show up in Command Palette when the check function returns true
					return true;
				}
			}
		});

		this.registerMarkdownCodeBlockProcessor(
			"adversary",
			this.postprocessor.bind(this)
		);

		this.registerEditorSuggest(new AdversarySuggester(this));

		this.addSettingTab(new DaggerheartToolsSettingsTab(this.app, this));
	}

	openAdversaryModal(adversary: Adversary, update: boolean = false) {
		new AdversaryModal(this.app, this, adversary, update).open();
	}

	removeAdversaryModal(adversary: Adversary) {
		console.log("opening remove adversary confirmation modal");
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	getFrontmatter(file: TFile | null = null): Record<string, any> | undefined {
		if (!file) {
			file = this.app.workspace.getActiveFile();
		}

		const cache = this.app.metadataCache.getFileCache(file!);
		return cache?.frontmatter;
	}

	async writeFrontmatter(file: TFile | null = null, key: string, value: any) {
		if (!file) {
			file = this.app.workspace.getActiveFile();
		}

		this.app.fileManager.processFrontMatter(file!, (frontmatter: any) => {
			frontmatter[key] = value;
        });
	}

	addNewAdversary(adversary: Adversary) {
		this.adversaries.add(adversary);
		new Notice(adversary.name + " was added to the database.");
	}

	updateAdversary(id: string, adversary: Adversary) {
		let exists = this.adversaries.exists(adv => adv.id == id);

		if (!exists) {
			new Notice("Unable to find adversary to update. ID not recognized.");
			return;
		}

		this.adversaries.update(id, adversary);

		new Notice(adversary.name + " has been updated.");
	}

	deleteAdversary(id: string) {
		let exists = this.adversaries.exists(adv => adv.id == id);

		if (!exists) {
			new Notice("Unable to find adversary to delete. ID not recognized.");
			return;
		}

		this.adversaries.delete(adv => adv.id == id);
		new Notice("Delete succesfull");
	}

	// Adds an adversary to the combat and sets the file to an encounter.
	async addCombatant(encounterId: string, adversary: Adversary) {
		let combatant: Combatant = {
			name: adversary.name,
			parentId: adversary.id,
			id: nanoid(),
			hp: 0,
			stress: 0,
			maxHP: adversary.hp,
			maxStress: adversary.stress
		}

		let encounter = this.encounters.find(e => e.id == encounterId);

		if (encounter == undefined) {
			new Notice("Error: Unable to add combatant, no encounter found.");
			return;
		}
		
		encounter.adversaries.push(combatant)
		
		this.encounters.update("id", encounter);
	}

	async removeCombatant(encounterId: string, combatantId: string) {
		let encounter = this.encounters.find(e => e.id == encounterId);

		if (encounter == undefined) {
			new Notice("No encounter found while trying to remove combatant.");
			return;
		}
		
		encounter.adversaries = encounter.adversaries.filter(c => c.id != combatantId);
		this.encounters.update("id", encounter);
	}

	async updateCombatant(encounterId: string, combatant: Combatant) {
		let encounter = this.encounters.find(e => e.id == encounterId);

		if (encounter == undefined) {
			new Notice("No encounter found on Update Combatant");
			return;
		}

		let cindex = encounter.adversaries.findIndex(c => c.id == combatant.id);

		if (cindex < 0) {
			new Notice("Combatant not found.");
			return;
		}
		
		encounter.adversaries[cindex] = combatant;
		this.encounters.update("id", encounter);
	}

	createEncounter(): string {
		let encounterId = nanoid();
		this.writeFrontmatter(null, 'encounterId', encounterId);
		let encounter: Encounter = {
			id: encounterId,
			adversaries: [],
			environments: [],
			allies: []
		};
		
		this.encounters.add(encounter);
		return encounterId;
	}

	getEncounter(id: string): Encounter | undefined {
		return this.encounters.find(e => e.id === id);
	}

	checkDirtyEncounter(encounterId: string, adversary: Adversary) {
		let encounter = this.encounters.find(e => e.id == encounterId);

		if (encounter == undefined) {
			new Notice("Error: Encounter not found.");
			return;
		}

		let combatants = encounter.adversaries;

		for (let i = 0; i < combatants.length; i++) {
			if (combatants[i].parentId == adversary.id) {
				combatants[i] = Object.assign(combatants[i], {
					name: adversary.name,
					maxHP: adversary.hp,
					maxStress: adversary.stress
				})
			}
		}

		encounter.adversaries = combatants;
		this.encounters.update("id", encounter);
	}

	async postprocessor(source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) {
		try {
            // /** Replace Links */
            source = Linkifier.transformSource(source);

            /** Get Parameters */
            let params: AdversaryParameters = parseYaml(source);

            el.addClass("dht-plugin-container");
            el.parentElement?.addClass("dht-plugin-parent");

            let adversary = new AdversaryBlockRenderer({
                container: el,
                plugin: this,
                params,
                context: ctx.sourcePath
            });

            ctx.addChild(adversary);
        } catch (e: any) {
            console.error(`Daggerheart Adversary Error:\n${e}`);
            let pre = createEl("pre");
            pre.setText(`\`\`\`adversary
				There was an error rendering the statblock:
				${e.stack
					.split("\n")
					.filter((line: string) => !/^at/.test(line?.trim()))
					.join("\n")}
				\`\`\``);
        }
    }
}
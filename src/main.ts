import {
	addIcon,
	Editor,
	type MarkdownPostProcessorContext,
	MarkdownView,
	Notice,
	parseYaml,
	Plugin,
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



export default class DaggerheartToolsPlugin extends Plugin {
	settings: DaggerheartToolsSettings;
	api: Api = new Api(this);

	async onload() {
		console.log("Loaded Daggerheart-Tools")
		await this.loadSettings();
		addIcon(IconStore.iconId, IconStore.iconSvgContent);

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
		this.addCommand({
			id: 'add-adversary-to-note',
			name: 'Add adversary to current document',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				new Notice("This feature does not work correctly yet.");
			}
		});

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
						new AdversaryModal(this.app).open();
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

		let index = this.settings.encounters.findIndex(e => e.id == encounterId);

		if (index < 0) {
			new Notice("No data found for encounter.");
			return;
		}
		
		this.settings.encounters[index].adversaries.push(combatant)
		
		await this.saveSettings();
		this.notifyEncounterChange(this.settings.encounters[index]);
	}

	async removeCombatant(encounterId: string, combatantId: string) {
		let index = this.settings.encounters.findIndex(e => e.id == encounterId);

		if (index < 0) {
			new Notice("No data found for encounter.");
			return;
		}
		
		this.settings.encounters[index].adversaries = this.settings.encounters[index].adversaries.filter(c => c.id != combatantId);
		this.saveSettings();
		this.notifyEncounterChange(this.settings.encounters[index]);
	}

	async updateCombatant(encounterId: string, combatant: Combatant) {
		let index = this.settings.encounters.findIndex(e => e.id == encounterId);

		if (index < 0) {
			new Notice("No data found for encounter.");
			return;
		}

		let cindex = this.settings.encounters[index].adversaries.findIndex(c => c.id == combatant.id);

		if (cindex < 0) {
			new Notice("Combatant not found.");
			return;
		}
		
		this.settings.encounters[index].adversaries[cindex] = combatant;
		this.saveSettings();
		this.notifyEncounterChange(this.settings.encounters[index]);
	}

	onEncounterChangeCallbacks: ((enc: Encounter) => void)[] = [];

	onEncounterChange(cb: (enc: Encounter) => void) {
		this.onEncounterChangeCallbacks.push(cb);
	}

	notifyEncounterChange(enc: Encounter) {
		this.onEncounterChangeCallbacks.forEach(cb => cb(enc));
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
		
		this.settings.encounters.push(encounter);
		this.saveSettings();
		this.notifyEncounterChange(encounter);
		return encounterId;
	}

	getEncounter(id: string): Encounter | undefined {
		return this.settings.encounters.find(e => e.id === id);
	}

	checkDirtyEncounter(encounterId: string, adversary: Adversary) {
		console.log("checking", adversary);

		let index = this.settings.encounters.findIndex(e => e.id == encounterId);

		if (index < 0) {
			return;
		}

		let combatants = this.settings.encounters[index].adversaries;

		for (let i = 0; i < combatants.length; i++) {
			if (combatants[i].parentId == adversary.id) {
				combatants[i] = Object.assign(combatants[i], {
					name: adversary.name,
					maxHP: adversary.hp,
					maxStress: adversary.stress
				})
			}
		}

		this.settings.encounters[index].adversaries = combatants;
		this.saveSettings();
		this.notifyEncounterChange(this.settings.encounters[index]);
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
        } catch (e) {
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
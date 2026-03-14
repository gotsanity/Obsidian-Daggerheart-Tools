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
import { SelectAdversaryModal } from './view/select-adversary-modal';
import type { Environment, EnvironmentParameters } from './types/environment';
import EnvironmentRenderer from './view/environment-renderer';
import { DaggerheartSelectModal } from './view/daggerheart-select-modal';
import { EnvironmentModal } from './view/environment-modal';



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
		this.environments.load();

		(window["DaggerheartTools"] = this.api) &&
            this.register(() => delete window["DaggerheartTools"]);

		
		Bestiary.initialize(this);

		Linkifier.initialize(this.app.metadataCache, this.app);

		const ribbonIconEl = this.addRibbonIcon('daggerheart-compatible', 'Daggerheart Tools', (evt: MouseEvent) => {
			const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);

			this.app.commands.executeCommandById('daggerheart-tools:daggerheart-select-modal');
		});
		ribbonIconEl.addClass('daggerheart-tools-ribbon-class');


		this.addCommand({
			id: 'open-new-adversary-modal',
			name: 'Add a new Adversary to the database',
			checkCallback: (checking: boolean) => {
				const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (markdownView) {
					if (!checking) {
						new AdversaryModal(this.app, this).open();
					}

					return true;
				}
			}
		});

		this.addCommand({
			id: 'open-new-environment-modal',
			name: 'Add a new Environment to the database',
			checkCallback: (checking: boolean) => {
				const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (markdownView) {
					if (!checking) {
						new EnvironmentModal(this.app, this).open();
					}

					return true;
				}
			}
		});

		this.addCommand({
			id: 'select-adversary-modal',
			name: 'Add an Adversary to the document',
			checkCallback: (checking: boolean) => {
				const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (markdownView) {
					if (!checking) {
						new SelectAdversaryModal(this.app, this).open();
					}

					return true;
				}
			}
		});

		this.addCommand({
			id: 'daggerheart-select-modal',
			name: 'Add a Daggerheart Block to the document',
			checkCallback: (checking: boolean) => {
				const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (markdownView) {
					if (!checking) {
						new DaggerheartSelectModal(this.app, this).open();
					}

					return true;
				}
			}
		});

		this.registerMarkdownCodeBlockProcessor(
			"adversary",
			this.postprocessor.bind(this)
		);

		this.registerMarkdownCodeBlockProcessor(
			"environment",
			this.environmentPostprocessor.bind(this)
		);


		this.registerEditorSuggest(new AdversarySuggester(this));

		this.addSettingTab(new DaggerheartToolsSettingsTab(this.app, this));
	}

	openModal(type: string, data: Adversary | Environment, update = false) {
		if (type == "Adversary") {
			this.openAdversaryModal(data as Adversary, update);
		} else if (type == "Environment") {
			this.openEnvironmentModal(data as Environment, update);
		} else {
			new Notice("Unable to open modal, invalid type.");
		}
	}

	openAdversaryModal(adversary: Adversary, update = false) {
		new AdversaryModal(this.app, this, adversary, update).open();
	}

	openEnvironmentModal(environment: Environment, update = false) {
		new EnvironmentModal(this.app, this, environment, update).open();
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
		const exists = this.adversaries.exists(adv => adv.id == id);

		if (!exists) {
			new Notice("Unable to find adversary to update. ID not recognized.");
			return;
		}

		this.adversaries.update(id, adversary);

		new Notice(adversary.name + " has been updated.");
	}

	deleteAdversary(id: string) {
		const exists = this.adversaries.exists(adv => adv.id == id);

		if (!exists) {
			new Notice("Unable to find adversary to delete. ID not recognized.");
			return;
		}

		this.adversaries.delete(adv => adv.id == id);
		new Notice("Delete succesfull");
	}

	addNewEnvironment(environment: Environment) {
		this.environments.add(environment);
		new Notice(environment.name + " was added to the database.");
	}

	updateEnvironment(id: string, environment: Environment) {
		const exists = this.environments.exists(env => env.id == id);

		if (!exists) {
			new Notice("Unable to find environment to update. ID not recognized.");
			return;
		}

		this.environments.update(id, environment);

		new Notice(environment.name + " has been updated.");
	}

	deleteEnvironment(id: string) {
		const exists = this.environments.exists(env => env.id == id);

		if (!exists) {
			new Notice("Unable to find environment to delete. ID not recognized.");
			return;
		}

		this.environments.delete(adv => adv.id == id);
		new Notice("Delete succesfull");
	}

	// Adds an adversary to the combat and sets the file to an encounter.
	async addCombatant(encounterId: string, adversary: Adversary) {
		const combatant: Combatant = {
			name: adversary.name,
			parentId: adversary.id,
			id: nanoid(),
			hp: 0,
			stress: 0,
			maxHP: adversary.hp,
			maxStress: adversary.stress
		}

		const encounter = this.encounters.find(e => e.id == encounterId);

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
            el.addClass("dht-plugin-container");
            el.parentElement?.addClass("dht-plugin-parent");

			// /** Replace Links */
            source = Linkifier.transformSource(source);

            /** Get Parameters */
            let params: AdversaryParameters = parseYaml(source);

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

	async environmentPostprocessor(source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) {
		try {
            el.addClass("dht-plugin-container");
            el.parentElement?.addClass("dht-plugin-parent");

			// /** Replace Links */
            source = Linkifier.transformSource(source);

            /** Get Parameters */
            let params: EnvironmentParameters = parseYaml(source);

            let environment = new EnvironmentRenderer({
                container: el,
                plugin: this,
                params,
                context: ctx.sourcePath
            });

            ctx.addChild(environment);
        } catch (e: any) {
            console.error(`Daggerheart Environment Error:\n${e}`);
            let pre = createEl("pre");
            pre.setText(`\`\`\`environment
				There was an error rendering the statblock:
				${e.stack
					.split("\n")
					.filter((line: string) => !/^at/.test(line?.trim()))
					.join("\n")}
				\`\`\``);
        }
    }
}
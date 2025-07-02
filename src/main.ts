import {
	addIcon,
	Editor,
	MarkdownPostProcessorContext,
	MarkdownView,
	Notice,
	parseYaml,
	Plugin,
} from 'obsidian';
import AdversaryBlockRenderer from 'src/view/adversary-renderer';
import { Linkifier } from './parser/linkify';
import { DaggerheartToolsSettings, DaggerheartToolsSettingsTab, DEFAULT_SETTINGS } from './settings/settings';
import { Adversary, AdversaryParameters } from './types/adversary';
import { AdversarySuggester } from './util/suggester';
import { IconStore } from './view/icon-store';
import { AdversaryModal } from './view/adversary-modal';
import { Api } from './api/api';
import { Bestiary } from './bestiary/bestiary';



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

	async addYamlProperty<K, T>(prop: K, val: T, adversary: Adversary) {
		await app.workspace.getActiveFileView().setState({ mode: 'source', source: false }, {}); // live preview mode

		let editor = await this.app.workspace.activeEditor?.editor;

		if (!editor) {
			new Notice("No editor available. Please switch to preview mode.");
		}
		let eol = editor?.lineCount()!;
		let end = { line: eol + 1, ch: 0 };
		const range = await editor?.getRange({ line: 0, ch: 0 }, end);

        if (range.indexOf("```adversary\n") === -1) return null;
		
		const split = range.split("\n");

		// check to see if we found a block
        let inBlock = false;
		let starts: number[] = [];
		let ends: number[] = [];

		let lastEnd: number = -1;

        for (let i = split.length - 1; i >= 0; i--) {
            let line = split[i];
			
			// find ends
            if (/\`\`\`$/.test(line)) {
				lastEnd = i;
			}

			// find starts
            if (/\`\`\`adversary/.test(line)) {
                inBlock = true;
                starts.push(i);
				if (lastEnd >= 0) {
					ends.push(lastEnd);
					lastEnd = -1;
				} else {
					new Notice("Daggerheart Tools encountered a syntax error.");
					return;
				}
            }
        }

        if (!inBlock) return;

		if (starts.length != ends.length) {
			new Notice("Daggerheart Tools encountered a syntax error.");
			return;
		}

		for (let i = 0; i < starts.length; i++) {
			let start = { line: starts[i], ch: 0 };
			let end = { line: ends[i], ch: 0 };
			let subRange = await editor?.getRange(start, end);
			if (subRange?.indexOf(`name: ${ adversary.name }`)! > -1) {
				// TODO: add check for prefixed text like callouts
				editor?.replaceRange(
					`${prop}: ${val}\n`,
					end
				);
			}
		}
	}

	async setYamlProperty<K, T>(prop: K, val: T, oldVal: T, adversary: Adversary) {
		await app.workspace.getActiveFileView().setState({ mode: 'source', source: false }, {}); // live preview mode

		let editor = await this.app.workspace.activeEditor?.editor;

		if (!editor) {
			new Notice("No editor available. Please switch to preview mode.");
		}
		let eol = editor?.lineCount()!;
		let end = { line: eol + 1, ch: 0 };
		const range = await editor?.getRange({ line: 0, ch: 0 }, end);

        if (range.indexOf("```adversary\n") === -1) return null;
		
		const split = range.split("\n");

		// check to see if we found a block
        let inBlock = false;
		let starts: number[] = [];
		let ends: number[] = [];

		let lastEnd: number = -1;

        for (let i = split.length - 1; i >= 0; i--) {
            let line = split[i];
			
			// find ends
            if (/\`\`\`$/.test(line)) {
				lastEnd = i;
			}

			// find starts
            if (/\`\`\`adversary/.test(line)) {
                inBlock = true;
                starts.push(i);
				if (lastEnd >= 0) {
					ends.push(lastEnd);
					lastEnd = -1;
				} else {
					new Notice("Daggerheart Tools encountered a syntax error.");
					return;
				}
            }
        }

        if (!inBlock) return;

		if (starts.length != ends.length) {
			new Notice("Daggerheart Tools encountered a syntax error.");
			return;
		}

		for (let i = 0; i < starts.length; i++) {
			let start = { line: starts[i], ch: 0 };
			let end = { line: ends[i], ch: 0 };
			let subRange = await editor?.getRange(start, end);
			if (subRange?.indexOf(`name: ${ adversary.name }`)! > -1) {
				let subline = subRange?.split('\n').indexOf(`${prop}: ${oldVal}`)!;
				if (subline === -1) {
					editor?.replaceRange(
						`${prop}: ${val}\n`,
						end
					);
					return;
				}
				let innerStart = { line: start.line + subline, ch: 0 }
				let innerEnd = { line: start.line + subline, ch: subRange?.split('\n')[subline].length! }
				editor?.replaceRange(
					`${prop}: ${val}`,
					innerStart,
					innerEnd,
					`${adversary.name}`
				);
			}
		}
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	async postprocessor(source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) {
		try {
            // /** Replace Links */
            //source = Linkifier.transformSource(source);

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
            console.error(`Obsidian Statblock Error:\n${e}`);
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
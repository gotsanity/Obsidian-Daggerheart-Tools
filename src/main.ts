import { App, Editor, MarkdownPostProcessor, MarkdownPostProcessorContext, MarkdownView, Modal, Notice, parseYaml, Plugin, PluginSettingTab, Setting } from 'obsidian';
import { Adversary, BESTIARY, BESTIARY_BY_NAME } from 'src/bestiary/daggerheart-srd-bestiary';
import AdversaryBlockRenderer from 'src/view/adversary-renderer';

// Remember to rename these classes and interfaces!

interface DaggerheartToolsSettings {
	parseFrontmatter: boolean;
}

const DEFAULT_SETTINGS: DaggerheartToolsSettings = {
	parseFrontmatter: false
}

export default class DaggerheartToolsPlugin extends Plugin {
	settings: DaggerheartToolsSettings;

	async onload() {
		console.log("Loaded Daggerheart-Tools")
		await this.loadSettings();

		const ribbonIconEl = this.addRibbonIcon('dice', 'Daggerheart Tools', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			new Notice('Opening an adversary view!');
		});
		ribbonIconEl.addClass('daggerheart-tools-ribbon-class');

		// This adds an editor command that can perform some operation on the current editor instance
		this.addCommand({
			id: 'dhtools-add-adversary-command',
			name: 'Add adversary to current document',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				// console.log(editor.getSelection());
				new Notice("This feature does not work correctly yet.");

				// let containerEl = this.app.workspace.getActiveViewOfType(MarkdownView)?.containerEl;

				// this.createAdversaryBlockHtml(containerEl, BESTIARY_BY_NAME.get("Acid Burrower")!);
			}
		});

		// This adds a complex command that can check whether the current state of the app allows execution of the command
		this.addCommand({
			id: 'open-daggerheart-adversary-modal',
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

		this.addSettingTab(new DaggerheartToolsSettingsTab(this.app, this));

		// // registered method to get the active file on a line change and parse it.
		// this.app.workspace.on('active-leaf-change', async () => {
		// 	const file = this.app.workspace.getActiveFile();
		// 	if (file) {
		// 		const content = await this.app.vault.read(file);
		// 		this.parseDocument(content);
		// 	}
		// })

		// // registered method to get the active file when there is a change in the editor.
		// this.app.workspace.on('editor-change', editor => {
		// 	const content = editor.getDoc().getValue();
		// 	this.parseDocument(content);
		// })
	}

	onunload() {

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

			console.log("yaml", params, source, ctx)
            el.addClass("dht-plugin-container");
            el.parentElement?.addClass("dht-plugin-parent");

            let adversary = new AdversaryBlockRenderer({
                container: el,
                plugin: this,
                params,
                context: ctx.sourcePath
            });

            ctx.addChild(adversary);
			console.log(adversary)
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

export interface AdversaryParameters
    extends Omit<
        Adversary,
        | "feats"
    > {
    feats?: { text: string; name: string }[];
}

class AdversaryModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const {contentEl} = this;
		contentEl.setText('Woah!');
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}

class DaggerheartToolsSettingsTab extends PluginSettingTab {
	plugin: DaggerheartToolsPlugin;

	constructor(app: App, plugin: DaggerheartToolsPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Parse Frontmatter')
			.setDesc('Turn this on to scan frontmatter for daggerheart related information. Scan defaults to entire vault.')
			.addToggle(item => item
				.setValue(this.plugin.settings.parseFrontmatter)
				.setTooltip("If this is set to true the plugin will scan frontmatter in documents for daggerheart information.")
				.onChange(async (value) => {
					this.plugin.settings.parseFrontmatter = value;
					await this.plugin.saveSettings();
				})
			);
	}
}

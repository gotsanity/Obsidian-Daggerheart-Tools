import { Modal, App, MarkdownView, Notice } from "obsidian";
import EnvironmentForm from "./EnvironmentForm.svelte";
import { mount } from "svelte";
import type DaggerheartToolsPlugin from "src/main";
import type { Environment } from "src/types/environment";

export class EnvironmentModal extends Modal {
    environment?: Environment;
    $environmentBlock!: ReturnType<typeof EnvironmentForm> | undefined;
    plugin: DaggerheartToolsPlugin;
    update: boolean;
    subscription?: string;

    constructor(app: App, plugin: DaggerheartToolsPlugin, environment?: Environment, update = false) {
        super(app);
        this.plugin = plugin;
        this.environment = environment;
        this.update = update;
    }

    onOpen() {
        const {contentEl} = this;
        if (this.update) {
            this.setTitle("Edit Adversary");
            
            this.subscription = this.plugin.environments.subscribe((event, item) => {
                if (item.id == this.environment!.id) {
                    if (event == "update") {
                        this.updateEnvironmentToDocument(this.environment!, item);
                        this.close();
                    } else if (event == "delete") {
                        this.close();
                    }
                }
            })
        } else {
            this.setTitle("New Environment");
            this.subscription = this.plugin.environments.subscribe((event, item) => {
                if (event == "add") {
                    this.addEnvironmentToDocument(item);
                    this.close();
                }
            })
        }
        

        this.$environmentBlock = mount(EnvironmentForm, {
            target: this.contentEl,
            props: {
                adversary: this.environment,
                update: this.update,
                plugin: this.plugin
            }
        });      
    }

    onClose() {
        const {contentEl} = this;
        contentEl.empty();

        if (this.subscription) {
          this.plugin.environments.unsubscribe(this.subscription);
        }
    }

    addEnvironmentToDocument(item: Environment) {
        console.log("inserting adversary if possible")
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);

        if (view) {
            console.log("found a view, inserting")
            const cursor = view.editor.getCursor();
            view.editor.replaceRange(`\`\`\`environment\nname: ${item.name}\n\`\`\`\n`, cursor, cursor);
        } else {
            new Notice(`Unable to insert ${item.name} into document, no active editor found. Please open document and add manually.`);
        }
    }

    updateEnvironmentToDocument(old: Environment, item: Environment) {
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);

        if (view) {
            // TODO: implement updating existing adversaries from non-editor views.
            new Notice("Feature not fully implemented yet: Please update existing adversary to the new name manually.");
            // find the existing adversary name line
            // delete that line, insert new line
            // let cursor = { line: -1, ch: 0 };
            // view.editor.replaceRange(`name: ${item.name}\n`, cursor, cursor);
        } else {
            new Notice(`Unable to insert ${item.name} into document, no active editor found. Please open document and add manually.`);
        }
    }
}
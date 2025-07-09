import { Modal, App, MarkdownView, Notice } from "obsidian";
import type { Adversary } from "src/types/adversary";
import AdversaryForm from "./AdversaryForm.svelte";
import { mount } from "svelte";
import type DaggerheartToolsPlugin from "src/main";

export class AdversaryModal extends Modal {
    adversary?: Adversary;
    $adversaryBlock!: ReturnType<typeof AdversaryForm> | undefined;
    plugin: DaggerheartToolsPlugin;
    update: boolean;
    subscription?: string;

    constructor(app: App, plugin: DaggerheartToolsPlugin, adversary?: Adversary, update: boolean = false) {
        super(app);
        this.plugin = plugin;
        this.adversary = adversary;
        this.update = update;
    }

    onOpen() {
        const {contentEl} = this;
        if (this.update) {
            this.setTitle("Edit Adversary");
            
            this.subscription = this.plugin.adversaries.subscribe((event, item) => {
                if (item.id == this.adversary!.id) {
                    if (event == "update") {
                        this.updateAdversaryToDocument(this.adversary!, item);
                        this.close();
                    } else if (event == "delete") {
                        this.close();
                    }
                }
            })
        } else {
            this.setTitle("New Adversary");
            this.subscription = this.plugin.adversaries.subscribe((event, item) => {
                if (event == "add") {
                    this.addAdversaryToDocument(item);
                    this.close();
                }
            })
        }
        

        this.$adversaryBlock = mount(AdversaryForm, {
            target: this.contentEl,
            props: {
                adversary: this.adversary,
                update: this.update,
                plugin: this.plugin
            }
        });      
    }

    onClose() {
        const {contentEl} = this;
        contentEl.empty();

        if (this.subscription) {
          this.plugin.adversaries.unsubscribe(this.subscription);
        }
    }

    addAdversaryToDocument(item: Adversary) {
        console.log("inserting adversary if possible")
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);

        if (view) {
            console.log("found a view, inserting")
            const cursor = view.editor.getCursor();
            view.editor.replaceRange(`\`\`\`adversary\nname: ${item.name}\n\`\`\`\n`, cursor, cursor);
        } else {
            new Notice("Unable to insert adversary into document, no active editor found. Please open document and add manually.");
        }
    }

    updateAdversaryToDocument(old: Adversary, item: Adversary) {
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);

        if (view) {
            
            new Notice("Feature not fully implemented yet: Please update existing adversary to the new name manually.");
            // find the existing adversary name line
            // delete that line, insert new line
            // let cursor = { line: -1, ch: 0 };
            // view.editor.replaceRange(`name: ${item.name}\n`, cursor, cursor);
        } else {
            new Notice("Unable to insert adversary into document, no active editor found. Please open document and add manually.");
        }
    }
}
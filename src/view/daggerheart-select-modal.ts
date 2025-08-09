import { Modal, App, MarkdownView, Notice } from "obsidian";
import { mount, unmount } from "svelte";
import type DaggerheartToolsPlugin from "src/main";
import DaggerheartSelectForm from "./daggerheart-select-form.svelte";
import type { Adversary } from "src/types/adversary";
import AdversaryForm from "./AdversaryForm.svelte";
import EnvironmentForm from "./EnvironmentForm.svelte";

export class DaggerheartSelectModal extends Modal {
    $ui!: ReturnType<typeof DaggerheartSelectForm | typeof AdversaryForm | typeof EnvironmentForm> | undefined;
    plugin: DaggerheartToolsPlugin;

    constructor(app: App, plugin: DaggerheartToolsPlugin) {
        super(app);
        this.plugin = plugin;
    }

    onOpen() {
        const {contentEl} = this;
        this.setTitle("What do you want to insert into the document");        

        this.$ui = mount(DaggerheartSelectForm, {
            target: this.contentEl,
            props: {
                plugin: this.plugin,
                modal: this
            }
        });      
    }

    onClose() {
        const {contentEl} = this;
        contentEl.empty();
    }

    switchModal(modalType: string) {
        if (this.$ui){
            unmount(this.$ui);
        }
        
        if (modalType == "new-adversary") {
            this.setTitle("New Adversary");
            this.$ui = mount(AdversaryForm, {
                target: this.contentEl,
                props: {
                    plugin: this.plugin,
                    update: false
                }
            });
        } else if (modalType == "new-environment") {
            this.setTitle("New Environment");
            this.$ui = mount(EnvironmentForm, {
                target: this.contentEl,
                props: {
                    plugin: this.plugin,
                    update: false
                }
            });
        }
        
    }

    addObjectToDocument(name: string, type: string) {
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);

        if (view) {
            const cursor = view.editor.getCursor();

            let blockType = "adversary";

            if (type == "Environment") {
                blockType = "environment";
            }

            view.editor.replaceRange(`\`\`\`${blockType}\nname: ${name}\n\`\`\`\n`, cursor, cursor);
        } else {
            new Notice(`Unable to insert ${name} into document, no active editor found. Please open document and add manually.`);
        }

        this.close();
    }
}
import { Modal, App, MarkdownView, Notice } from "obsidian";
import { mount } from "svelte";
import type DaggerheartToolsPlugin from "src/main";
import SelectAdversaryForm from "./select-adversary-form.svelte";
import type { Adversary } from "src/types/adversary";

export class SelectAdversaryModal extends Modal {
    $ui!: ReturnType<typeof SelectAdversaryForm> | undefined;
    plugin: DaggerheartToolsPlugin;

    constructor(app: App, plugin: DaggerheartToolsPlugin) {
        super(app);
        this.plugin = plugin;
    }

    onOpen() {
        const {contentEl} = this;
        this.setTitle("Select an Adversary to insert to the document");        

        this.$ui = mount(SelectAdversaryForm, {
            target: this.contentEl,
            props: {
                adversaries: this.plugin.adversaries.filter(() => true),
                plugin: this.plugin,
                modal: this
            }
        });      
    }

    onClose() {
        const {contentEl} = this;
        contentEl.empty();
    }

    addAdversaryToDocument(item: Adversary) {
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);

        if (view) {
            const cursor = view.editor.getCursor();
            view.editor.replaceRange(`\`\`\`adversary\nname: ${item.name}\n\`\`\`\n`, cursor, cursor);
        } else {
            new Notice("Unable to insert adversary into document, no active editor found. Please open document and add manually.");
        }

        this.close();
    }
}
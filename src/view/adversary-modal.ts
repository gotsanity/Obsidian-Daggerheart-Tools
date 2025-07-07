import { Modal, App } from "obsidian";
import type { Adversary } from "src/types/adversary";
import AdversaryForm from "./AdversaryForm.svelte";
import { mount } from "svelte";

export class AdversaryModal extends Modal {
    adversary?: Adversary;
    $adversaryBlock!: ReturnType<typeof AdversaryForm> | undefined;

    constructor(app: App, adversary?: Adversary) {
        super(app);
        this.adversary = adversary;
    }

    onOpen() {
        const {contentEl} = this;
        if (this.adversary != undefined) {
            this.setTitle("Save Adversary");
        } else {
            this.setTitle("New Adversary");
        }
        
        this.$adversaryBlock = mount(AdversaryForm, {
            target: this.contentEl,
            props: {
                adversary: this.adversary
            }
        });      
    }

    onClose() {
        const {contentEl} = this;
        contentEl.empty();
    }
}
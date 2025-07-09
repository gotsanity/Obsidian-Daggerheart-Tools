import { Modal, App } from "obsidian";
import type { Adversary } from "src/types/adversary";
import AdversaryForm from "./AdversaryForm.svelte";
import { mount } from "svelte";
import type DaggerheartToolsPlugin from "src/main";

export class AdversaryModal extends Modal {
    adversary?: Adversary;
    $adversaryBlock!: ReturnType<typeof AdversaryForm> | undefined;
    plugin: DaggerheartToolsPlugin;
    update: boolean;

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
            
            this.plugin.adversaries.subscribe((event, item) => {
                if (item.id == this.adversary!.id) {
                    if (event == "update") {
                        this.close();
                    } else if (event == "delete") {
                        this.close();
                    }
                }
            })
        } else {
            this.setTitle("New Adversary");
            this.plugin.adversaries.subscribe((event, item) => {
                if (event == "add") {
                    this.close();
                }
            })
        }
        

        this.$adversaryBlock = mount(AdversaryForm, {
            target: this.contentEl,
            props: {
                adversary: this.adversary,
                update: this.update
            }
        });      
    }

    onClose() {
        const {contentEl} = this;
        contentEl.empty();

        if (this.update) {
            this.plugin.adversaries.unsubscribe((event, item) => {
                if (item.id == this.adversary!.id) {
                    if (event == "update") {
                        this.close();
                    } else if (event == "delete") {
                        this.close();
                    }
                }
            });
        } else {
            this.plugin.adversaries.unsubscribe((event, item) => {
                if (event == "add") {
                    this.close();
                }
            });
        }
    }
}
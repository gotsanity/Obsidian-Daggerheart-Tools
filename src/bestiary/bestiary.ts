import fastCopy from "fast-copy";
import type DaggerheartToolsPlugin from "src/main";
import { BESTIARY, BESTIARY_BY_NAME } from "./daggerheart-srd-bestiary";
import type { Adversary } from "src/types/adversary";

class BestiaryClass {
    #bestiary: Adversary[] = [];
    #local: Adversary[] = [];

    #resolved = false;

    enableSRD: boolean = true;

    initialize(plugin: DaggerheartToolsPlugin) {
        console.log("Bestiary Initialized");

        // update on settings change.
        plugin.registerEvent(
            plugin.app.workspace.on("daggerheart-tools:srd-change", (srd) => {
                this.enableSRD = srd;
                if (srd) {
                    this.#bestiary = BESTIARY.concat(this.#local);
                } else {
                    this.#bestiary = this.#local;
                }
            })
        );

        this.enableSRD = !plugin.settings.disableSRD;
        if (this.enableSRD) {
            this.#bestiary = BESTIARY.concat(this.#local);
        }
        // for (const creature of plugin.settings.adversaries) {
        //     this.addLocalCreature(creature);
        // }
    }

    hasLocal(name: string) {
        return this.#local.findIndex(a => a.name == name) >= 0;
    }

    getLocal(name: string) {
        return this.#local.find(a => a.name == name);
    }

    isLocal(name: string) {
        return this.hasLocal(name) && this.#bestiary.find(a => a.name === name);
    }

    size() {
        return this.#bestiary.length;
    }

    get(name: string) {
        return this.#bestiary.find(a => a.name === name);
    }
}

export const Bestiary = new BestiaryClass();
// TODO: repository pattern
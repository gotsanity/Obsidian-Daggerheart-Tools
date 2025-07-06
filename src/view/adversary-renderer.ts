import { MarkdownRenderChild, parseYaml, stringifyYaml, TFile } from "obsidian";
import { Linkifier } from "src/parser/linkify";
import type { Combatant, Encounter } from "src/types/encounter";
import type { RendererParameters } from "src/types/renderer";
import DaggerheartToolsPlugin from "src/main";
import type { Adversary, AdversaryParameters } from "src/types/adversary";
import { Bestiary } from "src/bestiary/bestiary";
import AdversaryBlock from "./AdversaryBlock.svelte";
import { mount } from "svelte";



export default class AdversaryBlockRenderer extends MarkdownRenderChild {
    topBar!: HTMLDivElement;
    bottomBar!: HTMLDivElement;
    loaded: boolean = false;
    adversaryEl!: HTMLDivElement;
    contentEl!: HTMLDivElement;
    container: HTMLElement;
    adversary!: Adversary;
    plugin: DaggerheartToolsPlugin;
    params!: Partial<AdversaryParameters>;
    context: string;
    fileRef: TFile;
    encounter?: Encounter;
    $adversaryBlock!: ReturnType<typeof AdversaryBlock> | undefined;

    constructor(
        public rendererParameters: RendererParameters,
        public icons = true
    ) {
        super(rendererParameters.container);

        this.container = rendererParameters.container;
        this.plugin = rendererParameters.plugin;
        this.context = rendererParameters.context ?? "";
        this.fileRef = this.plugin.app.workspace.getActiveFile()!;
        this.getAdversary(rendererParameters);
        this.init();
    }

    // onAdversaryChangeCallbacks: ((adv: Adversary) => void)[] = [];

    // onAdversaryChange(cb: (adv: Adversary) => void) {
    //     this.onAdversaryChangeCallbacks.push(cb);
    // }

    // notifyAdversaryChange(adv: Adversary) {
    //     this.onAdversaryChangeCallbacks.forEach(cb => cb(adv));
    // }

    getAdversary(params: | { adversary: Adversary } | { params: Partial<AdversaryParameters> }) {
        if ("params" in params) {
            this.params = params.params
            this.adversary = Object.assign({}, this.plugin.adversaries.find(a => a.name == this.params.name!));
        } else {
            this.params = {};
            this.adversary = params.adversary;
        }
    }

    async build(): Promise<Adversary> {
        let built: Partial<Adversary> = Object.assign(
            {},
            this.adversary ?? {},
            this.params ?? {}
        );

        if (!Object.values(built).length) {
            built = Object.assign({}, built, {
                note: this.context
            });
        }

        if ("image" in built) {
            if (Array.isArray(built.image)) {
                built.image = built.image.flat(2).join("");
            }
        }

        built = Object.assign(built, this.adversary ?? {}, this.params ?? {});

        built = this.transformLinks(built);

        if ("image" in built && Array.isArray(built.image)) {
            built.image = built.image.flat(2).join("");
        }

        return built as Adversary;
    }

    transformLinks(monster: Partial<Adversary>): Partial<Adversary> {
        const built = parseYaml(
            Linkifier.transformYamlSource(
                stringifyYaml(monster).replace(/\\#/g, "#")
            )
        );
        return built;
    }

    async init() {
        this.containerEl.empty();
        this.adversary = (await this.build()) as Adversary;

        let fm = this.plugin.getFrontmatter(this.fileRef);

        // TODO: regenerating encounters for some reason
        if (fm != undefined && fm['encounterId'] != undefined) {
            let encounterId = fm['encounterId'];
            let encounter = this.plugin.encounters.find(e => e.id == encounterId);
            if (encounter != undefined) {
                this.encounter = encounter;
            } else {
                console.log("fm found, no encounter found, creating")
                encounterId = this.plugin.createEncounter();
                this.encounter = this.plugin.getEncounter(encounterId);
            }
        } else {
            console.log("no fm found, creating");
            let encounterId = this.plugin.createEncounter();
            this.encounter = this.plugin.getEncounter(encounterId);
        }

        this.$adversaryBlock = mount(AdversaryBlock, {
            target: this.containerEl,
            props: {
                context: this.context,
                adversary: this.adversary,
                plugin: this.plugin,
                encounter: this.encounter!,
                renderer: this
            }
        });
    }
}
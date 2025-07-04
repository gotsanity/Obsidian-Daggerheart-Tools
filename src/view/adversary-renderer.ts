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
    encounter?: Partial<Encounter>;
    $adversaryBlock!: ReturnType<typeof AdversaryBlock> | undefined;

    constructor(
        public rendererParameters: RendererParameters,
        public icons = true
    ) {
        super(rendererParameters.container);

        this.container = rendererParameters.container;
        this.plugin = rendererParameters.plugin;
        this.context = rendererParameters.context ?? "";
        this.fileRef = this.plugin.app.workspace.getActiveFile();
        this.getAdversary(rendererParameters);
        this.init();
    }

    getAdversary(params: | { adversary: Adversary } | { params: Partial<AdversaryParameters> }) {
        if ("params" in params) {
            this.params = params.params
            this.adversary = Object.assign({}, Bestiary.get(this.params.name!));
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

        if (fm && fm['encounterId']) {
            let encounterId = fm['encounterId'];
            let encounter = this.plugin.getEncounter(encounterId);
            if (encounter) {
                this.encounter = encounter;
            } else {
                encounterId = this.plugin.createEncounter();
                this.encounter = this.plugin.getEncounter(encounterId);
            }
        } else {
            let encounterId = this.plugin.createEncounter();
            this.encounter = this.plugin.getEncounter(encounterId);
        }

        this.$adversaryBlock = mount(AdversaryBlock, {
            target: this.containerEl,
            props: {
                context: this.context,
                adversary: this.adversary,
                plugin: this.plugin,
                encounter: this.encounter,
                renderer: this
            }
        });


        // add elements here to handle saving/management

        // this.$ui = new AdversaryBlock({
        //     target: this.containerEl,
        //     props: {
        //         context: this.context,
        //         monster: this.monster,
        //         statblock: this.layout.blocks,
        //         layout: this.layout,
        //         plugin: this.plugin,
        //         renderer: this,
        //         canSave: this.canSave,
        //         icons: this.icons ?? true
        //     }
        // });
        // this.$ui.$on("save", async () => {
        //     if (
        //         Bestiary.hasCreature(this.monster.name) &&
        //         !(await confirmWithModal(
        //             this.plugin.app,
        //             "This will overwrite an existing monster in settings. Are you sure?"
        //         ))
        //     )
        //         return;
        //     this.plugin.saveMonster({
        //         ...fastCopy(this.monster),
        //         source: this.monster.source ?? "Homebrew",
        //         layout: this.layout.name
        //     } as Monster);
        // });

        // this.$ui.$on("export", () => {
        //     this.plugin.exportAsPng(
        //         this.monster.name,
        //         this.containerEl.firstElementChild!
        //     );
        // });

        // this.plugin.registerEvent(
        //     this.plugin.app.workspace.on(
        //         "fantasy-statblocks:bestiary:creature-added",
        //         async (creature) => {
        //             if (extensionNames.includes(creature.name)) {
        //                 this.monster = copy(creature);
        //                 this.monster = await this.build();
        //                 this.$ui.$set({ monster: this.monster });
        //             }
        //         }
        //     )
        // );
    }
}
import { Adversary, BESTIARY_BY_NAME } from "src/bestiary/daggerheart-srd-bestiary";
import { error } from "console";
import DaggerheartToolsPlugin, { AdversaryParameters } from "main";
import { getFrontMatterInfo, MarkdownRenderChild, TFile } from "obsidian";

type RendererParameters = {
    container: HTMLElement;
    plugin: DaggerheartToolsPlugin;
    context?: string;
    // layout?: Layout;
} & (
    | {
          adversary: Adversary;
      }
    | {
          params: Partial<AdversaryParameters>;
      }
);

export default class AdversaryBlockRenderer extends MarkdownRenderChild {
    // Reference: https://github.com/javalent/fantasy-statblocks/blob/main/src/view/statblock.ts
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
    constructor(
        public rendererParameters: RendererParameters,
        public icons = true
    ) {
        super(rendererParameters.container);

        this.container = rendererParameters.container;
        this.plugin = rendererParameters.plugin;
        this.context = rendererParameters.context ?? "";
        this.getAdversary(rendererParameters);
        this.init();
    }

    getAdversary(params: | { adversary: Adversary } | { params: Partial<AdversaryParameters> }) {
        if ("params" in params) {
            this.params = params.params
            this.adversary = Object.assign({}, BESTIARY_BY_NAME.get(this.params.name));
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

        // const extensions = new Set() // TODO: figure this out Bestiary.getExtensions(built, new Set());
        // /**
        //  * At this point, the built creature has been fully resolved from all
        //  * extensions and in-memory creature definitions.
        //  */
        // for (const extension of extensions.reverse()) {
        //     built = Object.assign(built, extension);
        // }
        // built = Object.assign(built, this.adversary ?? {}, this.params ?? {});

        // TODO: might want to transform links
        //built = this.transformLinks(built);

        if ("image" in built && Array.isArray(built.image)) {
            built.image = built.image.flat(2).join("");
        }

        return built as Adversary;
    }

    createLabeledBlock(container: HTMLElement, classTag: string, label: string, value: any) {
        let block = container.createEl("dl");
        block.classList.add(classTag);
        block.createEl("dt", { text: label });
        block.createEl("dd", { text: value });
    }

    async init() {
        this.containerEl.empty();
        this.adversary = (await this.build()) as Adversary;
        console.log("after build", this.adversary);
        
        // create adversary block
        let blockContainer = this.container.createEl("div");
        blockContainer.classList.add("dht-adversary");

        let block = blockContainer.createEl("div");
        if (this.adversary.narrow) {
            block.classList.add("narrow");
        }

        if (this.adversary.forceColumns) {
            block.classList.add("two-cols");
        }
        
        block.createEl("h1", { text: this.adversary.name })

        if (this.adversary.image) {
            console.log("image", this.adversary.image);
        }

        if (this.adversary.tier != undefined) {
            block.createEl("h3", { text: `Tier ${this.adversary.tier} ${this.adversary.type}`})
        }
        
        block.createEl("div", { text: this.adversary.description }).classList.add("description");
        this.createLabeledBlock(block, "motives", "Motives and Tactics: ", this.adversary.motives_and_tactics);

        // attributes
        block.createEl("hr", "divider");
        let attributes = block.createEl("div", "attributes"); 
        this.createLabeledBlock(attributes, "difficulty", "Difficulty: ", this.adversary.difficulty);
        this.createLabeledBlock(attributes, "thresholds", "Thresholds: ", this.adversary.thresholds)
        this.createLabeledBlock(attributes, "atk", "ATK: ", this.adversary.atk)
        this.createLabeledBlock(attributes, "hp", "HP: ", this.adversary.hp)
        this.createLabeledBlock(attributes, "stress", "Stress: ", this.adversary.stress)
        block.createEl("hr", "divider");
        // Experiences
        this.createLabeledBlock(block, "experience", "Experience: ", this.adversary.experience)

        // Features
        let features = block.createEl("div", "features");
        features.createEl("h4", { text: "Features"})
        let featureList = features.createEl("ul", "feature-list")

        for (let i = 0; i < this.adversary.feats!.length; i++) {
            let li = featureList.createEl("li", `feature-${i}`)
            this.createLabeledBlock(li, `feature-block-${i}`, this.adversary.feats[i].name, this.adversary.feats[i].text)
        }

        // hp
        // let hp = block.createEl("div", { text: "HP:" });
        // let hplist = hp.createEl("ul")
        // hplist.classList.add("hp-list")
        // for (let i = 0; i < this.adversary.hp; i++) {
        //     let li = hplist.createEl("li")
        //     li.classList.add(`hp-${i}`)
        //     li.createEl("input", { type: "checkbox" });
        // }

        // add elements here

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
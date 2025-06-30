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

export interface Combatant {
    name: string;
    unitId: string;
    hp: number;
    stress: number;
    hope?: number;
}

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
    fileRef: TFile;
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

    createToggleList(container: HTMLElement, combatant: Combatant, prop: string, useLabel: boolean = true) {
        let div = container.createEl("div", `${prop}-toggles`);
        let list = div.createEl("ul", "toggle-list")
        for (let i = 0; i <= this.adversary[prop]; i++) {
            let li = list.createEl("li", `${prop}-${i}`)
            if (useLabel && i == 0) {
                li.createEl("span", { text: `${prop}:`, cls: [`${prop}-label`]})
            } else {
                let input = li.createEl("input", { type: "checkbox", cls: [`${prop}-input-i`] });
                console.log(combatant, (combatant as any)[prop], i);
                input.checked = i <= (combatant as any)[prop];
                input.addEventListener('change', (event: Event) => {
                    const target = event.target as HTMLInputElement;
                    const isChecked = target.checked;
                    console.log(isChecked);
                    this.updateCombatant(combatant.unitId, prop, isChecked);
                });
            }
        }
    }

    updateCombatant(unitId: string, prop: string, isChecked: boolean) {
        this.plugin.app.fileManager.processFrontMatter(this.fileRef, (frontmatter: any) => {
            if (isChecked) {
                frontmatter['dhscene'].adversaries[unitId][prop] += 1;
            } else {
                frontmatter['dhscene'].adversaries[unitId][prop] -= 1;
            }
            console.log('updateCombatant result', frontmatter);
        });
    }

    updateFrontmatter(block: HTMLElement) {
        this.plugin.app.fileManager.processFrontMatter(this.fileRef, (frontmatter: any) => {
            console.log('frontmatter-before', frontmatter);
            if (!frontmatter['dhscene']) {
                let scene = {
                    adversaries: new Map<string, Combatant>(),
                    bpTotal: 0,
                    allies: new Map<string, Combatant>(),
                    environments: new Map<string, Combatant>()
                }
                for (let i = 1; i <= this.adversary.qty; i++) {
                    let combatant: Combatant = { name: `${this.adversary.name} #${i}`, unitId: `${this.adversary.id}.${i}`, hp: 0, stress: 0 };
                    this.createTracker(block, combatant);
                    scene.adversaries.set(combatant.unitId, combatant);
                }
                frontmatter['dhscene'] = scene;
                console.log(scene);
            } else {
                let adversaries = Object.entries(frontmatter['dhscene'].adversaries)
                    .map(c => { return c[1] })
                    .filter((c: Combatant) => c.unitId.split('.')[0] == this.adversary.id);

                console.log(adversaries);

                if (adversaries.length != this.adversary.qty) {
                    if (adversaries.length < this.adversary.qty) {
                        // add until equal
                        for (let i = adversaries.length + 1; i <= this.adversary.qty; i++) {
                            let combatant: Combatant = { name: `${this.adversary.name} #${i}`, unitId: `${this.adversary.id}.${i}`, hp: 0, stress: 0 };
                            frontmatter['dhscene'].adversaries[combatant.unitId] = combatant;
                        }
                    } else {
                        // remove the missing ids
                        for (let i = adversaries.length; i > this.adversary.qty; i--) {
                            delete frontmatter['dhscene'].adversaries[`${this.adversary.id}.${i}`]; 
                        }
                    }

                    adversaries = Object.entries(frontmatter['dhscene'].adversaries)
                    .map(c => { return c[1] })
                    .filter((c: Combatant) => c.unitId.split('.')[0] == this.adversary.id);
                }

                adversaries.forEach((adversary: Combatant) => {
                    if (adversary.unitId.split('.')[0] == this.adversary.id) {
                        this.createTracker(block, adversary);
                    }
                });
            }
            console.log('frontmatter-after', frontmatter);
        });
    }

    createTracker(block: HTMLElement, combatant: Combatant) {
        let tracker = block.createEl("div", "tracker");
        let unit = tracker.createEl("div", `unit-${combatant.unitId}`)
        unit.createEl("h3", { text: `${combatant.name}`, cls: [`adversary-slug`]});
        this.createToggleList(unit, combatant, "hp");
        this.createToggleList(unit, combatant, "stress");
    }

    async init() {
        this.containerEl.empty();
        this.adversary = (await this.build()) as Adversary;
        //console.log("after build", this.adversary);
        
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
            //console.log("image", this.adversary.image);
        }

        if (this.adversary.tier != undefined) {
            block.createEl("h3", { text: `Tier ${this.adversary.tier ?? 'none'} ${this.adversary.type ?? '' }`})
        }
        
        block.createEl("div", { text: this.adversary.description ?? '' }).classList.add("description");
        this.createLabeledBlock(block, "motives", "Motives and Tactics: ", this.adversary.motives_and_tactics ?? '');

        // attributes
        block.createEl("hr", "divider");
        let attributes = block.createEl("div", "attributes"); 
        this.createLabeledBlock(attributes, "difficulty", "Difficulty:", this.adversary.difficulty ?? '');
        this.createLabeledBlock(attributes, "thresholds", "Thresholds:", this.adversary.thresholds ?? '-')
        this.createLabeledBlock(attributes, "hp", "HP:", this.adversary.hp ?? 1)
        this.createLabeledBlock(attributes, "stress", "Stress:", this.adversary.stress ?? 1)
        this.createLabeledBlock(attributes, "atk", "ATK:", this.adversary.atk ?? '+0')
        this.createLabeledBlock(attributes, "attack", `${this.adversary.attack ?? 'Attack'}:`, `${this.adversary.range ?? 'Melee'} - ${this.adversary.damage ?? '1 phys'}`);
        block.createEl("hr", "divider");
        // Experiences
        this.createLabeledBlock(block, "experience", "Experience: ", this.adversary.experience ?? 'None')

        // Features
        let features = block.createEl("div", "features");
        features.createEl("h4", { text: "Features"})
        let featureList = features.createEl("ul", "feature-list")

        for (let i = 0; i < this.adversary.feats!.length; i++) {
            let li = featureList.createEl("li", `feature-${i}`)
            this.createLabeledBlock(li, `feature-block-${i}`, this.adversary.feats[i].name, this.adversary.feats[i].text)
        }

        if (this.adversary.tracked) {
            console.log("called");
            this.updateFrontmatter(block)
        }
        


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
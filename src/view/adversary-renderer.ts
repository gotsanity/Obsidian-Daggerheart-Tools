import { MarkdownRenderChild, parseYaml, stringifyYaml, TFile } from "obsidian";
import { Linkifier } from "src/parser/linkify";
import { Combatant } from "src/types/encounter";
import { RendererParameters } from "src/types/renderer";
import DaggerheartToolsPlugin from "src/main";
import { Adversary, AdversaryParameters } from "src/types/adversary";
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
            this.adversary = Object.assign({}, Bestiary.get(this.params.name));
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

        if ("tracked" in built) {
            if (built.tracked) {
                built.qty = this.params.qty ?? 1;
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
                input.checked = i <= (combatant as any)[prop];
                input.addEventListener('change', (event: Event) => {
                    const target = event.target as HTMLInputElement;
                    const isChecked = target.checked;
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
        });
    }

    updateFrontmatter(block: HTMLElement) {
        this.plugin.app.fileManager.processFrontMatter(this.fileRef, (frontmatter: any) => {
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
            } else {
                let adversaries = Object.entries(frontmatter['dhscene'].adversaries)
                    .map(c => { return c[1] })
                    .filter((c: Combatant) => c.unitId.split('.')[0] == this.adversary.id);

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
        });
    }

    removeCombatant(combatant: Combatant) {
        this.plugin.app.fileManager.processFrontMatter(this.fileRef, (frontmatter: any) => {
            if (!frontmatter['dhscene']) {
                return;
            } else {
                delete frontmatter['dhscene'].adversaries[`${combatant.unitId}`]; 
            }
        });
    }

    createTracker(block: HTMLElement, combatant: Combatant) {
        let tracker = block.createEl("div", "tracker");
        let unit = tracker.createEl("div", `unit-${combatant.unitId}`)
        unit.createEl("h3", { text: `${combatant.name}`, cls: [`adversary-slug`]});
        let unitControls = unit.createEl('div', 'unit-controls');
        let removeButton = unitControls.createEl('input', { type: 'button', value: "Delete" });
        removeButton.addEventListener('click', async (evt) => {
            console.log("Removing", combatant.unitId);
            this.removeCombatant(combatant);
            this.plugin.setYamlProperty("qty", this.adversary.qty - 1, this.adversary.qty, this.adversary);
        });
        this.createToggleList(unit, combatant, "hp");
        this.createToggleList(unit, combatant, "stress");
    }

    async init() {
        this.containerEl.empty();
        this.adversary = (await this.build()) as Adversary;
        this.$adversaryBlock = mount(AdversaryBlock, {
            target: this.containerEl,
            props: {
                context: this.context,
                adversary: this.adversary,
                plugin: this.plugin,
                renderer: this
            }
        });
        

        // // create adversary block
        // let blockContainer = this.container.createEl("div");
        // blockContainer.classList.add("dht-adversary");

        // let block = blockContainer.createEl("div");
        // if (this.adversary.narrow) {
        //     block.classList.add("narrow");
        // }

        // if (this.adversary.forceColumns) {
        //     block.classList.add("two-cols");
        // }
        
        // block.createEl("h1", { text: this.adversary.name })

        // if (this.adversary.image) {
        //     //console.log("image", this.adversary.image);
        // }

        // if (this.adversary.tier != undefined) {
        //     block.createEl("h3", { text: `Tier ${this.adversary.tier ?? 'none'} ${this.adversary.type ?? '' }`})
        // }
        
        // block.createEl("div", { text: this.adversary.description ?? '' }).classList.add("description");
        // this.createLabeledBlock(block, "motives", "Motives and Tactics: ", this.adversary.motives_and_tactics ?? '');

        // // attributes
        // block.createEl("hr", "divider");
        // let attributes = block.createEl("div", "attributes"); 
        // this.createLabeledBlock(attributes, "difficulty", "Difficulty:", this.adversary.difficulty ?? '');
        // this.createLabeledBlock(attributes, "thresholds", "Thresholds:", this.adversary.thresholds ?? '-')
        // this.createLabeledBlock(attributes, "hp", "HP:", this.adversary.hp ?? 1)
        // this.createLabeledBlock(attributes, "stress", "Stress:", this.adversary.stress ?? 1)
        // this.createLabeledBlock(attributes, "atk", "ATK:", this.adversary.atk ?? '+0')
        // this.createLabeledBlock(attributes, "attack", `${this.adversary.attack ?? 'Attack'}:`, `${this.adversary.range ?? 'Melee'} - ${this.adversary.damage ?? '1 phys'}`);
        // block.createEl("hr", "divider");
        // // Experiences
        // this.createLabeledBlock(block, "experience", "Experience: ", this.adversary.experience ?? 'None')

        // // Features
        // let features = block.createEl("div", "features");
        // features.createEl("h4", { text: "Features"})
        // let featureList = features.createEl("ul", "feature-list")

        // for (let i = 0; i < this.adversary.feats!.length; i++) {
        //     let li = featureList.createEl("li", `feature-${i}`)
        //     this.createLabeledBlock(li, `feature-block-${i}`, this.adversary.feats[i].name, this.adversary.feats[i].text)
        // }

        
        // if (this.adversary.tracked) {
        //     this.updateFrontmatter(block)
        // }

        // let controls = block.createEl('div', 'controls');
        // let tracking = controls.createEl('div', 'tracking-control');
        // if (!this.adversary.tracked) {
        //     let trackingButton = tracking.createEl('input', { type: 'button', value: "Start Tracking" });
        //     trackingButton.addEventListener('click', async (evt) => {
        //         await this.plugin.addYamlProperty<String, Boolean>("tracked", true, this.adversary);
        //         await this.plugin.addYamlProperty<String, Boolean>("qty", 1, this.adversary);
        //     });
        // } else {
        //     let addButton = tracking.createEl('input', { type: 'button', value: "Add Combatant" });
        //     addButton.addEventListener('click', async (evt) => {
        //         await this.plugin.setYamlProperty<String, Boolean>("qty", this.adversary.qty + 1, this.adversary.qty, this.adversary);
        //     });
        // }
        


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
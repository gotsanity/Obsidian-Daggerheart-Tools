import { MarkdownRenderChild, parseYaml, stringifyYaml, TFile } from "obsidian";
import { Linkifier } from "src/parser/linkify";
import type { EnvironmentRendererParameters, RendererParameters } from "src/types/renderer";
import DaggerheartToolsPlugin from "src/main";
import { mount } from "svelte";
import type { Environment, EnvironmentParameters } from "src/types/environment";
import EnvironmentBlock from "./EnvironmentBlock.svelte";



export default class EnvironmentRenderer extends MarkdownRenderChild {
    topBar!: HTMLDivElement;
    bottomBar!: HTMLDivElement;
    loaded: boolean = false;
    environmentEL!: HTMLDivElement;
    contentEl!: HTMLDivElement;
    container: HTMLElement;
    environment!: Environment;
    plugin: DaggerheartToolsPlugin;
    params!: Partial<EnvironmentParameters>;
    context: string;
    fileRef: TFile;
    $environmentBlock!: ReturnType<typeof EnvironmentBlock> | undefined;

    constructor(
        public rendererParameters: EnvironmentRendererParameters,
        public icons = true
    ) {
        super(rendererParameters.container);

        this.container = rendererParameters.container;
        this.plugin = rendererParameters.plugin;
        this.context = rendererParameters.context ?? "";
        this.fileRef = this.plugin.app.workspace.getActiveFile()!;
        this.getEnvironment(rendererParameters);
        this.init();
    }

    getEnvironment(params: | { environment: Environment } | { params: Partial<EnvironmentParameters> }) {
        if ("params" in params) {
            this.params = params.params
            this.environment = Object.assign({}, this.plugin.environments.find(a => a.name == this.params.name!));
        } else {
            this.params = {};
            this.environment = params.environment;
        }
    }

    async build(): Promise<Environment> {
        let built: Partial<Environment> = Object.assign(
            {},
            this.environment ?? {},
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

        built = Object.assign(built, this.environment ?? {}, this.params ?? {});

        built = this.transformLinks(built);

        if ("image" in built && Array.isArray(built.image)) {
            built.image = built.image.flat(2).join("");
        }

        return built as Environment;
    }

    transformLinks(monster: Partial<Environment>): Partial<Environment> {
        const built = parseYaml(
            Linkifier.transformYamlSource(
                stringifyYaml(monster).replace(/\\#/g, "#")
            )
        );
        return built;
    }

    async init() {
        this.containerEl.empty();
        console.log("renderer found", this.environment, this.params);
        this.environment = (await this.build()) as Environment;

        this.$environmentBlock = mount(EnvironmentBlock, {
            target: this.containerEl,
            props: {
                context: this.context,
                environment: this.environment,
                plugin: this.plugin,
            }
        });
    }
}
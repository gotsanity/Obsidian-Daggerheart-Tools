
import DaggerheartToolsPlugin from "src/main";
import type { Adversary, AdversaryParameters } from "./adversary";
import type { Environment, EnvironmentParameters } from "./environment";

export type RendererParameters = {
    container: HTMLElement;
    plugin: DaggerheartToolsPlugin;
    context?: string;
} & (
    | {
          adversary: Adversary;
      }
    | {
          params: Partial<AdversaryParameters>;
      }
);

export type EnvironmentRendererParameters = {
    container: HTMLElement;
    plugin: DaggerheartToolsPlugin;
    context?: string;
} & (
    | {
          environment: Environment;
      }
    | {
          params: Partial<EnvironmentParameters>;
      }
);
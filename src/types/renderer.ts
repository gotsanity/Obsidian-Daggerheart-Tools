
import DaggerheartToolsPlugin from "src/main";
import { Adversary, AdversaryParameters } from "./adversary";

export type RendererParameters = {
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
import "obsidian";

interface DaggerheartEvents {
    "daggerheart-tools:settings-change": DaggerheartToolsSettings;
    "daggerheart-tools:frontmatter-change": boolean;
    "daggerheart-tools:srd-change": boolean;
    "daggerheart-tools:loaded": null;
}

declare module "obsidian" {
    interface App {
        plugins: {
            getPlugin<T extends keyof Plugins>(plugin: T): Plugins[T];
        };
        commands: {
            listCommands: () => Command[];
            executeCommandById: (id: string) => boolean;
        };
        setting: {
            close: () => void;
        };
    }
    interface MetadataCache {
        initialized: boolean;
        getLinkSuggestions(): { alias?: string; file: TFile; path: string }[];
    }
    interface HoverLinkEvent {
        event: MouseEvent;
        source: string;
        hoverParent: WorkspaceLeaf;
        targetEl: HTMLElement | null;
        linktext: string;
        sourcePath?: string;
        state?: {
            scroll: unknown;
        };
    }
    interface Workspace {
        on<T extends keyof DaggerheartEvents>(
            name: T,
            callback: (data: DaggerheartEvents[T]) => void
        ): EventRef;
        trigger<T extends keyof DaggerheartEvents>(
            name: T,
            data: DaggerheartEvents[T]
        ): void;
        trigger(name: "hover-link", data: HoverLinkEvent): EventRef;
    }
    interface WorkspaceLeaf {
        parent: WorkspaceParent;
    }
    interface WorkspaceParent {
        children: WorkspaceLeaf[];
    }
}

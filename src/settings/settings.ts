import { PluginSettingTab, App, Setting } from "obsidian";
import DaggerheartToolsPlugin from "src/main";
import type { Adversary } from "src/types/adversary";
import type { AbilityCard } from "src/types/card";
import type { Encounter } from "src/types/encounter";
import type { Environment } from "src/types/environment";

export interface DaggerheartToolsSettings {
	parseFrontmatter: boolean;
	adversaries: Adversary[];
	encounters: Encounter[];
	environments: Environment[];
	abilityCards: AbilityCard[];
    version: {
        major: number;
        minor: number;
        patch: number;
    };
	disableSRD: boolean;
	saved: boolean;
}

export const DEFAULT_SETTINGS: DaggerheartToolsSettings = {
	parseFrontmatter: false,
	adversaries: [],
	encounters: [],
	environments: [],
	abilityCards: [],
	version: {
        major: 1,
        minor: 0,
        patch: 0,
    },
	disableSRD: false,
	saved: false
}

export class DaggerheartToolsSettingsTab extends PluginSettingTab {
	plugin: DaggerheartToolsPlugin;

	constructor(app: App, plugin: DaggerheartToolsPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const {containerEl} = this;

		containerEl.empty();

		new Setting(containerEl)
			.setName('Parse Frontmatter')
			.setDesc('Turn this on to scan frontmatter for daggerheart related information. Scan defaults to entire vault.')
			.addToggle(item => item
				.setValue(this.plugin.settings.parseFrontmatter)
				.setTooltip("If this is set to true the plugin will scan frontmatter in documents for daggerheart information.")
				.onChange(async (value) => {
					this.plugin.settings.parseFrontmatter = value;
					await this.plugin.saveSettings();
				})
			);
		
		new Setting(containerEl)
			.setName('Disable SRD Content')
			.setDesc('Turn this on to remove SRD content.')
			.addToggle(item => item
				.setValue(this.plugin.settings.disableSRD)
				.setTooltip("If this is set to true the plugin will scan frontmatter in documents for daggerheart information.")
				.onChange(async (value) => {
					this.plugin.settings.disableSRD = value;
					await this.plugin.saveSettings();
				})
			);
	}
}

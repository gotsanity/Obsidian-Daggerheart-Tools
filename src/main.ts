import {
	addIcon,
	App,
	Editor,
	EditorPosition,
	EditorSuggest,
	EditorSuggestContext,
	EditorSuggestTriggerInfo,
	MarkdownPostProcessorContext,
	MarkdownView,
	Modal,
	Notice,
	parseYaml,
	Plugin,
	PluginSettingTab,
	Setting,
	TFile,
	WorkspaceLeaf
} from 'obsidian';
import {
	Adversary,
	AdversoryProps,
	BESTIARY,
	BESTIARY_BY_NAME
} from 'src/bestiary/daggerheart-srd-bestiary';
import AdversaryBlockRenderer from 'src/view/adversary-renderer';
import { stringify } from './util/util';

// Remember to rename these classes and interfaces!

enum SuggestContext {
    Adversary,
    Environment,
	Card,
    Property,
    Bool,
    None
}

const STANDARD_FIELDS = [
    "adversary",
    "name",
    "layout",
    "source",
    "render",
    "extends"
];

interface DaggerheartToolsSettings {
	parseFrontmatter: boolean;
}

const DEFAULT_SETTINGS: DaggerheartToolsSettings = {
	parseFrontmatter: false
}

export default class DaggerheartToolsPlugin extends Plugin {
	static iconId = "daggerheart-compatible";
	static iconSvgContent = `
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" viewBox="0 0 288 328" enable-background="new 0 0 288 328" xml:space="preserve">
<path fill="currentColor"
	d="
M0.999999,65.468658 
	C1.672077,64.360992 2.732320,63.836094 2.958686,63.066063 
	C7.128185,48.882591 16.789982,40.503860 30.744240,36.714104 
	C41.516121,33.788628 52.251358,34.190044 64.174812,37.359829 
	C61.883854,39.185268 60.558819,40.483410 59.017834,41.430008 
	C48.160854,48.099216 43.378704,61.093002 47.315422,73.650238 
	C52.028469,88.683792 61.541943,100.221542 73.483864,110.333763 
	C82.263260,117.768005 90.989777,125.823441 93.391655,137.973297 
	C94.149879,141.808777 94.703911,146.073837 93.819641,149.776489 
	C90.250656,164.720734 95.766029,176.591553 105.619171,187.039825 
	C112.814529,194.669754 120.600327,201.743088 127.791428,209.376801 
	C139.730576,222.050812 151.050323,235.352005 158.870926,250.998322 
	C167.073227,267.408295 169.686539,285.131073 162.522812,302.285858 
	C157.510056,314.289734 147.456650,322.927704 135.096161,328.649231 
	C131.307098,329.000000 127.614182,329.000000 123.460716,328.619568 
	C123.709358,326.658142 124.108376,324.817383 125.178871,323.538910 
	C131.417694,316.088043 131.017120,307.076324 129.606888,298.721497 
	C127.458153,285.991425 121.196014,274.571503 114.184715,263.812500 
	C107.588501,253.690521 99.635529,244.762741 90.486755,236.643539 
	C80.358932,227.655472 71.108887,217.584351 62.257935,207.311661 
	C59.770027,204.424149 58.599979,198.913376 59.291424,195.046814 
	C61.578651,182.256653 64.885094,169.641388 68.008324,157.010422 
	C70.424995,147.236954 68.250618,138.460403 62.730270,130.370117 
	C59.154095,125.129105 51.579742,123.474297 45.627804,125.760330 
	C38.625736,128.449707 35.743038,134.583191 33.366463,140.630844 
	C31.840286,144.514481 29.665527,145.790192 26.463255,144.841415 
	C23.682953,144.017700 20.602663,142.379898 18.870525,140.155365 
	C10.558883,129.480942 5.509769,117.255775 2.938966,103.975227 
	C2.730580,102.898712 1.666473,101.987839 1.000001,101.000000 
	C1.000000,89.312439 1.000000,77.624878 0.999999,65.468658 
z"/>
<path fill="currentColor"
	d="
M130.550018,0.999998 
	C134.685059,3.837839 139.124634,6.087677 141.892960,9.639941 
	C147.127518,16.356831 146.395370,18.296143 139.385910,23.235449 
	C138.456940,23.890066 137.710510,24.803755 136.001633,26.436014 
	C141.784805,30.095911 147.107483,33.568111 152.536026,36.866001 
	C156.644547,39.361958 160.851105,41.704105 165.080688,43.991444 
	C171.008865,47.197372 171.557999,52.520515 171.008530,58.368538 
	C170.549942,63.249382 166.836472,65.566254 163.150711,67.193779 
	C156.007767,70.347916 148.458984,70.240807 140.670685,69.504852 
	C131.948593,68.680649 122.975113,68.339516 114.336845,69.487450 
	C107.294945,70.423241 103.537857,77.945885 103.042023,86.291054 
	C102.167725,101.006203 110.129486,111.625946 120.909554,119.749443 
	C128.626984,125.565056 137.793198,129.558395 146.567078,133.844696 
	C156.084152,138.494095 162.972565,145.088211 165.230209,155.724091 
	C166.000458,159.352844 166.673569,163.037323 166.945740,166.729156 
	C167.466232,173.789612 166.836914,181.047516 168.270050,187.891510 
	C169.370132,193.145081 171.745850,199.169205 175.567307,202.623856 
	C187.832748,213.711868 192.675140,227.104660 192.082855,243.239578 
	C191.679886,254.216537 190.413391,264.890137 184.968796,274.613861 
	C183.413574,277.391418 181.104568,279.746887 179.390503,281.972260 
	C178.297302,274.142029 177.742874,266.809113 176.178986,259.698242 
	C173.293610,246.578674 166.739059,234.992111 158.172348,224.927322 
	C148.008347,212.985901 136.828827,201.904709 126.005417,190.530640 
	C121.618759,185.920761 116.974396,181.557251 112.512489,177.017563 
	C107.366608,171.781982 107.272064,156.403244 113.757324,149.868103 
	C116.074768,147.532852 117.559853,149.263672 118.958855,151.527863 
	C121.981735,156.420242 125.041885,161.331055 128.611023,165.817261 
	C129.585541,167.042160 132.918396,167.697174 134.269974,166.961685 
	C135.727753,166.168427 137.306305,162.984024 136.784836,161.632889 
	C134.844864,156.606415 133.093872,150.820389 129.389618,147.300247 
	C120.921364,139.252884 111.461258,132.220825 102.190727,125.052193 
	C84.580215,111.434502 70.777092,95.099701 64.710670,73.221222 
	C60.491470,58.004734 71.844864,43.742432 86.055428,41.105839 
	C92.925636,39.831154 100.022552,39.823254 106.972183,38.904232 
	C109.043846,38.630280 110.964165,37.211895 112.953827,36.317863 
	C112.092735,34.499409 111.659149,32.219101 110.288872,30.950754 
	C106.470474,27.416382 102.020164,24.549360 98.318794,20.910776 
	C96.618034,19.238865 94.926292,16.117357 95.372841,14.136038 
	C95.762779,12.405878 99.099609,10.324371 101.235764,10.204614 
	C106.448860,9.912357 111.725044,10.956317 116.966919,10.876554 
	C119.545166,10.837323 122.103630,9.497827 124.671043,8.746740 
	C123.587814,6.364797 122.504578,3.982854 121.710670,1.300455 
	C124.700012,1.000000 127.400024,1.000000 130.550018,0.999998 
z"/>
<path fill="currentColor"
	d="
M289.000000,97.562500 
	C284.620056,100.549431 279.955109,102.721313 275.939056,105.752838 
	C271.795532,108.880592 268.730804,108.312576 265.344452,104.880615 
	C256.358551,95.773689 247.293488,86.744141 238.195801,77.748665 
	C235.118118,74.705574 235.084732,71.545525 237.335205,68.127098 
	C239.891357,64.244339 242.400955,60.326626 245.089096,56.536381 
	C247.418945,53.251308 250.696930,53.276367 254.144485,56.677494 
	C262.425507,64.846977 270.613678,73.110580 278.837311,81.338242 
	C282.006805,84.509285 285.170776,87.685791 288.668640,90.929901 
	C289.000000,93.041664 289.000000,95.083336 289.000000,97.562500 
z"/>
<path fill="currentColor"
	d="
M248.250000,99.750000 
	C257.806396,109.302460 267.122101,118.595665 276.415405,127.911194 
	C281.221191,132.728485 281.190002,134.270798 276.321350,139.184967 
	C270.273529,145.289307 268.870575,145.590637 264.058441,140.419403 
	C261.297791,137.452774 259.615143,137.659042 256.890808,140.468491 
	C248.668686,148.947357 240.160370,157.148697 231.574982,165.644913 
	C235.142975,172.257645 238.233887,178.819839 242.076187,184.907806 
	C247.554672,193.588303 246.025620,202.653061 244.607407,211.836868 
	C243.395172,219.686783 242.159698,227.533463 241.011932,235.392883 
	C239.884949,243.110153 239.388199,250.969803 237.572845,258.516327 
	C236.568420,262.691833 234.079468,266.956299 231.134354,270.139496 
	C220.095642,282.070557 208.314331,293.318420 197.369171,305.330658 
	C190.794281,312.546570 182.925659,315.997070 173.569763,317.017059 
	C171.122482,317.283875 168.698242,317.762207 166.100342,318.168915 
	C169.267166,312.204529 171.934052,306.779114 175.009109,301.595825 
	C176.177185,299.626953 178.210739,298.132477 179.975388,296.562927 
	C190.819458,286.917480 199.328369,275.867188 200.962891,260.869354 
	C201.848511,252.743073 203.148941,244.540649 202.825317,236.429916 
	C202.207779,220.953033 197.265808,207.062027 184.523300,197.011703 
	C178.916595,192.589554 178.659073,186.082748 178.046555,179.831619 
	C177.201309,171.205261 177.410690,162.413101 175.853958,153.933258 
	C173.393738,140.531815 164.995499,131.206284 153.004135,124.991020 
	C144.749619,120.712608 136.491364,116.436592 128.338669,111.969872 
	C126.258614,110.830238 124.573380,108.969971 121.619377,106.550018 
	C127.534111,105.557274 132.171799,104.772507 136.811844,104.002037 
	C140.802017,103.339478 144.792801,102.208633 148.787247,102.191238 
	C152.055740,102.177010 155.583771,102.954765 158.550262,104.338570 
	C165.241638,107.459961 171.715607,111.069000 178.159119,114.691177 
	C181.394226,116.509781 183.605896,116.155792 186.266708,113.372772 
	C194.412888,104.852493 202.880783,96.639809 211.419495,88.111778 
	C210.650146,87.261726 210.138733,86.651787 209.581177,86.087463 
	C202.950577,79.376495 203.401947,75.178268 211.494797,70.209122 
	C214.365326,68.446556 217.035538,68.314743 219.802155,71.172699 
	C229.067963,80.744339 238.581390,90.076279 248.250000,99.750000 
z"/>
<path fill="currentColor"
	d="
M46.755836,147.743622 
	C48.544319,145.968231 49.959354,144.285385 51.662434,142.977676 
	C52.856140,142.061066 54.620968,140.947128 55.798859,141.242920 
	C56.775906,141.488266 57.915154,143.692337 57.857758,144.978470 
	C57.662300,149.358047 57.294113,153.782776 56.405159,158.068573 
	C53.759041,170.825989 50.142803,183.427902 48.325687,196.291168 
	C47.489761,202.208679 48.904900,209.126877 53.536903,213.926788 
	C64.207001,224.983673 75.126389,235.804932 86.110733,246.552048 
	C94.916000,255.167191 102.930779,264.445831 108.604919,275.367188 
	C112.557205,282.974365 116.111092,290.973633 118.394569,299.199829 
	C120.005684,305.003784 120.476433,311.695740 116.799545,317.359619 
	C115.189896,319.839111 113.769905,322.237183 109.445213,319.348724 
	C94.736328,309.524811 79.242271,300.865631 64.659065,290.870209 
	C59.550121,287.368500 55.650784,281.651093 52.170376,276.312286 
	C43.213032,262.572052 35.115063,248.267090 26.024315,234.620377 
	C21.937628,228.485580 23.177488,222.635651 24.241680,216.437744 
	C26.130865,205.435028 27.807133,194.385696 30.087030,183.463287 
	C31.874956,174.897812 31.158731,165.527069 37.039848,158.150833 
	C39.915974,154.543518 43.333138,151.367584 46.755836,147.743622 
z"/>
</svg>
	`;
	settings: DaggerheartToolsSettings;

	async onload() {
		console.log("Loaded Daggerheart-Tools")
		await this.loadSettings();
		addIcon(DaggerheartToolsPlugin.iconId, DaggerheartToolsPlugin.iconSvgContent);

		const ribbonIconEl = this.addRibbonIcon('daggerheart-compatible', 'Daggerheart Tools', (evt: MouseEvent) => {
			// Called when the user clicks the icon.
			new Notice('Opening an new adversary Modal!');
		});
		ribbonIconEl.addClass('daggerheart-tools-ribbon-class');

		// This adds an editor command that can perform some operation on the current editor instance
		this.addCommand({
			id: 'dhtools-add-adversary-command',
			name: 'Add adversary to current document',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				// console.log(editor.getSelection());
				new Notice("This feature does not work correctly yet.");
			}
		});

		// This adds a complex command that can check whether the current state of the app allows execution of the command
		this.addCommand({
			id: 'open-daggerheart-adversary-modal',
			name: 'Add a new Adversary to the database',
			checkCallback: (checking: boolean) => {
				// Conditions to check
				const markdownView = this.app.workspace.getActiveViewOfType(MarkdownView);
				if (markdownView) {
					// If checking is true, we're simply "checking" if the command can be run.
					// If checking is false, then we want to actually perform the operation.
					if (!checking) {
						new AdversaryModal(this.app).open();
					}

					// This command will only show up in Command Palette when the check function returns true
					return true;
				}
			}
		});

		this.registerMarkdownCodeBlockProcessor(
			"adversary",
			this.postprocessor.bind(this)
		);

		this.registerEditorSuggest(new AdversarySuggester(this));

		this.addSettingTab(new DaggerheartToolsSettingsTab(this.app, this));
	}

	onunload() {

	}

	async addYamlProperty<K, T>(prop: K, val: T, adversary: Adversary) {
		await app.workspace.getActiveFileView().setState({ mode: 'source', source: false }, {}); // live preview mode

		let editor = await this.app.workspace.activeEditor?.editor;

		if (!editor) {
			new Notice("No editor available. Please switch to preview mode.");
		}
		let eol = editor?.lineCount()!;
		let end = { line: eol + 1, ch: 0 };
		const range = await editor?.getRange({ line: 0, ch: 0 }, end);

        if (range.indexOf("```adversary\n") === -1) return null;
		
		const split = range.split("\n");

		// check to see if we found a block
        let inBlock = false;
		let starts: number[] = [];
		let ends: number[] = [];

		let lastEnd: number = -1;

        for (let i = split.length - 1; i >= 0; i--) {
            let line = split[i];
			
			// find ends
            if (/\`\`\`$/.test(line)) {
				lastEnd = i;
			}

			// find starts
            if (/\`\`\`adversary/.test(line)) {
                inBlock = true;
                starts.push(i);
				if (lastEnd >= 0) {
					ends.push(lastEnd);
					lastEnd = -1;
				} else {
					new Notice("Daggerheart Tools encountered a syntax error.");
					return;
				}
            }
        }

        if (!inBlock) return;

		if (starts.length != ends.length) {
			new Notice("Daggerheart Tools encountered a syntax error.");
			return;
		}

		for (let i = 0; i < starts.length; i++) {
			let start = { line: starts[i], ch: 0 };
			let end = { line: ends[i], ch: 0 };
			let subRange = await editor?.getRange(start, end);
			if (subRange?.indexOf(`name: ${ adversary.name }`)! > -1) {
				// TODO: add check for prefixed text like callouts
				editor?.replaceRange(
					`${prop}: ${val}\n`,
					end
				);
			}
		}
	}

	async setYamlProperty<K, T>(prop: K, val: T, oldVal: T, adversary: Adversary) {
		await app.workspace.getActiveFileView().setState({ mode: 'source', source: false }, {}); // live preview mode

		let editor = await this.app.workspace.activeEditor?.editor;

		if (!editor) {
			new Notice("No editor available. Please switch to preview mode.");
		}
		let eol = editor?.lineCount()!;
		let end = { line: eol + 1, ch: 0 };
		const range = await editor?.getRange({ line: 0, ch: 0 }, end);

        if (range.indexOf("```adversary\n") === -1) return null;
		
		const split = range.split("\n");

		// check to see if we found a block
        let inBlock = false;
		let starts: number[] = [];
		let ends: number[] = [];

		let lastEnd: number = -1;

        for (let i = split.length - 1; i >= 0; i--) {
            let line = split[i];
			
			// find ends
            if (/\`\`\`$/.test(line)) {
				lastEnd = i;
			}

			// find starts
            if (/\`\`\`adversary/.test(line)) {
                inBlock = true;
                starts.push(i);
				if (lastEnd >= 0) {
					ends.push(lastEnd);
					lastEnd = -1;
				} else {
					new Notice("Daggerheart Tools encountered a syntax error.");
					return;
				}
            }
        }

        if (!inBlock) return;

		if (starts.length != ends.length) {
			new Notice("Daggerheart Tools encountered a syntax error.");
			return;
		}

		for (let i = 0; i < starts.length; i++) {
			let start = { line: starts[i], ch: 0 };
			let end = { line: ends[i], ch: 0 };
			let subRange = await editor?.getRange(start, end);
			if (subRange?.indexOf(`name: ${ adversary.name }`)! > -1) {
				let subline = subRange?.split('\n').indexOf(`${prop}: ${oldVal}`)!;
				if (subline === -1) {
					editor?.replaceRange(
						`${prop}: ${val}\n`,
						end
					);
					return;
				}
				let innerStart = { line: start.line + subline, ch: 0 }
				let innerEnd = { line: start.line + subline, ch: subRange?.split('\n')[subline].length! }
				editor?.replaceRange(
					`${prop}: ${val}`,
					innerStart,
					innerEnd,
					`${adversary.name}`
				);
			}
		}
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	async postprocessor(source: string, el: HTMLElement, ctx: MarkdownPostProcessorContext) {
		try {
            // /** Replace Links */
            //source = Linkifier.transformSource(source);

            /** Get Parameters */
            let params: AdversaryParameters = parseYaml(source);

            el.addClass("dht-plugin-container");
            el.parentElement?.addClass("dht-plugin-parent");

            let adversary = new AdversaryBlockRenderer({
                container: el,
                plugin: this,
                params,
                context: ctx.sourcePath
            });

            ctx.addChild(adversary);
        } catch (e) {
            console.error(`Obsidian Statblock Error:\n${e}`);
            let pre = createEl("pre");
            pre.setText(`\`\`\`adversary
				There was an error rendering the statblock:
				${e.stack
					.split("\n")
					.filter((line: string) => !/^at/.test(line?.trim()))
					.join("\n")}
				\`\`\``);
        }
    }

	getBestiaryNames(): string[] {
		return BESTIARY.map(a => a.name);
	}
}

export interface AdversaryParameters
    extends Omit<
        Adversary,
        | "feats"
    > {
    feats?: { text: string; name: string }[];
}

class AdversaryModal extends Modal {
	constructor(app: App) {
		super(app);
	}

	onOpen() {
		const {contentEl} = this;
		contentEl.setText('Woah!');
	}

	onClose() {
		const {contentEl} = this;
		contentEl.empty();
	}
}

class DaggerheartToolsSettingsTab extends PluginSettingTab {
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
	}
}

export type CommonProps = {
	id: string;
	type: string;
    properties: string[];
    fallback?: string;
    hasRule?: boolean;
    dice?: boolean;
    diceProperty?: keyof Adversary;
    diceText?: string;
    diceCallback?: string;
    doNotAddClass?: boolean;
};

export class AdversarySuggester extends EditorSuggest<string> {
    private _context: SuggestContext = SuggestContext.None;
    private _keys: string[];
	private _props: Map<string, CommonProps>;
    //private _props: Map<string, CommonProps>;
    constructor(public plugin: DaggerheartToolsPlugin) {
        super(plugin.app);
    }

    getSuggestions(ctx: EditorSuggestContext) {
        let suggestions: string[] = [];
        switch (this._context) {
            case SuggestContext.Bool: {
                suggestions = ["true", "false"];
                break;
            }
            case SuggestContext.Adversary: {
                suggestions = this.plugin.getBestiaryNames();
                break;
            }
			case SuggestContext.Property: {
				suggestions = [
                    ...new Set([
                        ...STANDARD_FIELDS,
                        ...(this._props.keys() ?? [])
                    ])
                ].filter((k) => !this._keys.includes(k));
				break;
			}
            case SuggestContext.None:
            default: {
                return [];
            }
        }

        return !ctx.query?.length
            ? suggestions
            : suggestions.filter((p) =>
                  p.toLowerCase().contains(ctx.query.toLowerCase())
              );
    }

    renderSuggestion(text: string, el: HTMLElement) {
        el.createSpan({ text });
    }

    selectSuggestion(value: string, evt: MouseEvent | KeyboardEvent): void {
        if (!this.context) return;
        const line = this.context.editor
            .getLine(this.context.end.line)
            .slice(this.context.end.ch);
        const [_, exists] = line.match(/^(\] ?)/) ?? [];

        let cursorAddition;
        if (this._context === SuggestContext.Property) {
            if (this._props.has(value)) {
                const prop = this._props.get(value);
                switch (prop.type) {
                    // /** Text only */
                    // case "heading":
                    // case "subheading":
                    // case "property":
                    // case "image":
                    // case "text": {
                    //     value = `${value}: `;
                    //     break;
                    // }
                    // /** Traits */
                    // case "traits": {
                    //     value = `${value}:\n  - name: \n    desc:`;
                    //     cursorAddition = value.length - `\n    desc:`.length;
                    //     break;
                    // }
                    // /** Array of strings */
                    // case "table": {
                    //     value = `${value}: []`;
                    //     cursorAddition = value.length - 1;
                    //     break;
                    // }
                    // /** Array */
                    // case "saves":
                    // case "spells": {
                    //     value = `${value}:\n  - `;
                    //     cursorAddition = value.length;
                    //     break;
                    // }
                    // /** Nothing */
                    // case "inline":
                    // case "group":
                    // case "ifelse":
                    // case "collapse":
                    // case "javascript":
                    // case "layout":
                    default: {
                        break;
                    }
                }
            } else {
                value = `${value}: `;
                cursorAddition = value.length;
            }
        }

        this.context.editor.replaceRange(
            `${value}`,
            this.context.start,
            {
                ...this.context.end,
                ch:
                    this.context.start.ch +
                    this.context.query.length +
                    (exists?.length ?? 0)
            },
            "adversary"
        );

        this.context.editor.setCursor(
            this.context.start.line,
            this.context.start.ch + cursorAddition
        );

        this.close();
    }
	
    onTrigger(
        cursor: EditorPosition,
        editor: Editor,
        file: TFile
    ): EditorSuggestTriggerInfo {
        const range = editor.getRange({ line: 0, ch: 0 }, cursor);

        if (range.indexOf("```adversary\n") === -1) return null;

        const split = range.split("\n");

		// check to see if we found a block
        let inBlock = false,
            start: number;
        for (let i = split.length - 1; i >= 0; i--) {
            let line = split[i];
            if (/^\`\`\`$/.test(line)) return null;
            if (/^\`\`\`adversary/.test(line)) {
                inBlock = true;
                start = i;
                break;
            }
        }
        if (!inBlock) return;


        const line = editor.getLine(cursor.line);
        //not inside the bracket
        this._context = SuggestContext.None;
        // if (/^name/.test(line)) return null;
        if (/^(dice|render)/.test(line)) {
            this._context = SuggestContext.Bool;
            const match = line.match(/^(dice|render):\s?(.*)\n?/);
            if (!match) return null;
            const [_, param, query] = match;

            if (query === "true" || query === "false") {
                return null;
            }
            return {
                end: cursor,
                start: {
                    ch: param.length + 2,
                    line: cursor.line
                },
                query
            };
        }
        if (/^(name|monster|creature|extends):/.test(line)) {
            this._context = SuggestContext.Adversary;
            const match = line.match(/^(name|monster|creature|extends):\s?(.*)\n?/);
            if (!match) return null;
            const [_, param, query] = match;
			
            if (
                this.plugin.getBestiaryNames().find(
                    (p) => p.toLowerCase() == query.toLowerCase()
                )
            ) {
                return null;
            }
            return {
                end: cursor,
                start: {
                    ch: param.length + 2,
                    line: cursor.line
                },
                query
            };
        }
        

        // /**
        //  * get all the keys in the encounter block
        //  * only do this if not already in layout/creature suggester
        //  */
        try {
            let doc = editor.getValue().split("\n");
            // just remove the current line to prevent yaml parsing issues
            doc.splice(cursor.line, 1);
            doc = doc.slice(start + 1);
            let end = doc.findIndex((l) => /^```$/.test(l));
            if (end < 0) end = doc.length;

            //get existing property keys.
            //also get layout (if available);

            const obj = parseYaml(doc.slice(0, end).join("\n"));
            this._keys = Object.keys(obj);

        } catch (e) {
            this._keys = [];
        }
        if (!this._keys) this._keys = [];

        this._context = SuggestContext.Property;

        return {
            end: cursor,
            start: {
                ch: 0,
                line: cursor.line
            },
            query: line
        };
    }
}
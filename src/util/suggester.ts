import { EditorSuggest, EditorSuggestContext, EditorPosition, Editor, TFile, EditorSuggestTriggerInfo, parseYaml } from "obsidian";
import DaggerheartToolsPlugin from "src/main";
import { Adversary } from "src/types/adversary";

export type RequiredProps = {
    id: string;
};

export type CommonProps = RequiredProps & {
    properties: string[];
    fallback?: string;
    hasRule?: boolean;
    dice?: boolean;
    diceProperty?: keyof Adversary;
    diceText?: string;
    diceCallback?: string;
    doNotAddClass?: boolean;
};


export enum SuggestContext {
    Adversary,
    Environment,
	Card,
    Property,
    Bool,
    None
}

export const STANDARD_FIELDS = [
    "adversary",
    "name",
    "altName",
    "source",
    "render",
    "extends"
];

export class AdversarySuggester extends EditorSuggest<string> {
    private _context: SuggestContext = SuggestContext.None;
    private _keys: string[];
	private _props: Map<string, CommonProps>;
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
                suggestions = this.plugin.api.getBestiaryNames();
                break;
            }
			case SuggestContext.Property: {
                this._props = new Map<string, CommonProps>;
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
                    /** Text only */
                    case "heading":
                    case "subheading":
                    case "property":
                    case "image":
                    case "text": {
                        value = `${value}: `;
                        break;
                    }
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
                this.plugin.api.getBestiaryNames().find(
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
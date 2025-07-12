import copy from "fast-copy";
import type { App, Editor, TFile } from "obsidian";

export function slugify(str: string) {
    if (!str) return "";
    return str
        .toLowerCase()
        .replace(/[^A-Za-z0-9\s_-]/g, "")
        .replace(/\s+/g, "-");
}

export function toTitleCase(str: string): string {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function nanoid() {
    return "xyxyxyxyxyxy".replace(/[xy]/g, function (c) {
        let r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export function stringify(
    property: Record<string, any> | string | any[] | number | boolean,
    depth: number = 0,
    joiner: string = " ",
    parens = true
): string {
    const ret = [];
    if (depth == 5) {
        return "";
    }
    if (property == null) return ``;
    if (typeof property == "string") return property;
    if (typeof property == "number") return `${property}`;
    if (Array.isArray(property)) {
        ret.push(
            `${parens ? "(" : ""}${property
                .map((p) => stringify(p, depth + 1))
                .join(joiner)}${parens ? ")" : ""}`
        );
    } else if (typeof property == "object") {
        for (const value of Object.values(property)) {
            ret.push(stringify(value, depth + 1));
        }
    }
    return ret.join(" ");
}

export const stringifyWithKeys = (
    property: Record<string, any> | string | any[] | number | boolean,
    depth: number = 0
): string => {
    const ret = [];
    if (depth == 5) {
        return "";
    }
    if (!property || property == null) return ``;
    if (typeof property == "string") return property;
    if (typeof property == "number") return `${property}`;
    if (Array.isArray(property)) {
        ret.push(
            `${property.map((p) => stringifyWithKeys(p, depth++)).join(" ")}`
        );
    } else if (typeof property == "object") {
        for (const [key, value] of Object.entries(property)) {
            ret.push(
                stringifyWithKeys(key, depth++),
                stringifyWithKeys(value, depth++)
            );
        }
    }
    return ret.join(" ");
};

export function append(
    property: string | any[],
    toAppend: string | any[]
): string | any[] {
    if (
        (!Array.isArray(property) && typeof property !== "string") ||
        (!Array.isArray(toAppend) && typeof toAppend !== "string")
    ) {
        return toAppend;
    }
    let propCopy = copy(property);
    if (Array.isArray(propCopy)) {
        if (Array.isArray(toAppend)) {
            return [...propCopy, ...toAppend];
        }
        if (typeof toAppend == "string") {
            propCopy.push(toAppend);
            return propCopy;
        }
    } else if (typeof propCopy == "string") {
        return `${propCopy} ${stringify(toAppend)}`;
    }
    return toAppend;
}

export async function replaceYamlPropRegex(editor: Editor, blockType: string, searchPattern: RegExp, replaceString: string, replaceAll: boolean = false) {
    let eol = editor?.lineCount()!;
    let end = { line: eol + 1, ch: 0 };
    const range = await editor?.getRange({ line: 0, ch: 0 }, end);

    if (range.indexOf(`\`\`\`${blockType}\n`) === -1) return null;

    

    // for (let i = 0; i < editor.lastLine(); i++) {
    //     let match = editor.getLine(i).match(searchPattern);
    //     if (match?.[0]) {
    //         let line = { line: i, ch: 0 };
    //         editor.replaceRange(replaceString, line, line);
    //         if (!replaceAll) {
    //             return;
    //         }
    //     }
    // }
}

/**
 * 
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
 */
import { stringify } from "../util/util";

type SplitLink = { text: string; isLink: boolean };

export const WIKILINK = "DHTOOLS-WIKI-LINK";
export const WIKILINK_REGEX = new RegExp(
    `<${WIKILINK}>([\\s\\S]+?)<${WIKILINK}>`
);
export const MARKDOWN = "DHTOOLS-MARKDOWN-LINK";
export const MARKDOWN_REGEX = new RegExp(
    `<${MARKDOWN}>([\\s\\S]+?)(?:\\|([\\s\\S]+?))?<${MARKDOWN}>`
);
export const GENERIC_REGEX =
    /(<DHTOOLS-(?:WIKI|MARKDOWN)-LINK>[\s\S]+?<DHTOOLS-(?:WIKI|MARKDOWN)-LINK>)/;
export class LinkStringifier {
    static isAdversaryLink(link: string) {
        return GENERIC_REGEX.test(link);
    }

    static replaceWikiLink(link: string) {
        return `<${WIKILINK}>${link}<${WIKILINK}>`;
    }

    static replaceMarkdownLink(link: string, alias?: string) {
        return `<${MARKDOWN}>${link}${alias ? "|" + alias : ""}<${MARKDOWN}>`;
    }
    
    /**
     * This method can be used to replace any markdown or wikilinks in a source, so that it
     * can safely be transformed into YAML.
     *
     * @param {string} source The string to be transformed.
     * @returns {string} A transformed source, with links replaced.
     */
    static transformSource(source: string) {
        const withLinks = source
            .replace(/\[\[([^\]]+?)\]\]/g, (_, $1) =>
                LinkStringifier.replaceWikiLink($1)
            )
            .replace(
                /\[([^\]]*?)\]\(([^)]+?)\)/g,
                (_, alias: string, path: string) =>
                    LinkStringifier.replaceMarkdownLink(path, alias)
            );
        return LinkStringifier.sanitizeYamlColonValues(withLinks);
    }

    private static sanitizeYamlColonValues(source: string): string {
        const KEY_VALUE = /^(\s*)(\w[\w_]*)(\s*:\s+)(.+)$/;
        const BLOCK_SCALAR = /^[|>][\d\-+]?\s*$/;

        return source
            .split('\n')
            .map(line => {
                // Skip array item lines entirely
                if (/^\s*-\s+/.test(line)) return line;

                const match = line.match(KEY_VALUE);
                if (!match) return line;

                const [, indent, key, sep, value] = match;

                // Already quoted
                if (
                    (value.startsWith('"') && value.endsWith('"')) ||
                    (value.startsWith("'") && value.endsWith("'"))
                ) return line;

                // Block scalar header (|, >, |-, etc.)
                if (BLOCK_SCALAR.test(value)) return line;

                // Only act if value contains ': '
                if (!value.includes(': ')) return line;

                // Escape internal double quotes and wrap
                const escaped = value.replace(/"/g, '\\"');
                return `${indent}${key}${sep}"${escaped}"`;
            })
            .join('\n');
    }
    /**
     * This can be used to transform a source coming from frontmatter, that could possibly
     * have wikilinks defined as an array.
     * @param source Source to transform.
     * @returns {string} A transformed source, with links replaced.
     */
    static transformYamlSource(source: string) {
        return LinkStringifier.transformSource(source);
    }

    /**
     * Replaces any already transformed links back into their original link type.
     * @param source
     * @returns {string} The corrected string.
     */
    static stringifyLinks(source: string): string {
        return source
            .replace(new RegExp(WIKILINK_REGEX, "g"), (_, $1) => `[[${$1}]]`)
            .replace(
                new RegExp(MARKDOWN_REGEX, "g"),
                (_, path, alias) => `[${alias ? alias : ""}](${path})`
            );
    }
}
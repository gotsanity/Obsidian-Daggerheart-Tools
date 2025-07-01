import copy from "fast-copy";

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
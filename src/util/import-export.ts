import type { Adversary } from "src/types/adversary";
import type { AbilityCard } from "src/types/card";
import type { Encounter } from "src/types/encounter";
import type { Environment } from "src/types/environment";
import type { CommonProps } from "src/types/daggerheart-types";

export interface DaggerheartExport {
    version: string;
    exportedAt: string;
    adversaries: Adversary[];
    environments: Environment[];
    encounters: Encounter[];
    abilityCards: AbilityCard[];
}

export interface ExportSelection {
    adversaries: Adversary[];
    environments: Environment[];
    encounters: Encounter[];
    abilityCards: AbilityCard[];
}

const SRD_SOURCE = "Daggerheart SRD";

export function isSRDItem(item: CommonProps): boolean {
    const src = item.source;
    if (!src) return false;
    if (typeof src === "string") return src === SRD_SOURCE;
    return src.includes(SRD_SOURCE);
}

export function serializeExport(items: ExportSelection, version: string): DaggerheartExport {
    return {
        version,
        exportedAt: new Date().toISOString(),
        adversaries: items.adversaries,
        environments: items.environments,
        encounters: items.encounters,
        abilityCards: items.abilityCards,
    };
}

export function parseImport(json: string): DaggerheartExport | Error {
    let parsed: unknown;
    try {
        parsed = JSON.parse(json);
    } catch {
        return new Error("Invalid JSON: could not parse file.");
    }

    if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
        return new Error("Invalid format: expected a JSON object.");
    }

    const obj = parsed as Record<string, unknown>;

    if (typeof obj["version"] !== "string") {
        return new Error("Invalid format: missing or invalid 'version' field.");
    }
    if (typeof obj["exportedAt"] !== "string") {
        return new Error("Invalid format: missing or invalid 'exportedAt' field.");
    }

    for (const key of ["adversaries", "environments", "encounters", "abilityCards"] as const) {
        if (!Array.isArray(obj[key])) {
            return new Error(`Invalid format: '${key}' must be an array.`);
        }
    }

    return parsed as DaggerheartExport;
}

export function tagItemsWithBatch<T extends CommonProps>(items: T[], batchId: string): T[] {
    const tag = `import:${batchId}`;
    return items.map(item => {
        const src = item.source;
        let newSource: string | string[];
        if (!src) {
            newSource = [tag];
        } else if (typeof src === "string") {
            newSource = [src, tag];
        } else {
            newSource = [...src, tag];
        }
        return { ...item, source: newSource };
    });
}

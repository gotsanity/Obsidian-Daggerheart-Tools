import type DaggerheartToolsPlugin from "src/main";
import { writable } from "svelte/store";
import AdversaryBlockRenderer from "./adversary-renderer";
import type { Encounter } from "src/types/encounter";


export const _plugin = writable<DaggerheartToolsPlugin>();
export const _renderer = writable<AdversaryBlockRenderer>();
export const _context = writable<string>();
export const _encounter = writable<Encounter>();
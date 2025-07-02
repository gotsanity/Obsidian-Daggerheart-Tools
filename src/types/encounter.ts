import { Environment } from "./environment";

export interface Combatant {
    name: string;
    unitId: string;
    hp: number;
    stress: number;
    hope?: number;
}

export interface Encounter {
    encounterId: string;
    adversaries: Array<[string, Combatant]>;
    allies: Array<[string, Combatant]>;
    environments: Array<[string, Environment]>;
}
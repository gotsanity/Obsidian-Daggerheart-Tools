import type { CommonProps, HealthProps, FeaturesProps } from "./daggerheart-types";
import type { Environment } from "./environment";

export type Combatant = CommonProps & HealthProps;

export type EnemyCombatant = Combatant;
export type AllyCombatant = Combatant & FeaturesProps;

export type Encounter = CommonProps & {
    adversaries: Array<EnemyCombatant>;
    allies: Array<AllyCombatant>;
    environments: Array<Environment>;
}
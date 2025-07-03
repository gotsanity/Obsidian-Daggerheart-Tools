import type { CommonProps, DifficultyProps, FeaturesProps, HealthProps, TieredProps } from "./daggerheart-types";

export interface AdversaryParameters
    extends Omit<
        Adversary,
        | "feats"
    > {
    feats?: { text: string; name: string }[];
}

export type Adversary = AdversaryProps & TieredProps & HealthProps & DifficultyProps & FeaturesProps & CommonProps;

export interface AdversaryProps {
    type: string;
    subtype?: string;
    motives_and_tactics?: string;
    thresholds?: string;
    atk?: string;
    attack?: string;
    range?: string;
    damage?: string;
    experience?: string;

    // [key: string]: any;
}
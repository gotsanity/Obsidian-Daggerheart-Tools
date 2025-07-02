export interface AdversaryParameters
    extends Omit<
        Adversary,
        | "feats"
    > {
    feats?: { text: string; name: string }[];
}

export interface Adversary {
    image?: string;
    name: string;
    alias?: string;
    type: string;
    subtype?: string;
    hp: number;
    source?: string | string[];
    stress: number;
    tier?: string | number;
    motives_and_tactics?: string;
    difficulty?: number;
    thresholds?: string;
    atk?: string;
    attack?: string;
    range?: string;
    damage?: string;
    experience?: string;
    feats: Feat[];
    domain?: string;
    recall?: number;
    text?: string;
    potential_adversaries?: string;
    impulses?: string;

    /** Adversary Extras */
    saved?: boolean;
    note?: string;
    path?: string;
    mtime?: number;

    extends?: string | string[];
    bestiary?: boolean;
    tracked?: boolean;

    [key: string]: any;
}

export interface Feat {
  name: string;
  text: string;
}
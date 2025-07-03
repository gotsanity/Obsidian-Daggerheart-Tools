export interface TieredProps {
    tier?: string | number;
}

export interface HealthProps {
    hp: number;
    stress: number;
}

export interface DifficultyProps {
    difficulty?: number;
}

export interface CommonProps {
    name?: string;
    id: string;
    saved?: boolean;
    note?: string;
    path?: string;
    mtime?: number;
    image?: string;
    alias?: string;
    extends?: string | string[];
    text?: string;
    source?: string | string[];
}

export interface FeaturesProps {
    feats: CommonProps[]
}




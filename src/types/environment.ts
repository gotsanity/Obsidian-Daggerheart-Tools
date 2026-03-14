import type { CommonProps, DifficultyProps, TieredProps, FeaturesProps } from "./daggerheart-types";

export interface EnvironmentParameters
    extends Omit<
        Environment,
        | "feats"
    > {
    feats?: { text: string; name: string }[];
}

export type Environment = CommonProps & EnvironmentProps & DifficultyProps & TieredProps & FeaturesProps;

export interface EnvironmentProps {
    potential_adversaries?: string;
    impulses?: string;
    environmentType?: string;
}
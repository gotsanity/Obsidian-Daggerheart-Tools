import type { CommonProps, DifficultyProps, TieredProps, FeaturesProps } from "./daggerheart-types";

export type Environment = CommonProps & EnvironmentProps & DifficultyProps & TieredProps & FeaturesProps;

export interface EnvironmentProps {
    potential_adversaries?: string;
    impulses?: string;
}
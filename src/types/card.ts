import type { CommonProps, FeaturesProps } from "./daggerheart-types";

export type AbilityCard = CommonProps & AbilityProps & FeaturesProps

export interface AbilityProps {
    domain?: string;
    recall?: number;
}
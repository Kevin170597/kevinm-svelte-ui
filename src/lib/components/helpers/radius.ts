import type { Radius } from "../types";

export const setRadius = (radius: Radius) => {
    const radiusMap = {
        full: 'rounded-full',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        none: 'rounded-none'
    };
    return radiusMap[radius];
};
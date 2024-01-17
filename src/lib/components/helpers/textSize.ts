import type { Size } from "../types";

export const setSize = (size: Size) => {
    const sizes = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
        auto: ''
    };
    return sizes[size];
};
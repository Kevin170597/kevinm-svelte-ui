import type { Size } from "../types";

export const setTitleSize = (size: Size) => {
    const sizes = {
        xs: 'text-md',
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl',
        xl: 'text-3xl',
        auto: ''
    };
    return sizes[size];
};
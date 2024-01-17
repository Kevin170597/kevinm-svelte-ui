import type { Underline } from "../types";

export const setUnderline = (underline: Underline): string => {
    const underlineMap: Record<Underline, string> = {
        none: 'no-underline',
        hover: 'hover:underline',
        always: 'underline'
    };
    return underlineMap[underline];
};
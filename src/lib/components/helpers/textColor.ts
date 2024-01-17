import type { Color } from "../types";

export const setTextColorOverBackground = (color: Color): string => {
    const fontColors: Record<Color, string> = {
        none: 'text-[#fff]',
        black: 'text-[#fff]',
        white: 'text-[#000]',
        gray: 'text-[#fff]',
        default: 'text-[#fff]',
        primary: 'text-[#99c6f9]',
        secondary: 'text-[#d4bbed]',
        success: 'text-[#d1f4e0]',
        warning: 'text-[#62420e]',
        danger: 'text-[#fdd0df]'
    };
    return fontColors[color];
};

export const setTextColor = (color: Color): string => {
    const colors: Record<Color, string> = {
        white: 'text-[#fff]',
        black: 'text-[#000]',
        gray: 'text-[#858688]',
        default: 'text-[#272728]',
        none: 'text-none',
        primary: 'text-[#0070F0]',
        secondary: 'text-[#9455D3]',
        success: 'text-[#18C964]',
        warning: 'text-[#F5A524]',
        danger: 'text-[#F31260]'
    };
    return colors[color];
};
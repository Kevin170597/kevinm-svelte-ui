import type { Color } from "../types"

export const setBgColor = (color: Color): string => {
    const colors: Record<Color, string> = {
        black: 'bg-[#000]',
        white: 'bg-[#FFF]',
        gray: 'bg-[#858688]',
        none: 'bg-inherit',
        default: 'bg-[#272728]',
        primary: 'bg-[#0070F0]',
        secondary: 'bg-[#9455D3]',
        success: 'bg-[#18C964]',
        warning: 'bg-[#F5A524]',
        danger: 'bg-[#F31260]'
    };
    return colors[color];
};

export const setHoverColor = (color: Color): string => {
    const colors: Record<Color, string> = {
        none: 'hover:bg-inherit',
        black: 'hover:bg-[#121212]',
        white: 'hover:bg-[#bdbdbd]',
        gray: 'hover:bg-[#6a6b6e]',
        default: 'hover:bg-[#24252a]',
        primary: 'hover:bg-[#045fc7]',
        secondary: 'hover:bg-[#7440a8]',
        success: 'hover:bg-[#139c4d]',
        warning: 'hover:bg-[#b87c1c]',
        danger: 'hover:bg-[#c71251]'
    };
    return colors[color];
};
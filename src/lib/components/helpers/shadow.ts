import type { Color } from "../types";

export const setShadow = (shadow: 0 | 1 | 2 | 3, color: Color): string => {
    const shadows: any = {
        none: {
            0: '',
            1: '',
            2: '',
            3: '',
        },
        black: {
            0: '',
            1: 'shadow-[1px_1px_2px_2px_#33333398]',
            2: 'shadow-[1px_1px_3px_2px_#33333399]',
            3: 'shadow-[1px_1px_8px_2px_#33333398]'
        },
        white: {
            0: '',
            1: 'shadow-[1px_1px_2px_2px_#adadad98]',
            2: 'shadow-[1px_1px_3px_2px_#adadad99]',
            3: 'shadow-[1px_1px_8px_2px_#adadad98]'
        },
        gray: {
            0: '',
            1: 'shadow-[1px_1px_2px_2px_#adadad98]',
            2: 'shadow-[1px_1px_3px_2px_#adadad99]',
            3: 'shadow-[1px_1px_8px_2px_#adadad98]'
        },
        default: {
            0: '',
            1: 'shadow-[1px_1px_2px_2px_#33333398]',
            2: 'shadow-[1px_1px_3px_2px_#33333399]',
            3: 'shadow-[1px_1px_8px_2px_#33333398]'
        },
        primary: {
            0: '',
            1: 'shadow-[1px_1px_2px_2px_#0070f098]',
            2: 'shadow-[1px_1px_3px_2px_#0070f099]',
            3: 'shadow-[1px_1px_8px_2px_#0070f098]'
        },
        secondary: {
            0: '',
            1: 'shadow-[1px_1px_2px_2px_#9455D398]',
            2: 'shadow-[1px_1px_3px_2px_#9455D399]',
            3: 'shadow-[1px_1px_8px_2px_#9455D398]'
        },
        success: {
            0: '',
            1: 'shadow-[1px_1px_2px_2px_#18C96498]',
            2: 'shadow-[1px_1px_3px_2px_#18C96499]',
            3: 'shadow-[1px_1px_8px_2px_#18C96498]'
        },
        warning: {
            0: '',
            1: 'shadow-[1px_1px_2px_2px_#F5A52498]',
            2: 'shadow-[1px_1px_3px_2px_#F5A52499]',
            3: 'shadow-[1px_1px_8px_2px_#F5A52498]'
        },
        danger: {
            0: '',
            1: 'shadow-[1px_1px_2px_2px_#F3126098]',
            2: 'shadow-[1px_1px_3px_2px_#F3126099]',
            3: 'shadow-[1px_1px_8px_2px_#F3126098]'
        }
    }
    return shadows[color][shadow]
};
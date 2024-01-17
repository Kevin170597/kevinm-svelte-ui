<script lang="ts">
	import type { Color, Size } from '../types';
	export let { color, tailwindClass, size } = {
		color: 'default' as Color,
		tailwindClass: '' as string,
		size: 'xs' as Size
	};

	const setColor = (color: Color): string => {
		const colors: Record<Color, string> = {
			black: 'border-[#000]',
			white: 'border-[#fff]',
			gray: 'border-[#858688]',
			none: 'border-none',
			default: 'border-[#272728]',
			primary: 'border-[#0070F0]',
			secondary: 'border-[#9455D3]',
			success: 'border-[#18C964]',
			warning: 'border-[#F5A524]',
			danger: 'border-[#F31260]'
		};
		return colors[color];
	};

	const setSize = (size: Size): string => {
		const sizes: Record<Size, string> = {
			xs: 'border-t',
			sm: 'border-t-2',
			md: 'border-t-4',
			lg: 'border-t-8',
			xl: 'border-t-[12px]',
			auto: 'border-t'
		};
		return sizes[size];
	};
</script>

<div class={`${setSize(size)} border-t-solid ${setColor(color)} ${tailwindClass}`}></div>

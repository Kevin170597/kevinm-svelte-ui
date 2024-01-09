<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import type { Radius, Size, Color, Variant } from '../types';

	export let { radius, size, color, variant, tailwindClass, onClick, id } = {
		radius: 'lg' as Radius,
		size: 'auto' as Size,
		color: 'default' as Color,
		variant: 'solid' as Variant,
		tailwindClass: '' as string,
		onClick: null as null | MouseEventHandler<HTMLButtonElement>,
		id: null as null | string
	};

	const setSize = (size: Size): string => {
		const sizes: Record<Size, string> = {
			xs: 'text-xs',
			sm: 'text-sm',
			md: 'text-base',
			lg: 'text-lg',
			xl: 'text-xl',
			auto: 'text-auto'
		};
		return sizes[size];
	};

	const setradius = (radius: Radius): string => {
		const radiusMap: Record<Radius, string> = {
			none: 'rounded-none',
			sm: 'rounded-sm',
			md: 'rounded-md',
			lg: 'rounded-lg',
			full: 'rounded-full'
		};
		return radiusMap[radius];
	};

	const setSolid = (color: Color): string => {
		const colors: Record<Color, string> = {
			none: 'bg-inherit',
			black: 'bg-[#000000]',
			white: 'bg-[#FFFFFF]',
			gray: 'bg-[#1F1F20]',
			default: 'bg-[#2D2E34]',
			primary: 'bg-[#0070F0]',
			secondary: 'bg-[#9455D3]',
			success: 'bg-[#18C964]',
			warning: 'bg-[#F5A524]',
			danger: 'bg-[#F31260]'
		};
		return colors[color];
	};

	const setBordered = (color: Color): string => {
		const colors: Record<Color, string> = {
			none: 'border-none',
			black: 'border-[#000000]',
			white: 'border-[#FFFFFF]',
			gray: 'border-[#1F1F20]',
			default: 'border-[#3F3F46]',
			primary: 'border-[#0070F0]',
			secondary: 'border-[#9455D3]',
			success: 'border-[#18C964]',
			warning: 'border-[#F5A524]',
			danger: 'border-[#F31260]'
		};
		return colors[color];
	};

	const setShadow = (color: Color): string => {
		const shadows: Record<Color, string> = {
			none: 'shadow-none',
			black: 'shadow-[0px_0px_20px_2px_#00000048]',
			white: 'shadow-[0px_0px_20px_2px_#FFFFFF48]',
			gray: 'shadow-[0px_0px_20px_2px_#1F1F2048]',
			default: 'shadow-[0px_0px_20px_2px_#C1C1C148]',
			primary: 'shadow-[0px_0px_20px_2px_#3EC7FB90]',
			secondary: 'shadow-[0px_0px_20px_2px_#bf99e590]',
			success: 'shadow-[0px_0px_20px_2px_#74dfa290]',
			warning: 'shadow-[0px_0px_20px_2px_#f9c97c90]',
			danger: 'shadow-[0px_0px_20px_2px_#f871a090]'
		};
		return shadows[color];
	};

	const setTextColor = (color: Color): string => {
		const fontColors: Record<Color, string> = {
			none: 'text-none',
			black: 'text-[#000000]',
			white: 'text-[#FFFFFF]',
			gray: 'text-[#1F1F20]',
			default: 'text-[#3F3F46]',
			primary: 'text-[#0070F0]',
			secondary: 'text-[#9455D3]',
			success: 'text-[#18C964]',
			warning: 'text-[#F5A524]',
			danger: 'text-[#F31260]'
		};
		return fontColors[color];
	};

	const setVariant = (variant: Variant): string => {
		const variants: Record<Variant, string> = {
			solid: setSolid(color),
			bordered: `border-2 border-solid ${setBordered(color)} ${setTextColor(color)} ${setSolid(
				'none'
			)}`,
			shadow: `${setSolid(color)} ${setShadow(color)}`
		};
		return variants[variant];
	};
</script>

<button
	{id}
	on:click={onClick}
	class={`${setSize(size)} 
	${setSolid(color)} 
	${setradius(radius)} 
	${setVariant(variant)} 
	${setTextColor(color)} 
	${tailwindClass} px-3 py-1`}
>
	<slot />
</button>

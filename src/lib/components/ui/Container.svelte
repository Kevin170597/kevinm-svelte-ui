<script lang="ts">
	import type { Radius, Color, Variant, Size } from "../types.js";

	export let { radius, color, variant, tailwindClass, size, id } = {
		radius: 'none' as Radius,
		color: 'default' as Color,
		variant: 'solid' as Variant,
		tailwindClass: '' as string,
		size: 'auto' as Size,
		id: null as null | string
	};

	const setSize = (size: Size) => {
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

	const setSolid = (color: Color) => {
		const colors = {
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

	const setBordered = (color: Color) => {
		const colors = {
			black: 'border-[#000]',
			white: 'border-[#FFF]',
			gray: 'border-[#858688]',
			none: 'border-none',
			default: 'border-[#3F3F46]',
			primary: 'border-[#0070F0]',
			secondary: 'border-[#9455D3]',
			success: 'border-[#18C964]',
			warning: 'border-[#F5A524]',
			danger: 'border-[#F31260]'
		};
		return colors[color];
	};

	const setShadow = (color: Color) => {
		const shadows = {
			black: 'shadow-[0px_0px_20px_2px_#00000048]',
			white: 'shadow-[0px_0px_20px_2px_#FFFFFF48]',
			gray: 'shadow-[0px_0px_20px_2px_#1F1F2048]',
			none: 'shadow-none',
			default: 'shadow-[0px_0px_20px_2px_#C1C1C148]',
			primary: 'shadow-[0px_0px_20px_2px_#3EC7FB90]',
			secondary: 'shadow-[0px_0px_20px_2px_#bf99e590]',
			success: 'shadow-[0px_0px_20px_2px_#74dfa290]',
			warning: 'shadow-[0px_0px_20px_2px_#f9c97c90]',
			danger: 'shadow-[0px_0px_20px_2px_#f871a090]'
		};
		return shadows[color];
	};

	const setVariant = (variant: Variant) => {
		const variants = {
			solid: setSolid(color),
			bordered: `border-2 border-solid ${setBordered(color)}`,
			shadow: `${setSolid(color)} ${setShadow(color)}`
		};
		return variants[variant];
	};

	const setRadius = (radius: Radius) => {
		const radiusMap = {
			full: 'rounded-full',
			sm: 'rounded-sm',
			md: 'rounded-md',
			lg: 'rounded-lg',
			none: 'rounded-none'
		};
		return radiusMap[radius];
	};
</script>

<div {id} class={`${setRadius(radius)} ${setVariant(variant)} ${setSize(size)} ${tailwindClass} w-fit`}>
	<slot />
</div>
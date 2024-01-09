<script lang="ts">
	import type { Size, Color } from "../types";

	export let { size, color, tailwindClass, id } = {
		size: 'auto' as Size,
		color: 'default' as Color,
		tailwindClass: '' as string,
		id: '' as string
	};

	const setSize = (size: Size): string => {
		const sizes: Record<Size, string> = {
			xs: 'text-lg',
			sm: 'text-xl',
			md: 'text-2xl',
			lg: 'text-3xl',
			xl: 'text-4xl',
			auto: 'text-xl'
		};
		return sizes[size];
	};

	const setFontColor = (color: Color): string => {
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
</script>

<h1 {id} class={`${setFontColor(color)} ${setSize(size)} ${tailwindClass}`}>
	<slot />
</h1>

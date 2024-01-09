<script lang="ts">
	import type { Size, Color } from "../types";
	
	export let { size, color, tailwindClass, id } = {
		size: 'auto' as Size,
		color: 'default' as Color,
		tailwindClass: '' as string,
		id: null as string | null
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

	const setFontColor = (color: Color) => {
		const colors = {
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

<p {id} class={`${setSize(size)} ${setFontColor(color)} ${tailwindClass}`}>
	<slot />
</p>

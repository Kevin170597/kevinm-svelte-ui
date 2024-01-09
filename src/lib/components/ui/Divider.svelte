<script lang="ts">
	import type { Color } from "../types";
	export let color = 'gray' as Color;

	const setColor = (color: Color): string => {
		const colors: Record<Color, string> = {
			black: 'border-[#000]',
			white: 'border-[#fff]',
			gray: 'border-[#3F3F46]',
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
</script>

<div class={`border-t border-t-solid ${setColor(color)} my-2`}></div>
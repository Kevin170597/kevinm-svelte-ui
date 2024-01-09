<script lang="ts">
	import type { Size, Color, Underline } from "../types";

	export let { href, color, underline, size, target, id } = {
		href: '/' as string,
		color: 'default' as Color,
		underline: 'none' as Underline,
		size: 'auto' as Size,
		target: '' as string | '_blank',
		id: null as string | null
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
			danger: 'text-[#F31260]',
			auto: ''
		};
		return colors[color];
	};

	const setUnderline = (underline: Underline): string => {
		const underlineMap: Record<Underline, string> = {
			none: 'no-underline',
			hover: 'hover:underline',
			always: 'underline'
		};
		return underlineMap[underline];
	};

	const setSize = (size: Size): string => {
		const sizes: Record<Size, string> = {
			xs: 'text-xs',
			sm: 'text-sm',
			md: 'text-base',
			lg: 'text-lg',
			xl: 'text-xl',
			auto: ''
		};
		return sizes[size];
	};
</script>

<a {href} {target} {id} class={`${setFontColor(color)} ${setUnderline(underline)} ${setSize(size)}`}>
	<slot />
</a>

<script lang="ts">
	import { Container, Divider, Text } from '../ui';
	import type { Color, Radius, Size } from '../types';
	import { setTextColorOverBackground } from '../helpers';

	export let { title, footer, color, radius, size, shadow, id, tailwindClass } = {
		title: null as string | null,
		footer: null as string | null,
		id: null as string | null,
		tailwindClass: '' as string,
		color: 'default' as Color,
		radius: 'none' as Radius,
		size: 'md' as Size,
		shadow: 0 as 0 | 1 | 2 | 3
	};

	const setBorderColor = (color: Color): string => {
		const colors: Record<Color, string> = {
			black: 'border-[#fff]',
			white: 'border-[#000]',
			gray: 'border-[#fff]',
			none: 'border-none',
			default: 'border-[#525253]',
			primary: 'border-[#99c6f9]',
			secondary: 'border-[#d4bbed]',
			success: 'border-[#d1f4e0]',
			warning: 'border-[#62420e]',
			danger: 'border-[#fdd0df]'
		};
		return colors[color];
	};
</script>

<Container {id} {shadow} {color} {radius} tailwindClass="{tailwindClass}">
	{#if title}
		<Text {size} tailwindClass="p-3 {setTextColorOverBackground(color)}">{title}</Text>
	{/if}
	{#if title}
		<Divider tailwindClass={setBorderColor(color)} />
	{/if}
	<slot />
	{#if footer}
		<Divider tailwindClass={setBorderColor(color)} />
	{/if}
	{#if footer}
		<Text {size} tailwindClass="p-3 {setTextColorOverBackground(color)}">
			{footer}
		</Text>
	{/if}
</Container>

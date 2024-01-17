<script lang="ts">
	import { Container, Text, Link, Icon } from '../ui';
	import type { Size, Radius, Color } from '../types';
	import { setTextColorOverBackground } from '../helpers';

	export let { content, size, radius, color, shadow, icon, iconSize, link, id } = {
		content: '' as string,
		size: 'sm' as Size,
		radius: 'none' as Radius,
		color: 'default' as Color,
		shadow: 0 as 0 | 1 | 2 | 3,
		icon: null as string | null,
		iconSize: 24 as number,
		link: null as string | null,
		id: null as string | null
	};

	const setIconColor = (color: Color): string => {
		const colors: Record<Color, string> = {
			none: '',
			black: '#999999',
			white: '#666666',
			gray: '#cccccc',
			default: '#999999',
			primary: '#99c6f9',
			secondary: '#d4bbed',
			success: '#d1f4e0',
			warning: '#62420e',
			danger: '#fdd0df'
		};
		return colors[color];
	};
</script>

<Container {id} {color} {radius} {shadow} tailwindClass="py-1 px-2 flex items-center gap-1">
	{#if icon}
		<Icon iconName={icon} size={iconSize} fill={setIconColor(color)} />
	{/if}
	{#if link}
		<Link href={link} underline="always" tailwindClass={setTextColorOverBackground(color)} target="_blank" {size}>
			{content}
		</Link>
	{:else}
		<Text {size} tailwindClass={setTextColorOverBackground(color)}>{content}</Text>
	{/if}
</Container>

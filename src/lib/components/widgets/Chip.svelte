<script lang="ts">
	import { Container, Text, Link, Icon } from '../ui';
	import type { Size, Radius, Color } from '../types';

	export let { content, size, radius, color, icon, iconSize, link, id } = {
		content: '' as string,
		size: 'sm' as Size,
		radius: 'none' as Radius,
		color: 'default' as Color,
		icon: null as string | null,
		iconSize: 24 as number,
		link: null as string | null,
		id: null as string | null
	};
</script>

<Container {id} {color} {radius} variant="solid" tailwindClass="py-1 px-2 flex items-center gap-2">
	{#if icon}
		<Icon iconName={icon} size={iconSize} fill="#fff" />
	{/if}
	{#if link}
		<Link href={link} target="_blank" {size}>{content}</Link>
	{:else}
		<Text {size}>{content}</Text>
	{/if}
</Container>

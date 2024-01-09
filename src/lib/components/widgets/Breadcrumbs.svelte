<script lang="ts">
	import { Icon, Container, Link } from '../ui';
	import type { Variant, Color, Radius, Size } from '../types';

	export let paths: { slug: string; href: string }[] = [
		{
			slug: 'Home',
			href: '/'
		},
		{
			slug: 'Products',
			href: '/products'
		},
		{
			slug: 'Instagrapy',
			href: '/products/instagrapy'
		}
	];

	export let { textColor, activeTextColor, variant, color, radius, size, id } = {
		textColor: 'gray' as Color,
		activeTextColor: 'white' as Color,
		variant: 'solid' as Variant,
		color: 'default' as Color,
		radius: 'none' as Radius,
		size: 'auto' as Size,
		id: null as string | null
	};
</script>

<Container {color} {variant} {radius} tailwindClass="flex items-center gap-2 py-2 px-4">
	{#each paths as name, i}
		{#if i > 0}
			<Icon iconName="arrowRight" size={18} fill={textColor} />
		{/if}
		<Link
			href={name.href}
			color={i === paths.length - 1 ? activeTextColor : textColor}
			underline="hover"
			{size}
		>
			{name.slug}
		</Link>
	{/each}
</Container>

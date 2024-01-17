<script lang="ts">
	import { Icon, Container, Link } from '../ui';
	import type { Color, Radius, Size } from '../types';
	import { setTextColor } from '../helpers';

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
			slug: 'My product',
			href: '/products/my-product'
		}
	];

	export let { shadow, color, radius, size, id } = {
		shadow: 0 as 0 | 1 | 2 | 3,
		color: 'default' as Color,
		radius: 'none' as Radius,
		size: 'auto' as Size,
		id: null as string | null
	};

	const setFontColor = (color: Color): string => {
		const fontColors: Record<Color, string> = {
			none: 'text-none',
			black: 'text-[#999999]',
			white: 'text-[#666666]',
			gray: 'text-[#cccccc]',
			default: 'text-[#999999]',
			primary: 'text-[#99c6f9]',
			secondary: 'text-[#d4bbed]',
			success: 'text-[#d1f4e0]',
			warning: 'text-[#62420e]',
			danger: 'text-[#fdd0df]'
		};
		return fontColors[color];
	};

	const setActiveFontColor = (color: Color): string => {
		const fontColors: Record<Color, string> = {
			none: 'text-none',
			black: 'text-[#fff]',
			white: 'text-[#000]',
			gray: 'text-[#fff]',
			default: 'text-[#fff]',
			primary: 'text-[#fff]',
			secondary: 'text-[#fff]',
			success: 'text-[#fff]',
			warning: 'text-[#000]',
			danger: 'text-[#fff]'
		};
		return fontColors[color];
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

<Container
	{shadow}
	{color}
	{radius}
	tailwindClass="flex items-center gap-2 py-2 px-4"
>
	{#each paths as name, i}
		{#if i > 0}
			<Icon iconName="arrowRight" size={18} fill={setIconColor(color)} />
		{/if}
		<Link
			tailwindClass={i === paths.length - 1 ? setActiveFontColor(color) : setFontColor(color)}
			href={name.href}
			underline="hover"
			{size}
		>
			{name.slug}
		</Link>
	{/each}
</Container>

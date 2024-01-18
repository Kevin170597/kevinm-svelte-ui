<script lang="ts">
	import { page } from '$app/stores';
	import { Link, Container, Button, Icon } from '../ui';
	import type { Size, Color, Radius } from '../types';
	import { Accordion } from '../../index';

	type Link = {
		label: string,
		href?: string,
		icon?: string,
		activePath?: string,
		sublinks?: {
			label: string,
			href: string,
			icon?: string,
			activePath?: string
		}[]
	};

	let linksArray: Link[] = [
		{
			label: 'Link 1',
			href: '/',
			icon: 'grid',
			activePath: '/'
		},
		{
			label: 'Link 2',
			href: '/',
			icon: 'clock',
			activePath: '/side-bar'
		},
		{
			label: 'Group 1',
			sublinks: [
				{
					label: 'Group Link 1',
					href: '/side-bar',
					icon: 'clock',
					activePath: '/'
				},
				{
					label: 'Group Link 2',
					href: '/',
					icon: 'clock',
					activePath: '/'
				}
			]
		},
		{
			label: 'Link 3',
			href: '/',
			icon: 'picture',
			activePath: '/'
		}
	];

	export let { tailwindClass, size, shadow, color, radius, links } = {
		tailwindClass: '' as string,
		size: 'md' as Size,
		shadow: 0 as 0 | 1 | 2 | 3,
		color: 'default' as Color,
		radius: 'none' as Radius,
		links: linksArray as Link[]
	};

	const setFontColor = (color: Color): string => {
		const fontColors: Record<Color, string> = {
			none: 'text-[#666666]',
			black: 'text-[#666666]',
			white: 'text-[#999999]',
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
			none: 'text-[#fff]',
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
			none: '#666666',
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

	const setActiveIconColor = (color: Color): string => {
		const colors: Record<Color, string> = {
			none: '#fff',
			black: '#fff',
			white: '#000',
			gray: '#fff',
			default: '#fff',
			primary: '#fff',
			secondary: '#fff',
			success: '#fff',
			warning: '#000',
			danger: '#fff'
		};
		return colors[color];
	};
</script>

<Container {color} {radius} {shadow} tailwindClass="p-3 w-full flex flex-col gap-1 {tailwindClass}">
	{#each links as link}
		{#if link.sublinks}
			<Accordion headTitle={link.label} {color} {size}>
				{#each link.sublinks as sublink}
					<Button {size} color="none" radius="lg" tailwindClass="w-full flex items-center gap-2">
						<Icon
							iconName={sublink.icon}
							size={16}
							fill={$page.url.pathname === sublink.activePath
								? setActiveIconColor(color)
								: setIconColor(color)}
						/>
						<Link
							href={sublink.href}
							tailwindClass="text-left w-full flex {$page.url.pathname === link.activePath
								? setActiveFontColor(color)
								: setFontColor(color)}"
						>
							{sublink.label}
						</Link>
					</Button>
				{/each}
			</Accordion>
		{:else}
			<Button {size} color="none" radius="lg" tailwindClass="w-full flex items-center gap-2">
				<Icon
					iconName={link.icon}
					size={16}
					fill={$page.url.pathname === link.activePath
						? setActiveIconColor(color)
						: setIconColor(color)}
				/>
				<Link
					href={link.href}
					tailwindClass="text-left w-full flex {$page.url.pathname === link.activePath
						? setActiveFontColor(color)
						: setFontColor(color)}"
				>
					{link.label}
				</Link>
			</Button>
		{/if}
	{/each}
</Container>

<!--<nav class={`flex flex-col gap-4 px-12 py-6 ${tailwindClass}`}>
	<ul class="list-disc flex flex-col gap-4">
		<li class="text-[#858688]">
			<Link
				color={$page.url.pathname === '/products/instagrapy' ? 'white' : 'gray'}
				href="/products/instagrapy"
				size="md"
				underline="hover"
			>
				Quick start
			</Link>
		</li>
		<li class="text-[#858688]">
			<Link
				color={$page.url.pathname === '/products/instagrapy/install' ? 'white' : 'gray'}
				href="/products/instagrapy/install"
				size="md"
				underline="hover"
			>
				Installation
			</Link>
		</li>
		<li class="text-[#858688]">
			<Link
				color={$page.url.pathname === '/products/instagrapy/api' ? 'white' : 'gray'}
				href="/products/instagrapy/api"
				size="md"
				underline="hover"
			>
				API
			</Link>
		</li>
	</ul>
</nav>-->

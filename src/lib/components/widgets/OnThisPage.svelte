<!-- @migration-task Error while migrating Svelte code: Encountered an export declaration pattern that is not supported for automigration. -->
<script lang="ts">
	import { Container, Title, Link } from '../ui';
	import type { Color, Radius, Size, Underline } from '../types';

	export let { tailwindClass, color, radius, size, underline, shadow } = {
		tailwindClass: '' as string,
		color: 'none' as Color,
		radius: 'none' as Radius,
		size: 'md' as Size,
		underline: 'none' as Underline,
		shadow: 0 as 0 | 1 | 2 | 3
	};

	type Links = {
		slug: string;
		href: string;
		sublinks?: { slug: string; href: string }[];
	};

	export let links: Links[] = [
		{
			slug: 'Link example',
			href: '#link-example',
			sublinks: [
				{
					slug: 'Sublink example',
					href: '#sublink-example'
				}
			]
		},
		{
			slug: 'Link example',
			href: '#link-example',
			sublinks: [
				{
					slug: 'Sublink example',
					href: '#sublink-example'
				}
			]
		}
	];

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

	const setTitleColor = (color: Color): string => {
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
</script>

<Container {color} {radius} {shadow} tailwindClass="px-3 py-2 {tailwindClass}">
	<Title tailwindClass={setTitleColor(color)} {size}>On this page</Title>
	<ul class="list-disc flex flex-col mt-2 gap-2 pl-6">
		{#each links as link}
			<li class={setFontColor(color)}>
				<Link {size} href={link.href} tailwindClass={setFontColor(color)} {underline}>
					{link.slug}
				</Link>
				{#if link.sublinks}
					<ul class="pl-4">
						{#each link.sublinks as sublink}
							<li>
								<Link
									{size}
									href={sublink.href}
									tailwindClass={setFontColor(color)}
									{underline}
								>
									{sublink.slug}
								</Link>
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</Container>

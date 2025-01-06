<!-- @migration-task Error while migrating Svelte code: `<tr>` is invalid inside `<table>` -->
<script lang="ts">
	import { Container, Text } from '../ui';
	import type { Radius, Color, Size } from '../types';

	export let { radius, color, size, data, id, shadow, tailwindClass } = {
		radius: 'none' as Radius,
		color: 'default' as Color,
		size: 'md' as Size,
		data: [{}] as {}[],
		id: null as string | null,
		shadow: 0 as 0 | 1 | 2 | 3,
		tailwindClass: '' as string
	};

	const setFontColor = (color: Color): string => {
		const fontColors: Record<Color, string> = {
			none: 'text-none',
			black: 'text-[#fff]',
			white: 'text-[#000]',
			gray: 'text-[#fff]',
			default: 'text-[#dedede]',
			primary: 'text-[#99c6f9]',
			secondary: 'text-[#d4bbed]',
			success: 'text-[#d1f4e0]',
			warning: 'text-[#62420e]',
			danger: 'text-[#fdd0df]'
		};
		return fontColors[color];
	};

	const setHeaderBgColor = (color: Color): string => {
		const fontColors: Record<Color, string> = {
			none: 'text-none',
			black: 'bg-[#1c1c1c]',
			white: 'bg-[#cccccc]',
			gray: 'bg-[#6a6b6d]',
			default: 'bg-[#343436]',
			primary: 'bg-[#005ac0]',
			secondary: 'bg-[#7644a9]',
			success: 'bg-[#13a150]',
			warning: 'bg-[#c4841d]',
			danger: 'bg-[#c20e4d]'
		};
		return fontColors[color];
	};
</script>

<Container {color} {radius} {shadow} tailwindClass="p-3 {tailwindClass}">
	<table class="border-collapse w-full">
		<tr class="w-full">
			{#if Object.keys(data)}
				{#each Object.keys(data[0]) as key, i}
					<th
						class="text-left py-2 px-4 {setHeaderBgColor(color)} {i === 0
							? 'rounded-tl-lg rounded-bl-lg'
							: ''} {i === Object.keys(data[0]).length - 1 ? 'rounded-tr-lg rounded-br-lg' : ''}"
					>
						<Text {size} tailwindClass={setFontColor(color)}>{key.toUpperCase()}</Text>
					</th>
				{/each}
			{/if}
		</tr>

		{#each data as row}
			<tr class="w-full">
				{#each Object.values(row) as value}
					<th class="text-left py-2 px-4">
						<Text {size} tailwindClass={setFontColor(color)}>{value}</Text>
					</th>
				{/each}
			</tr>
		{/each}
	</table>
</Container>

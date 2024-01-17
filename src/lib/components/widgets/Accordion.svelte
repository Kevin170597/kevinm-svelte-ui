<script lang="ts">
	import { Container, Text, Button, Icon } from '../ui';
	import type { Radius, Color, Size } from '../types';
	import { setTextColorOverBackground } from '../helpers';

	let isVisible = false as boolean;

	export let { headTitle, radius, color, id, size, shadow } = {
		headTitle: 'Accordion' as string,
		radius: 'lg' as Radius,
		color: 'default' as Color,
		id: null as string | null,
		size: 'md' as Size,
		shadow: 0 as 0 | 1 | 2 | 3
	};

	const setIconColor = (color: Color): string => {
		const colors: Record<Color, string> = {
			none: '#fff',
			black: '#fff',
			white: '#000',
			gray: '#fff',
			default: '#fff',
			primary: '#99c6f9',
			secondary: '#d4bbed',
			success: '#d1f4e0',
			warning: '#62420e',
			danger: '#fdd0df'
		};
		return colors[color];
	};
</script>

<Container {radius} {color} {id} {shadow} tailwindClass="w-full p-1">
	<Button
		onClick={() => (isVisible = !isVisible)}
		tailwindClass="w-full flex justify-between items-center"
		{color}
		{radius}
	>
		<Text {size} tailwindClass={setTextColorOverBackground(color)}>{headTitle}</Text>
		<Icon iconName={isVisible ? 'arrowDown' : 'arrowRight'} fill={setIconColor(color)} size={20} />
	</Button>
	{#if isVisible}
		<div class="py-2 px-4">
			<slot />
		</div>
	{/if}
</Container>

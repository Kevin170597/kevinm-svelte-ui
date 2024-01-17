<script lang="ts">
	import { Button, Container, Link } from '../ui';
	import type { Radius, Color, Size } from '../types';
	import { setTextColorOverBackground } from '../helpers';

	export let {
		prevHref,
		nextHref,
		radius,
		color,
		buttonsRadius,
		buttonsColor,
		buttonShadow,
		size,
		id,
		shadow
	} = {
		prevHref: null as string | null,
		nextHref: null as string | null,
		radius: 'none' as Radius,
		color: 'default' as Color,
		buttonsRadius: 'none' as Radius,
		buttonsColor: 'default' as Color,
		buttonShadow: 0 as 0 | 1 | 2 | 3,
		size: 'md' as Size,
		id: null as string | null,
		shadow: 0 as 0 | 1 | 2 | 3
	};
</script>

<Container
	{id}
	{color}
	{radius}
	{shadow}
	tailwindClass="w-full flex py-2 px-3 {!prevHref ? 'justify-end' : 'justify-between'}"
>
	{#if prevHref}
		<Button shadow={buttonShadow} {size} radius={buttonsRadius} color={buttonsColor}>
			<Link href={prevHref} underline="hover" tailwindClass={setTextColorOverBackground(buttonsColor)}>Prev</Link>
		</Button>
	{/if}
	{#if nextHref}
		<Button shadow={buttonShadow} {size} radius={buttonsRadius} color={buttonsColor}>
			<Link href={nextHref} underline="hover" tailwindClass={setTextColorOverBackground(buttonsColor)}>Next</Link>
		</Button>
	{/if}
</Container>

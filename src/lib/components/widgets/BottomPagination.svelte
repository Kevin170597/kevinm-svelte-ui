<script lang="ts">
	import { Button, Container, Link } from '../ui';
	import type { Variant, Radius, Color, Size } from '../types';

	export let {
		prevHref,
		nextHref,
		variant,
		radius,
		color,
		buttonsVariant,
		buttonsRadius,
		buttonsColor,
		buttonsSize,
		id
	} = {
		prevHref: null as string | null,
		nextHref: null as string | null,
		variant: 'solid' as Variant,
		radius: 'none' as Radius,
		color: 'default' as Color,
		buttonsVariant: 'solid' as Variant,
		buttonsRadius: 'none' as Radius,
		buttonsColor: 'default' as Color,
		buttonsSize: 'md' as Size,
		id: null as string | null
	};
</script>

<Container
	{id}
	{variant}
	{color}
	{radius}
	tailwindClass="w-full flex py-3 px-4 {!prevHref ? 'justify-end' : 'justify-between'}"
>
	{#if prevHref}
		<Button size={buttonsSize} radius={buttonsRadius} color={buttonsColor} variant={buttonsVariant}>
			<Link href={prevHref} color="gray">Prev</Link>
		</Button>
	{/if}
	{#if nextHref}
		<Button size={buttonsSize} radius={buttonsRadius} color={buttonsColor} variant={buttonsVariant}>
			<Link href={nextHref} color="gray">Next</Link>
		</Button>
	{/if}
</Container>

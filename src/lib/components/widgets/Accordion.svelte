<script lang="ts">
	import { Container, Text, Button, Icon } from '../ui';
	import type { Radius, Color, Variant } from '../types';

	let isVisible = false as boolean;
    
    export let { headTitle, radius, color, variant, id } = {
        headTitle: 'Accordion' as string,
        radius: 'lg' as Radius,
        color: 'default' as Color,
        variant: 'solid' as Variant,
		id: null as string | null
    }
</script>

<Container {radius} {color} {variant} {id} tailwindClass="w-full p-1">
	<Button
		onClick={() => (isVisible = !isVisible)}
		tailwindClass="w-full flex justify-between items-center"
		color="none"
	>
		<Text>{headTitle}</Text>
		<Icon iconName={isVisible ? 'arrowDown' : 'arrowRight'} fill="#858688" size={20} />
	</Button>
	{#if isVisible}
		<div class="py-2 px-4">
			<slot />
		</div>
	{/if}
</Container>

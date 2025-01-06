<!-- @migration-task Error while migrating Svelte code: Encountered an export declaration pattern that is not supported for automigration. -->
<script lang="ts">
	import { Container, Text, Title, Button, Icon } from '../ui';
	import type { Color, Radius, Size } from '../types';
	import { setBgColor, setTextColorOverBackground } from '../helpers';

	export let { visible, title, size, radius, color, shadow, tailwindClass } = {
		visible: false as boolean,
		title: null as string | null,
        size: 'sm' as Size,
        radius: 'none' as Radius,
        color: 'default' as Color,
        shadow: 0 as 0 | 1 | 2 | 3,
		tailwindClass: '' as string
	};
</script>

{#if visible}
	<div class="fixed top-0 left-0 w-full h-[100vh] flex items-center justify-center bg-[#00000061]">
		<Container {color} {radius} {shadow} tailwindClass="p-3 max-w-[40%] w-full {tailwindClass}">
			<div class="flex justify-between items-center pl-2">
				{#if title}
					<Title tailwindClass={setTextColorOverBackground(color)} {size}>{title}</Title>
				{/if}
				<Button onClick={() => (visible = false)} radius="full" tailwindClass="!p-1 ml-auto">
					<Icon size={20} iconName="x" />
				</Button>
			</div>
			<slot />
		</Container>
	</div>
{/if}

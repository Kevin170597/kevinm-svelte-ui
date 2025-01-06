<!-- @migration-task Error while migrating Svelte code: Encountered an export declaration pattern that is not supported for automigration. -->
<script lang="ts">
	import { Button, Container } from '../ui';
    import type { Radius, Size, Color } from '../types';

    export let { tabs, radius, size, color, tailwindClass } = {
        tabs: ['Tab 1', 'Tab 2', 'Tab 3'] as string[],
        radius: 'none' as Radius,
        size: 'md' as Size,
        color: 'default' as Color,
        tailwindClass: '' as string
    }

	let activeTab: number = 1;
</script>

<Container color="none" {radius} tailwindClass="flex border border-solid border-[#1c1c1c] w-fit {tailwindClass}">
	{#each tabs as tab, i}
		<Button
			onClick={() => (activeTab = i + 1)}
			color={activeTab === i + 1 ? color : 'none'}
			{size}
			radius={i + 1 === 1 || i + 1 === tabs.length ? radius : 'none'}
			tailwindClass="{i + 1 === 1 ? 'rounded-tr-none rounded-br-none' : ''} 
                {i + 1 === tabs.length ? 'rounded-tl-none rounded-bl-none' : ''}"
		>
			{tab}
		</Button>
	{/each}
</Container>

{#if activeTab === 1}
	<slot name="tab1" />
{/if}
{#if activeTab === 2}
	<slot name="tab2" />
{/if}
{#if activeTab === 3}
	<slot name="tab3" />
{/if}
{#if activeTab === 4}
	<slot name="tab4" />
{/if}
{#if activeTab === 5}
	<slot name="tab5" />
{/if}
{#if activeTab === 6}
	<slot name="tab6" />
{/if}
{#if activeTab === 7}
	<slot name="tab7" />
{/if}
{#if activeTab === 8}
	<slot name="tab8" />
{/if}

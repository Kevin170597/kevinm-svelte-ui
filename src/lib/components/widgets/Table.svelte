<script lang="ts">
	import { Container, Text } from '../ui';
	import type { Radius, Color, Variant, Size } from '../types';

	export let { radius, color, variant, size, data, id } = {
		radius: 'none' as Radius,
		color: 'default' as Color,
		variant: 'solid' as Variant,
		size: 'md' as Size,
		data: [{}] as any,
		id: null as string | null
	};
</script>

<Container {variant} {color} {size} {radius} tailwindClass="p-3">
	<table class="border-collapse w-full">
		<tr class="w-full">
			{#if Object.keys(data)}
				{#each Object.keys(data[0]) as key, i}
					<th
						class="text-left py-2 px-4 bg-[#1f1f20] {i === 0
							? 'rounded-tl-lg rounded-bl-lg'
							: ''} {i === Object.keys(data[0]).length - 1 ? 'rounded-tr-lg rounded-br-lg' : ''}"
					>
						<Text color="gray">{key.toUpperCase()}</Text>
					</th>
				{/each}
			{/if}
		</tr>

		{#each data as row}
			<tr class="w-full">
				{#each Object.values(row) as value}
					<th class="text-left py-2 px-4">
						<Text color="gray">{value}</Text>
					</th>
				{/each}
			</tr>
		{/each}
	</table>
</Container>

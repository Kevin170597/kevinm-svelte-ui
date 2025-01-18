<script lang="ts">
	import { ButtonV2 as Button, FlexV2 as Flex } from '$lib';

	type Color =
		| 'transparent'
		| 'white'
		| 'black'
		| 'slate'
		| 'zinc'
		| 'gray'
		| 'neutral'
		| 'stone'
		| 'red'
		| 'orange'
		| 'amber'
		| 'yellow'
		| 'lime'
		| 'green'
		| 'emerald'
		| 'teal'
		| 'cyan'
		| 'sky'
		| 'blue'
		| 'indigo'
		| 'violet'
		| 'purple'
		| 'fuchsia'
		| 'pink'
		| 'rose';

	interface Style {
		color?: Color;
		colorLevel?: 1 | 2 | 3 | 4 | 5 | 6;
		size?: 'sm' | 'md' | 'lg' | 'xl';
	}

	let {
		value = $bindable(),
		items,
		triggerLabel,
		s
	}: {
		value?: any;
		items: { value: string | number; label: string }[];
		triggerLabel?: string;
		s?: Style;
	} = $props();

	let dropped: boolean = $state(false);

	const handleSelect = (item: string | number) => {
		value = item;
		dropped = !dropped;
	};
</script>

<Flex
	s={{
		direction: 'col',
		gap: 4,
		color: s?.color ? s.color : 'white',
		colorLevel: s?.colorLevel ? s.colorLevel : 3
	}}
	class="relative"
>
	<Button
		s={{
			color: s?.color ? s.color : 'white',
			colorLevel: s?.colorLevel ? s.colorLevel : 3,
			endIcon: 'arrowDown',
			size: s?.size ? s.size : 'md'
		}}
		oc={() => (dropped = !dropped)}
		class="w-full !justify-between"
	>
		{(items.find((item) => item.value === value)?.label
			? items.find((item) => item.value === value)?.label
			: triggerLabel) || 'Select'}
	</Button>
	{#if dropped}
		<Flex
			s={{
				direction: 'col',
				gap: 1,
				color: s?.color ? s.color : 'white',
				colorLevel: s?.colorLevel ? s.colorLevel : 3
			}}
			class="absolute top-20 left-0 z-10 !shadow-lg"
		>
			{#each items as item}
				<Button
					s={{
						color: s?.color ? s.color : 'white',
						colorLevel: s?.colorLevel ? s.colorLevel : 3,
						size: s?.size ? s.size : 'md'
					}}
					oc={() => handleSelect(item.value)}
					class="w-full !justify-start"
				>
					{item.label}
				</Button>
			{/each}
		</Flex>
	{/if}
</Flex>

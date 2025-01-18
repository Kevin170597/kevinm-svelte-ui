<script lang="ts">
	import {
		TextV2 as Text,
		GridV2 as Grid,
		TitleV2 as Title,
		FlexV2 as Flex,
		ButtonV2 as Button,
		LinkV2 as Link,
		SelectV2 as Select
	} from '$lib';
	import { CodeBlock } from '$lib';

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

	let colors: Color[] = $state([
		'white',
		'black',
		'slate',
		'zinc',
		'gray',
		'neutral',
		'stone',
		'red',
		'orange',
		'amber',
		'yellow',
		'lime',
		'green',
		'emerald',
		'teal',
		'cyan',
		'sky',
		'blue',
		'indigo',
		'violet',
		'purple',
		'fuchsia',
		'pink',
		'rose'
	]);

	type Size = 'sm' | 'md' | 'lg' | 'xl';

	let sizes: Size[] = $state(['sm', 'md', 'lg', 'xl']);

	let value: string | null = $state(null);

	let countries: { value: string; label: string }[] = $state([
		{ value: 'us', label: 'United States' },
		{ value: 'ca', label: 'Canada' },
		{ value: 'fr', label: 'France' },
		{ value: 'de', label: 'Germany' },
		{ value: 'it', label: 'Italy' },
		{ value: 'uk', label: 'United Kingdom' }
	]);

	let dark: boolean = $state(false);
</script>

<div class="h-[100vh] overflow-auto p-8">
	<Flex s={{ direction: 'col', gap: 4 }}>
		<Title s={{ color: 'white', size: 'lg' }}>Select</Title>
		<CodeBlock lang="ts" code={'import { Select } from "sveltekev";'} radius="lg" />
		<Title s={{ color: 'white', size: 'lg' }}>Colors</Title>
		<Flex s={{ gap: 4, items: 'center' }} class="p-0">
			<Title s={{ color: 'white' }}>Color levels</Title>
			<Button oc={() => (dark = !dark)} s={{ color: 'white', size: 'sm' }}>Toggle theme</Button>
		</Flex>
		<Grid s={{ gap: 2, color: dark ? 'black' : 'white' }}>
			{#each colors as color}
				{#each [1, 2, 3, 4, 5, 6] as colorLevel}
					<Grid item sz={6}>
						<Select
							s={{ color, colorLevel: colorLevel as 1 | 2 | 3 | 4 | 5 | 6 }}
							bind:value
							items={countries}
						/>
					</Grid>
				{/each}
			{/each}
		</Grid>
		<Flex s={{ gap: 4, items: 'center' }} class="p-0">
			<Title s={{ color: 'white' }}>Sizes</Title>
			<Button oc={() => (dark = !dark)} s={{ color: 'white', size: 'sm' }}>Toggle theme</Button>
		</Flex>
		<Grid s={{ gap: 2, color: dark ? 'black' : 'white' }}>
			{#each sizes as size}
				<Grid item sz={6}>
					<Select s={{ color: 'slate', colorLevel: 4, size }} bind:value items={countries} />
				</Grid>
			{/each}
		</Grid>
	</Flex>
</div>

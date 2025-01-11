<script lang="ts">
	import {
		TextV2 as Text,
		GridV2 as Grid,
		TitleV2 as Title,
		FlexV2 as Flex,
		ButtonV2 as Button
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
		'transparent',
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

	let dark: boolean = $state(false);
</script>

<div class="h-[100vh] overflow-auto p-8">
	<Flex s={{ direction: 'col', gap: 4 }}>
		<Title s={{ color: 'white', size: 'lg' }}>Text</Title>
		<CodeBlock lang="ts" code={'import { Text } from "sveltekev";'} radius="lg" />
		<Title s={{ color: 'white', size: 'lg' }}>Colors</Title>
		<Flex s={{ gap: 4, items: 'center' }} class="p-0">
			<Title s={{ color: 'white' }}>Color levels</Title>
			<Button oc={() => (dark = !dark)} s={{ color: 'white', size: 'sm' }}>Toggle theme</Button>
		</Flex>
		<Grid s={{ gap: 2, color: dark ? 'black' : 'white' }}>
			{#each colors as color}
				{#each [1, 2, 3, 4, 5, 6] as colorLevel}
					<Grid item sz={2}>
						<Title s={{ color, colorLevel: colorLevel as 1 | 2 | 3 | 4 | 5 | 6 }}>{color}</Title>
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
				<Grid item sz={2}>
					<Title s={{ size: size, color: 'black' }}>{size}</Title>
				</Grid>
			{/each}
		</Grid>
		<Flex s={{ gap: 4, items: 'center' }} class="p-0">
			<Title s={{ color: 'white' }}>Italic</Title>
			<Button oc={() => (dark = !dark)} s={{ color: 'white', size: 'sm' }}>Toggle theme</Button>
		</Flex>
		<Grid s={{ gap: 2, color: dark ? 'black' : 'white' }}>
			<Grid item sz={2}>
				<Title s={{ italic: true, color: 'black' }}>Italic</Title>
			</Grid>
		</Grid>
	</Flex>
</div>

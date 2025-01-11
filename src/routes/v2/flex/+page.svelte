<script lang="ts">
	import {
		ButtonV2 as Button,
		GridV2 as Grid,
		FlexV2 as Flex,
		TitleV2 as Title,
		CodeBlock
	} from '$lib';

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
		<Title s={{ color: 'white', size: 'lg' }}>Flex</Title>
		<CodeBlock lang="ts" code={'import { Flex } from "sveltekev";'} radius="lg" />
		<Title s={{ color: 'white', size: 'lg' }}>Colors</Title>
		<Flex s={{ gap: 4, items: 'center' }}>
			<Title s={{ color: 'white' }}>Color levels</Title>
			<Button oc={() => (dark = !dark)} s={{ color: 'white', size: 'sm' }}>Toggle theme</Button>
		</Flex>
		<Grid s={{ gap: 4, color: dark ? 'black' : 'white' }}>
			{#each colors as color}
				{#each [1, 2, 3, 4, 5, 6] as colorLevel}
					<Grid item sz={4}>
						<Flex
							s={{
								color,
								colorLevel: colorLevel as 1 | 2 | 3 | 4 | 5 | 6,
								items: 'center',
								justify: 'between'
							}}
						>
							<Button
								s={{
									color,
									colorLevel: (colorLevel === 1 ? 1 : colorLevel - 1) as 1 | 2 | 3 | 4 | 5 | 6
								}}>{color}</Button
							>
							<Button
								s={{
									color,
									colorLevel: (colorLevel === 6 ? 6 : colorLevel + 1) as 1 | 2 | 3 | 4 | 5 | 6
								}}>{color}</Button
							>
						</Flex>
					</Grid>
				{/each}
			{/each}
		</Grid>
	</Flex>
</div>

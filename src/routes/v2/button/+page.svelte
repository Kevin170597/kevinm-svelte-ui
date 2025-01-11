<script lang="ts">
	import {
		ButtonV2 as Button,
		GridV2 as Grid,
		FlexV2 as Flex,
		TitleV2 as Title,
		CodeBlock,
		IconV2 as Icon
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
		<Title s={{ color: 'white', size: 'lg' }}>Button</Title>
		<CodeBlock lang="ts" code={'import { Button } from "sveltekev";'} radius="lg" />
		<Title s={{ color: 'white', size: 'lg' }}>Colors</Title>
		<Flex s={{ gap: 4, items: 'center' }}>
			<Title s={{ color: 'white' }}>Color levels</Title>
			<Button oc={() => (dark = !dark)} s={{ color: 'white', size: 'sm' }}>Toggle theme</Button>
		</Flex>
		<Grid s={{ gap: 4, color: dark ? 'black' : 'white', lighter: true }}>
			{#each colors as color}
				{#each [1, 2, 3, 4, 5, 6] as colorLevel}
					<Grid item sz={2}>
						<Button s={{ color, colorLevel: colorLevel as 1 | 2 | 3 | 4 | 5 | 6 }} class="w-full">
							{color}
						</Button>
					</Grid>
				{/each}
			{/each}
		</Grid>
		<Title s={{ color: 'white', size: 'lg' }}>Sizes</Title>
		<Grid s={{ gap: 4, color: dark ? 'black' : 'white', lighter: true }}>
			{#each sizes as size}
				<Grid item sz={2}>
					<Button s={{ color: 'slate', size }} class="w-full">
						{size}
					</Button>
				</Grid>
			{/each}
		</Grid>
		<Title s={{ color: 'white', size: 'lg' }}>Sizes</Title>
		<Grid s={{ gap: 4, color: dark ? 'black' : 'white', lighter: true }}>
			<Grid item sz={2}>
				<Button s={{ color: 'red', startIcon: 'delete' }} class="w-full">Delete</Button>
			</Grid>
			<Grid item sz={2}>
				<Button s={{ color: 'indigo', endIcon: 'cart' }} class="w-full">Cart</Button>
			</Grid>
		</Grid>
	</Flex>
</div>

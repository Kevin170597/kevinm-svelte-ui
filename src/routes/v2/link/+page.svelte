<script lang="ts">
	import {
		TextV2 as Text,
		GridV2 as Grid,
		TitleV2 as Title,
		FlexV2 as Flex,
		ButtonV2 as Button,
        LinkV2 as Link
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
		<Title s={{ color: 'white', size: 'lg' }}>Link</Title>
		<CodeBlock lang="ts" code={'import { Link } from "sveltekev";'} radius="lg" />
		<Title s={{ color: 'white', size: 'lg' }}>Colors</Title>
		<Flex s={{ gap: 4, items: 'center' }} class="p-0">
			<Title s={{ color: 'white' }}>Color levels</Title>
			<Button oc={() => (dark = !dark)} s={{ color: 'white', size: 'sm' }}>Toggle theme</Button>
		</Flex>
		<Grid s={{ gap: 2, color: dark ? 'black' : 'white' }}>
			{#each colors as color}
				{#each [1, 2, 3, 4, 5, 6] as colorLevel}
					<Grid item sz={2}>
						<Link href="/" s={{ color, colorLevel: colorLevel as 1 | 2 | 3 | 4 | 5 | 6 }}>{color}</Link>
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
					<Link href="/" s={{ size: size, color: 'black' }}>{size}</Link>
				</Grid>
			{/each}
		</Grid>
		<Flex s={{ gap: 4, items: 'center' }} class="p-0">
			<Title s={{ color: 'white' }}>Bold</Title>
			<Button oc={() => (dark = !dark)} s={{ color: 'white', size: 'sm' }}>Toggle theme</Button>
		</Flex>
		<Grid s={{ gap: 2, color: dark ? 'black' : 'white' }}>
			<Grid item sz={2}>
				<Link href="/" s={{ bold: true, color: 'black' }}>Bold link</Link>
			</Grid>
		</Grid>
		<Flex s={{ gap: 4, items: 'center' }} class="p-0">
			<Title s={{ color: 'white' }}>Italic</Title>
			<Button oc={() => (dark = !dark)} s={{ color: 'white', size: 'sm' }}>Toggle theme</Button>
		</Flex>
		<Grid s={{ gap: 2, color: dark ? 'black' : 'white' }}>
			<Grid item sz={2}>
				<Link href="/" s={{ italic: true, color: 'black' }}>Italic link</Link>
			</Grid>
		</Grid>
        <Flex s={{ gap: 4, items: 'center' }} class="p-0">
			<Title s={{ color: 'white' }}>Underline</Title>
			<Button oc={() => (dark = !dark)} s={{ color: 'white', size: 'sm' }}>Toggle theme</Button>
		</Flex>
		<Grid s={{ gap: 2, color: dark ? 'black' : 'white' }}>
			<Grid item sz={2}>
				<Link href="/" s={{ underline: true, color: 'black' }}>Underline link</Link>
			</Grid>
		</Grid>
	</Flex>
</div>

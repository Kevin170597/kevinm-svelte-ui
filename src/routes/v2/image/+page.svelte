<script lang="ts">
	import {
		ButtonV2 as Button,
		GridV2 as Grid,
		FlexV2 as Flex,
		TitleV2 as Title,
		CodeBlock,
		IconV2 as Icon,
        ImageV2 as Image
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

	type Rounded = 'sm' | 'md' | 'lg' | 'xl' | 'full';

	let rounded: Rounded[] = $state(['sm', 'md', 'lg', 'full']);

	let dark: boolean = $state(false);
</script>

<div class="h-[100vh] overflow-auto p-8">
	<Flex s={{ direction: 'col', gap: 4 }}>
		<Title s={{ color: 'white', size: 'lg' }}>Image</Title>
		<CodeBlock lang="ts" code={'import { Image } from "sveltekev";'} radius="lg" />
		<Title s={{ color: 'white', size: 'lg' }}>Colors</Title>
		<Flex s={{ gap: 4, items: 'center' }}>
			<Title s={{ color: 'white' }}>Rounded</Title>
			<Button oc={() => (dark = !dark)} s={{ color: 'white', size: 'sm' }}>Toggle theme</Button>
		</Flex>
        <Grid s={{ gap: 2, color: dark ? 'black' : 'white' }}>
            {#each rounded as rounded}
                <Grid item sz={3}>
                    <Flex s={{ direction: 'col', items: 'center' }}>
                        <Image
                            s={{ rounded }}
                            src="https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/07/pokemon-anime-dragonite.jpg"
                            alt="avatar"
                        />
                        <Title s={{ size: 'sm' }}>{rounded}</Title>
                    </Flex>
                </Grid>
            {/each}
        </Grid>
    </Flex>
</div>
<script lang="ts">
	import {
		FlexV2 as Flex,
		TitleV2 as Title,
		GridV2 as Grid,
		ButtonV2 as Button,
		TextV2 as Text,
		InputV2 as Input
	} from '$lib';

	interface Product {
		title: string;
		price: number;
	}

	let product: Product = $state({
		title: '',
		price: 0
	});
</script>

<div class="h-[100vh] overflow-auto p-8 flex flex-col gap-4">
    <Flex s={{ direction: "col", gap: 4 }} class="w-[80%] mx-auto !p-0">
        <Title s={{ size: "md" }}>Testing a form with inputs</Title>
        <Text>Background and input colors are the same, but in diferent levels.</Text>
    </Flex>
	<Flex s={{ color: 'indigo', colorLevel: 6, direction: 'col', gap: 4 }} class="w-[80%] mx-auto">
		<Title s={{ color: 'indigo', size: 'md', colorLevel: 3 }}>Create Product</Title>
        <Text s={{ color: 'indigo', colorLevel: 3 }}>Create a new product</Text>
		<Grid s={{ gap: 4 }} class="!p-0">
			<Grid item sz={6}>
				<Input
					s={{ color: 'white', colorLevel: 5 }}
					c={{ label: 'Title', placeholder: 'Type a title...' }}
					bind:value={product.title}
				/>
			</Grid>
			<Grid item sz={6}>
				<Input
					s={{ color: 'white', colorLevel: 5 }}
					c={{ label: 'Price', type: 'number', placeholder: '0' }}
					bind:value={product.price}
				/>
			</Grid>
            <Grid item sz={12}>
				<Input
					s={{ color: 'white', colorLevel: 5 }}
					c={{ label: 'Title', placeholder: 'Type a title...' }}
					bind:value={product.title}
				/>
			</Grid>
		</Grid>
		<Button s={{ color: 'indigo', colorLevel: 3 }} class="ml-auto">Save</Button>
	</Flex>
</div>

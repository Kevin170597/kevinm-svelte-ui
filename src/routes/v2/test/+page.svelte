<script lang="ts">
	import {
		FlexV2 as Flex,
		TitleV2 as Title,
		GridV2 as Grid,
		ButtonV2 as Button,
		TextV2 as Text,
		InputV2 as Input,
		SelectV2 as Select,
		FlexDnDV2 as FlexDnD
	} from '$lib';

	interface Product {
		title: string;
		price: number;
		color: string;
	}

	let product: Product = $state({
		title: '',
		price: 0,
		color: ''
	});

	let colorOptions: { label: string; value: string }[] = $state([
		{ label: 'Red', value: 'red' },
		{ label: 'blue', value: 'blue' }
	]);
</script>

<div class="h-[100vh] overflow-auto p-8 flex flex-col gap-4">
	<Flex s={{ direction: 'col', gap: 4 }} class="w-[80%] mx-auto !p-0">
		<Title s={{ size: 'md' }}>Testing a form with inputs</Title>
		<Text>Background and input colors are the same, but in diferent levels.</Text>
	</Flex>
	<Flex
		s={{ color: 'transparent', colorLevel: 6, direction: 'col', gap: 4 }}
		class="w-[80%] mx-auto"
	>
		<Title s={{ color: 'indigo', size: 'md', colorLevel: 4 }}>Create Product</Title>
		<Text s={{ color: 'indigo', colorLevel: 4 }}>Create a new product</Text>
		<Grid s={{ gap: 4 }} class="!p-0">
			<Grid item sz={6}>
				<Input
					s={{ color: 'indigo', colorLevel: 2 }}
					c={{ label: 'Title', placeholder: 'Type a title...' }}
					bind:value={product.title}
				/>
			</Grid>
			<Grid item sz={6}>
				<Input
					s={{ color: 'indigo', colorLevel: 2 }}
					c={{ label: 'Price', type: 'number', placeholder: '0' }}
					bind:value={product.price}
				/>
			</Grid>
			<Grid item sz={12}>
				<Input
					s={{ color: 'indigo', colorLevel: 2 }}
					c={{ label: 'Title', placeholder: 'Type a title...' }}
					bind:value={product.title}
				/>
			</Grid>
			<Grid item sz={12}>
				<Select
					s={{ color: 'indigo', colorLevel: 2 }}
					triggerLabel="Select a color"
					bind:value={product.color}
					items={colorOptions}
				/>
			</Grid>
			<Grid item sz={12}>
				<FlexDnD
					s={{ color: 'indigo', colorLevel: 2, gap: 4 }}
					items={[
						{ id: 1, name: 'Item 1' },
						{ id: 2, name: 'Item 2' },
						{ id: 3, name: 'Item 3' }
					]}
				>
					{#snippet children(item: { id: number; name: string })}
						<Flex s={{ color: 'indigo', colorLevel: 4 }}>
							<Text s={{ color: "indigo", colorLevel: 1, bold: true }}>{item.name}</Text>
						</Flex>
					{/snippet}
				</FlexDnD>
			</Grid>
		</Grid>
		<Button s={{ color: 'indigo', colorLevel: 4 }} class="ml-auto">Save</Button>
	</Flex>
</div>

<script lang="ts">
	import { Input, Title } from '$lib';
	import '../../app.css';

	let n: string | null = null;
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
	<Title color="white">Size</Title>
	<Input
		bind:value={n}
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="default"
		radius="none"
		size="xs"
	/>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="default"
		radius="none"
		size="sm"
	/>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="default"
		radius="none"
		size="md"
	/>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="default"
		radius="none"
		size="lg"
	/>
	<Title color="white">Radius</Title>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="default"
		radius="none"
		size="md"
	/>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="default"
		radius="sm"
		size="md"
	/>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="default"
		radius="md"
		size="md"
	/>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="default"
		radius="lg"
		size="md"
	/>
	<Title color="white">Color</Title>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="default"
		radius="lg"
		size="md"
	/>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="white"
		radius="lg"
		size="md"
	/>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="black"
		radius="lg"
		size="md"
	/>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="gray"
		radius="lg"
		size="md"
	/>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="primary"
		radius="lg"
		size="md"
	/>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="secondary"
		radius="lg"
		size="md"
	/>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="success"
		radius="lg"
		size="md"
	/>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="warning"
		radius="lg"
		size="md"
	/>
	<Input
		label="Email"
		placeholder="Enter your email"
		variant="solid"
		color="danger"
		radius="lg"
		size="md"
	/>
	<Title color="white">Shadow</Title>
	<div class="flex gap-2">
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="default"
			radius="lg"
			size="md"
			shadow={1}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="default"
			radius="lg"
			size="md"
			shadow={2}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="default"
			radius="lg"
			size="md"
			shadow={3}
		/>
	</div>
	<div class="flex gap-2">
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="black"
			radius="lg"
			size="md"
			shadow={1}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="black"
			radius="lg"
			size="md"
			shadow={2}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="black"
			radius="lg"
			size="md"
			shadow={3}
		/>
	</div>
	<div class="flex gap-2">
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="white"
			radius="lg"
			size="md"
			shadow={1}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="white"
			radius="lg"
			size="md"
			shadow={2}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="white"
			radius="lg"
			size="md"
			shadow={3}
		/>
	</div>
	<div class="flex gap-2">
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="gray"
			radius="lg"
			size="md"
			shadow={1}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="gray"
			radius="lg"
			size="md"
			shadow={2}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="gray"
			radius="lg"
			size="md"
			shadow={3}
		/>
	</div>
	<div class="flex gap-2">
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="primary"
			radius="lg"
			size="md"
			shadow={1}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="primary"
			radius="lg"
			size="md"
			shadow={2}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="primary"
			radius="lg"
			size="md"
			shadow={3}
		/>
	</div>
	<div class="flex gap-2">
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="secondary"
			radius="lg"
			size="md"
			shadow={1}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="secondary"
			radius="lg"
			size="md"
			shadow={2}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="secondary"
			radius="lg"
			size="md"
			shadow={3}
		/>
	</div>
	<div class="flex gap-2">
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="success"
			radius="lg"
			size="md"
			shadow={1}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="success"
			radius="lg"
			size="md"
			shadow={2}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="success"
			radius="lg"
			size="md"
			shadow={3}
		/>
	</div>
	<div class="flex gap-2">
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="warning"
			radius="lg"
			size="md"
			shadow={1}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="warning"
			radius="lg"
			size="md"
			shadow={2}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="warning"
			radius="lg"
			size="md"
			shadow={3}
		/>
	</div>
	<div class="flex gap-2">
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="danger"
			radius="lg"
			size="md"
			shadow={1}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="danger"
			radius="lg"
			size="md"
			shadow={2}
		/>
		<Input
			label="Email"
			placeholder="Enter your email"
			variant="solid"
			color="danger"
			radius="lg"
			size="md"
			shadow={3}
		/>
	</div>
</div>

<script lang="ts">
	import '../../app.css';
	import { Text, Title } from '$lib';
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
	<Title color="white">Size</Title>
	<div class="flex gap-2">
		<Text color="white" size="xs">Text</Text>
		<Text color="white" size="sm">Text</Text>
		<Text color="white" size="md">Text</Text>
		<Text color="white" size="lg">Text</Text>
		<Text color="white" size="xl">Text</Text>
	</div>
    <Title color="white">Color</Title>
	<div class="flex gap-2">
		<Text color="default" size="md">Text</Text>
		<Text color="black" size="md">Text</Text>
		<Text color="white" size="md">Text</Text>
		<Text color="gray" size="md">Text</Text>
		<Text color="primary" size="md">Text</Text>
		<Text color="secondary" size="md">Text</Text>
		<Text color="success" size="md">Text</Text>
		<Text color="warning" size="md">Text</Text>
		<Text color="danger" size="md">Text</Text>
	</div>
</div>

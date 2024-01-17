<script lang="ts">
	import '../../app.css';
	import { Title } from '$lib';
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
    <Title color="white">Size</Title>
    <div class="flex gap-2">
		<Title color="white" size="xs">Title</Title>
		<Title color="white" size="sm">Title</Title>
		<Title color="white" size="md">Title</Title>
		<Title color="white" size="lg">Title</Title>
		<Title color="white" size="xl">Title</Title>
	</div>
    <Title color="white">Color</Title>
	<div class="flex gap-2">
		<Title color="default" size="md">Title</Title>
		<Title color="black" size="md">Title</Title>
		<Title color="white" size="md">Title</Title>
		<Title color="gray" size="md">Title</Title>
		<Title color="primary" size="md">Title</Title>
		<Title color="secondary" size="md">Title</Title>
		<Title color="success" size="md">Title</Title>
		<Title color="warning" size="md">Title</Title>
		<Title color="danger" size="md">Title</Title>
	</div>
</div>
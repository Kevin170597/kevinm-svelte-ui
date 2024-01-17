<script lang="ts">
	import '../../app.css';
	import { Link, Title } from '$lib';
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
    <Title color="white">Size</Title>
    <div class="flex gap-2">
		<Link color="white" size="xs">Link</Link>
		<Link color="white" size="sm">Link</Link>
		<Link color="white" size="md">Link</Link>
		<Link color="white" size="lg">Link</Link>
		<Link color="white" size="xl">Link</Link>
	</div>
    <Title color="white">Color</Title>
	<div class="flex gap-2">
		<Link color="default" size="md">Link</Link>
		<Link color="black" size="md">Link</Link>
		<Link color="white" size="md">Link</Link>
		<Link color="gray" size="md">Link</Link>
		<Link color="primary" size="md">Link</Link>
		<Link color="secondary" size="md">Link</Link>
		<Link color="success" size="md">Link</Link>
		<Link color="warning" size="md">Link</Link>
		<Link color="danger" size="md">Link</Link>
	</div>
    <Title color="white">Underline</Title>
    <Link color="white" size="md" underline="none">Link</Link>
    <Link color="white" size="md" underline="hover">Link</Link>
    <Link color="white" size="md" underline="always">Link</Link>
</div>
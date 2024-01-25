<script lang="ts">
	import '../../app.css';
	import { Title, Tabs } from '$lib';
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
	<Title color="white">Size</Title>
    <Tabs size="xs" />
    <Tabs size="sm" />
    <Tabs size="md" />
    <Tabs size="lg" />
    <Tabs size="xl" />
    <Title color="white">Radius</Title>
    <Tabs radius="none" />
    <Tabs radius="sm" />
    <Tabs radius="md" />
    <Tabs radius="lg" />
    <Tabs radius="full" />
    <Title color="white">Color</Title>
    <Tabs color="black" />
    <Tabs color="white" />
    <Tabs color="gray" />
    <Tabs color="none" />
    <Tabs color="default" />
    <Tabs color="primary" />
    <Tabs color="secondary" />
    <Tabs color="success" />
    <Tabs color="warning" />
    <Tabs color="danger" />
</div>
<script lang="ts">
	import '../../app.css';
	import { Select, Title } from '$lib';
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
	<Title color="white">Size</Title>
    <Select size="xs" />
    <Select size="sm" />
    <Select size="md" />
    <Select size="lg" />
    <Select size="xl" />
    <Title color="white">Radius</Title>
    <Select radius="none" />
    <Select radius="sm" />
    <Select radius="md" />
    <Select radius="lg" />
    <Select radius="full" />
    <Title color="white">Color</Title>
    <Select radius="lg" color="black" />
    <Select radius="lg" color="white" />
    <Select radius="lg" color="gray" />
    <Select radius="lg" color="none" />
    <Select radius="lg" color="default" />
    <Select radius="lg" color="primary" />
    <Select radius="lg" color="secondary" />
    <Select radius="lg" color="success" />
    <Select radius="lg" color="warning" />
    <Select radius="lg" color="danger" />
    <Title color="white">Shadow</Title>
    <div class="flex gap-2">
        <Select radius="lg" color="black" shadow={0} />
        <Select radius="lg" color="black" shadow={1} />
        <Select radius="lg" color="black" shadow={2} />
        <Select radius="lg" color="black" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Select radius="lg" color="white" shadow={0} />
        <Select radius="lg" color="white" shadow={1} />
        <Select radius="lg" color="white" shadow={2} />
        <Select radius="lg" color="white" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Select radius="lg" color="gray" shadow={0} />
        <Select radius="lg" color="gray" shadow={1} />
        <Select radius="lg" color="gray" shadow={2} />
        <Select radius="lg" color="gray" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Select radius="lg" color="default" shadow={0} />
        <Select radius="lg" color="default" shadow={1} />
        <Select radius="lg" color="default" shadow={2} />
        <Select radius="lg" color="default" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Select radius="lg" color="primary" shadow={0} />
        <Select radius="lg" color="primary" shadow={1} />
        <Select radius="lg" color="primary" shadow={2} />
        <Select radius="lg" color="primary" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Select radius="lg" color="secondary" shadow={0} />
        <Select radius="lg" color="secondary" shadow={1} />
        <Select radius="lg" color="secondary" shadow={2} />
        <Select radius="lg" color="secondary" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Select radius="lg" color="success" shadow={0} />
        <Select radius="lg" color="success" shadow={1} />
        <Select radius="lg" color="success" shadow={2} />
        <Select radius="lg" color="success" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Select radius="lg" color="warning" shadow={0} />
        <Select radius="lg" color="warning" shadow={1} />
        <Select radius="lg" color="warning" shadow={2} />
        <Select radius="lg" color="warning" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Select radius="lg" color="danger" shadow={0} />
        <Select radius="lg" color="danger" shadow={1} />
        <Select radius="lg" color="danger" shadow={2} />
        <Select radius="lg" color="danger" shadow={3} />
    </div>
</div>
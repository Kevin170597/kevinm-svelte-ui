<script lang="ts">
	import { OnThisPage, Title } from '$lib';
	import '../../app.css';
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
	<Title color="white">Size</Title>
	<div class="flex gap-2">
		<OnThisPage size="xs" />
		<OnThisPage size="sm" />
		<OnThisPage size="md" />
		<OnThisPage size="lg" />
		<OnThisPage size="xl" />
	</div>
	<Title color="white">Radius</Title>
	<div class="flex gap-2">
		<OnThisPage color="default" size="md" radius="none" />
		<OnThisPage color="default" size="md" radius="sm" />
		<OnThisPage color="default" size="md" radius="md" />
		<OnThisPage color="default" size="md" radius="lg" />
	</div>
	<Title color="white">Color</Title>
	<div class="flex gap-2">
		<OnThisPage color="default" size="md" radius="lg" />
		<OnThisPage color="black" size="md" radius="lg" />
		<OnThisPage color="white" size="md" radius="lg" />
		<OnThisPage color="gray" size="md" radius="lg" />
		<OnThisPage color="primary" size="md" radius="lg" />
	</div>
	<div class="flex gap-2">
		<OnThisPage color="secondary" size="md" radius="lg" />
		<OnThisPage color="success" size="md" radius="lg" />
		<OnThisPage color="warning" size="md" radius="lg" />
		<OnThisPage color="danger" size="md" radius="lg" />
	</div>
    <Title color="white">Shadow</Title>
    <div class="flex gap-2">
        <OnThisPage color="default" size="md" radius="lg" shadow={1} />
        <OnThisPage color="default" size="md" radius="lg" shadow={2} />
        <OnThisPage color="default" size="md" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2">
        <OnThisPage color="black" size="md" radius="lg" shadow={1} />
        <OnThisPage color="black" size="md" radius="lg" shadow={2} />
        <OnThisPage color="black" size="md" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2">
        <OnThisPage color="white" size="md" radius="lg" shadow={1} />
        <OnThisPage color="white" size="md" radius="lg" shadow={2} />
        <OnThisPage color="white" size="md" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2">
        <OnThisPage color="gray" size="md" radius="lg" shadow={1} />
        <OnThisPage color="gray" size="md" radius="lg" shadow={2} />
        <OnThisPage color="gray" size="md" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2">
        <OnThisPage color="primary" size="md" radius="lg" shadow={1} />
        <OnThisPage color="primary" size="md" radius="lg" shadow={2} />
        <OnThisPage color="primary" size="md" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2">
        <OnThisPage color="secondary" size="md" radius="lg" shadow={1} />
        <OnThisPage color="secondary" size="md" radius="lg" shadow={2} />
        <OnThisPage color="secondary" size="md" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2">
        <OnThisPage color="success" size="md" radius="lg" shadow={1} />
        <OnThisPage color="success" size="md" radius="lg" shadow={2} />
        <OnThisPage color="success" size="md" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2">
        <OnThisPage color="warning" size="md" radius="lg" shadow={1} />
        <OnThisPage color="warning" size="md" radius="lg" shadow={2} />
        <OnThisPage color="warning" size="md" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2">
        <OnThisPage color="danger" size="md" radius="lg" shadow={1} />
        <OnThisPage color="danger" size="md" radius="lg" shadow={2} />
        <OnThisPage color="danger" size="md" radius="lg" shadow={3} />
    </div>
    <Title color="white">Underline</Title>
    <div class="flex gap-2">
        <OnThisPage color="default" size="md" radius="lg" shadow={1} underline="none" />
        <OnThisPage color="default" size="md" radius="lg" shadow={2} underline="hover" />
        <OnThisPage color="default" size="md" radius="lg" shadow={3} underline="always" />
    </div>
</div>

<script lang="ts">
	import { Checkbox, Title } from '$lib';
    let check = true as boolean
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
    <Title color="white">Size</Title>
    <Checkbox radius="none" size="xs" bind:checked={check} />
    <Checkbox radius="none" size="sm" bind:checked={check} />
    <Checkbox radius="none" size="md" bind:checked={check} />
    <Checkbox radius="none" size="lg" bind:checked={check} />
    <Checkbox radius="none" size="xl" bind:checked={check} />
	<Title color="white">Radius</Title>
    <Checkbox radius="none" bind:checked={check} />
    <Checkbox radius="sm" bind:checked={check} />
    <Checkbox radius="md" bind:checked={check} />
    <Checkbox radius="lg" bind:checked={check} />
    <Checkbox radius="full" bind:checked={check} />
    <Title color="white">Color</Title>
    <Checkbox radius="lg" bind:checked={check} color="default" />
    <Checkbox radius="lg" bind:checked={check} color="black" />
    <Checkbox radius="lg" bind:checked={check} color="gray" />
    <Checkbox radius="lg" bind:checked={check} color="primary" />
    <Checkbox radius="lg" bind:checked={check} color="secondary" />
    <Checkbox radius="lg" bind:checked={check} color="success" />
    <Checkbox radius="lg" bind:checked={check} color="warning" />
    <Checkbox radius="lg" bind:checked={check} color="danger" />
</div>
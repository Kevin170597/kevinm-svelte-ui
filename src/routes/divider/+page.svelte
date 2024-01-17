<script lang="ts">
	import { Divider, Title } from '$lib';
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
    <Title color="white">Size</Title>
    <Divider size="xs" />
    <Divider size="sm" />
    <Divider size="md" />
    <Divider size="lg" />
    <Divider size="xl" />
    <Title color="white">Color</Title>
    <Divider size="md" color="default" />
    <Divider size="md" color="black" />
    <Divider size="md" color="white" />
    <Divider size="md" color="gray" />
    <Divider size="md" color="primary" />
    <Divider size="md" color="secondary" />
    <Divider size="md" color="success" />
    <Divider size="md" color="warning" />
    <Divider size="md" color="danger" />
</div>
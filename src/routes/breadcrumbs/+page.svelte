<script lang="ts">
    import { Breadcrumbs, Title } from "$lib";
    import "../../app.css";
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
    <Title color="white">Size</Title>
    <Breadcrumbs size="xs" />
    <Breadcrumbs size="sm" />
    <Breadcrumbs size="md" />
    <Breadcrumbs size="lg" />
    <Breadcrumbs size="xl" />
    <Title color="white">Radius</Title>
    <Breadcrumbs size="md" radius="none" />
    <Breadcrumbs size="md" radius="sm" />
    <Breadcrumbs size="md" radius="md" />
    <Breadcrumbs size="md" radius="lg" />
    <Breadcrumbs size="md" radius="full" />
    <Title color="white">Color</Title>
    <Breadcrumbs size="md" radius="lg" color="default" />
    <Breadcrumbs size="md" radius="lg" color="black" />
    <Breadcrumbs size="md" radius="lg" color="white" />
    <Breadcrumbs size="md" radius="lg" color="gray" />
    <Breadcrumbs size="md" radius="lg" color="primary" />
    <Breadcrumbs size="md" radius="lg" color="secondary" />
    <Breadcrumbs size="md" radius="lg" color="success" />
    <Breadcrumbs size="md" radius="lg" color="warning" />
    <Breadcrumbs size="md" radius="lg" color="danger" />
    <Title color="white">Shadow</Title>
    <div class="flex gap-2">
        <Breadcrumbs size="md" radius="lg" color="default" shadow={1} />
        <Breadcrumbs size="md" radius="lg" color="default" shadow={2} />
        <Breadcrumbs size="md" radius="lg" color="default" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Breadcrumbs size="md" radius="lg" color="black" shadow={1} />
        <Breadcrumbs size="md" radius="lg" color="black" shadow={2} />
        <Breadcrumbs size="md" radius="lg" color="black" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Breadcrumbs size="md" radius="lg" color="white" shadow={1} />
        <Breadcrumbs size="md" radius="lg" color="white" shadow={2} />
        <Breadcrumbs size="md" radius="lg" color="white" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Breadcrumbs size="md" radius="lg" color="gray" shadow={1} />
        <Breadcrumbs size="md" radius="lg" color="gray" shadow={2} />
        <Breadcrumbs size="md" radius="lg" color="gray" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Breadcrumbs size="md" radius="lg" color="primary" shadow={1} />
        <Breadcrumbs size="md" radius="lg" color="primary" shadow={2} />
        <Breadcrumbs size="md" radius="lg" color="primary" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Breadcrumbs size="md" radius="lg" color="secondary" shadow={1} />
        <Breadcrumbs size="md" radius="lg" color="secondary" shadow={2} />
        <Breadcrumbs size="md" radius="lg" color="secondary" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Breadcrumbs size="md" radius="lg" color="success" shadow={1} />
        <Breadcrumbs size="md" radius="lg" color="success" shadow={2} />
        <Breadcrumbs size="md" radius="lg" color="success" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Breadcrumbs size="md" radius="lg" color="warning" shadow={1} />
        <Breadcrumbs size="md" radius="lg" color="warning" shadow={2} />
        <Breadcrumbs size="md" radius="lg" color="warning" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Breadcrumbs size="md" radius="lg" color="danger" shadow={1} />
        <Breadcrumbs size="md" radius="lg" color="danger" shadow={2} />
        <Breadcrumbs size="md" radius="lg" color="danger" shadow={3} />
    </div>
</div>
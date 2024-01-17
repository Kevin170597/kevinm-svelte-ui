<script lang="ts">
    import { Chip, Title } from "$lib";
    import "../../app.css";
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
    <Title color="white">Size</Title>
    <Chip content="Chip" size="xs" />
    <Chip content="Chip" size="sm" />
    <Chip content="Chip" size="md" />
    <Chip content="Chip" size="lg" />
    <Chip content="Chip" size="xl" />
    <Title color="white">Radius</Title>
    <Chip content="Chip" size="md" radius="none" />
    <Chip content="Chip" size="md" radius="sm" />
    <Chip content="Chip" size="md" radius="md" />
    <Chip content="Chip" size="md" radius="lg" />
    <Chip content="Chip" size="md" radius="full" />
    <Title color="white">Color</Title>
    <Chip content="Chip" size="md" radius="full" color="default" />
    <Chip content="Chip" size="md" radius="full" color="black" />
    <Chip content="Chip" size="md" radius="full" color="white" />
    <Chip content="Chip" size="md" radius="full" color="gray" />
    <Chip content="Chip" size="md" radius="full" color="primary" />
    <Chip content="Chip" size="md" radius="full" color="secondary" />
    <Chip content="Chip" size="md" radius="full" color="success" />
    <Chip content="Chip" size="md" radius="full" color="warning" />
    <Chip content="Chip" size="md" radius="full" color="danger" />
    <Title color="white">Shadow</Title>
    <div class="flex gap-2">
        <Chip content="Chip" size="md" radius="full" color="default" shadow={1} />
        <Chip content="Chip" size="md" radius="full" color="default" shadow={2} />
        <Chip content="Chip" size="md" radius="full" color="default" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Chip content="Chip" size="md" radius="full" color="black" shadow={1} />
        <Chip content="Chip" size="md" radius="full" color="black" shadow={2} />
        <Chip content="Chip" size="md" radius="full" color="black" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Chip content="Chip" size="md" radius="full" color="white" shadow={1} />
        <Chip content="Chip" size="md" radius="full" color="white" shadow={2} />
        <Chip content="Chip" size="md" radius="full" color="white" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Chip content="Chip" size="md" radius="full" color="gray" shadow={1} />
        <Chip content="Chip" size="md" radius="full" color="gray" shadow={2} />
        <Chip content="Chip" size="md" radius="full" color="gray" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Chip content="Chip" size="md" radius="full" color="primary" shadow={1} />
        <Chip content="Chip" size="md" radius="full" color="primary" shadow={2} />
        <Chip content="Chip" size="md" radius="full" color="primary" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Chip content="Chip" size="md" radius="full" color="secondary" shadow={1} />
        <Chip content="Chip" size="md" radius="full" color="secondary" shadow={2} />
        <Chip content="Chip" size="md" radius="full" color="secondary" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Chip content="Chip" size="md" radius="full" color="success" shadow={1} />
        <Chip content="Chip" size="md" radius="full" color="success" shadow={2} />
        <Chip content="Chip" size="md" radius="full" color="success" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Chip content="Chip" size="md" radius="full" color="warning" shadow={1} />
        <Chip content="Chip" size="md" radius="full" color="warning" shadow={2} />
        <Chip content="Chip" size="md" radius="full" color="warning" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Chip content="Chip" size="md" radius="full" color="danger" shadow={1} />
        <Chip content="Chip" size="md" radius="full" color="danger" shadow={2} />
        <Chip content="Chip" size="md" radius="full" color="danger" shadow={3} />
    </div>
    <Title color="white">Link</Title>
    <Chip content="Chip" size="md" radius="full" color="default" shadow={1} link="https://youtube.com" />
    <Title color="white">Icon</Title>
    <Chip content="Chip" size="md" radius="full" color="white" shadow={1} link="https://youtube.com" icon="arrowDown" />
    <Chip content="Chip" size="md" radius="full" color="warning" shadow={1} icon="grid" iconSize={16} />
</div>
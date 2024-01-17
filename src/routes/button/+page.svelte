<script lang="ts">
    import '../../app.css';
    import { Button, Title } from "$lib"
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
    <Title color="white">Size</Title>
    <Button size="xs">
        Button
    </Button>
    <Button size="sm">
        Button
    </Button>
    <Button size="md">
        Button
    </Button>
    <Button size="lg">
        Button
    </Button>
    <Button size="xl">
        Button
    </Button>
    <Title color="white">Radius</Title>
    <Button size="md" radius="none">
        Button
    </Button>
    <Button size="md" radius="sm">
        Button
    </Button>
    <Button size="md" radius="md">
        Button
    </Button>
    <Button size="md" radius="lg">
        Button
    </Button>
    <Button size="md" radius="full">
        Button
    </Button>
    <Title color="white">Color</Title>
    <Button size="md" radius="lg" color="default">
        Button
    </Button>
    <Button size="md" radius="lg" color="black">
        Button
    </Button>
    <Button size="md" radius="lg" color="white">
        Button
    </Button>
    <Button size="md" radius="lg" color="gray">
        Button
    </Button>
    <Button size="md" radius="lg" color="primary">
        Button
    </Button>
    <Button size="md" radius="lg" color="secondary">
        Button
    </Button>
    <Button size="md" radius="lg" color="success">
        Button
    </Button>
    <Button size="md" radius="lg" color="warning">
        Button
    </Button>
    <Button size="md" radius="lg" color="danger">
        Button
    </Button>
    <Title color="white">Shadow</Title>
    <div class="flex gap-2">
        <Button size="md" radius="lg" color="default" shadow={1}>
            Button
        </Button>
        <Button size="md" radius="lg" color="default" shadow={2}>
            Button
        </Button>
        <Button size="md" radius="lg" color="default" shadow={3}>
            Button
        </Button>
    </div>
    <div class="flex gap-2">
        <Button size="md" radius="lg" color="black" shadow={1}>
            Button
        </Button>
        <Button size="md" radius="lg" color="black" shadow={2}>
            Button
        </Button>
        <Button size="md" radius="lg" color="black" shadow={3}>
            Button
        </Button>
    </div>
    <div class="flex gap-2">
        <Button size="md" radius="lg" color="white" shadow={1}>
            Button
        </Button>
        <Button size="md" radius="lg" color="white" shadow={2}>
            Button
        </Button>
        <Button size="md" radius="lg" color="white" shadow={3}>
            Button
        </Button>
    </div>
    <div class="flex gap-2">
        <Button size="md" radius="lg" color="gray" shadow={1}>
            Button
        </Button>
        <Button size="md" radius="lg" color="gray" shadow={2}>
            Button
        </Button>
        <Button size="md" radius="lg" color="gray" shadow={3}>
            Button
        </Button>
    </div>
    <div class="flex gap-2">
        <Button size="md" radius="lg" color="primary" shadow={1}>
            Button
        </Button>
        <Button size="md" radius="lg" color="primary" shadow={2}>
            Button
        </Button>
        <Button size="md" radius="lg" color="primary" shadow={3}>
            Button
        </Button>
    </div>
    <div class="flex gap-2">
        <Button size="md" radius="lg" color="secondary" shadow={1}>
            Button
        </Button>
        <Button size="md" radius="lg" color="secondary" shadow={2}>
            Button
        </Button>
        <Button size="md" radius="lg" color="secondary" shadow={3}>
            Button
        </Button>
    </div>
    <div class="flex gap-2">
        <Button size="md" radius="lg" color="success" shadow={1}>
            Button
        </Button>
        <Button size="md" radius="lg" color="success" shadow={2}>
            Button
        </Button>
        <Button size="md" radius="lg" color="success" shadow={3}>
            Button
        </Button>
    </div>
    <div class="flex gap-2">
        <Button size="md" radius="lg" color="warning" shadow={1}>
            Button
        </Button>
        <Button size="md" radius="lg" color="warning" shadow={2}>
            Button
        </Button>
        <Button size="md" radius="lg" color="warning" shadow={3}>
            Button
        </Button>
    </div>
    <div class="flex gap-2">
        <Button size="md" radius="lg" color="danger" shadow={1}>
            Button
        </Button>
        <Button size="md" radius="lg" color="danger" shadow={2}>
            Button
        </Button>
        <Button size="md" radius="lg" color="danger" shadow={3}>
            Button
        </Button>
    </div>
</div>
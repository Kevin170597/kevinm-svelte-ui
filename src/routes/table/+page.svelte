<script lang="ts">
	import { Table, Title } from '$lib';
	import '../../app.css';

	const tableContent = [
		{
			name: 'Ossas',
			color: 'Orange',
			weight: '3kg'
		},
		{
			name: 'Once',
			color: 'White and Orange',
			weight: '2.5kg'
		},
        {
			name: 'Ossas',
			color: 'Orange',
			weight: '3kg'
		},
		{
			name: 'Once',
			color: 'White and Orange',
			weight: '2.5kg'
		},
        {
			name: 'Ossas',
			color: 'Orange',
			weight: '3kg'
		},
		{
			name: 'Once',
			color: 'White and Orange',
			weight: '2.5kg'
		},
        {
			name: 'Ossas',
			color: 'Orange',
			weight: '3kg'
		},
		{
			name: 'Once',
			color: 'White and Orange',
			weight: '2.5kg'
		}
	];
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
	<Title color="white">Size</Title>
	<Table data={tableContent} size="xs" />
    <Table data={tableContent} size="sm" />
    <Table data={tableContent} size="md" />
    <Table data={tableContent} size="lg" />
    <Table data={tableContent} size="xl" />
    <Title color="white">Radius</Title>
    <Table data={tableContent} size="xs" radius="none" />
    <Table data={tableContent} size="xs" radius="sm" />
    <Table data={tableContent} size="xs" radius="md" />
    <Table data={tableContent} size="xs" radius="lg" />
    <Title color="white">Color</Title>
    <Table data={tableContent} size="xs" radius="lg" color="default" />
    <Table data={tableContent} size="xs" radius="lg" color="black" />
    <Table data={tableContent} size="xs" radius="lg" color="white" />
    <Table data={tableContent} size="xs" radius="lg" color="gray" />
    <Table data={tableContent} size="xs" radius="lg" color="primary" />
    <Table data={tableContent} size="xs" radius="lg" color="secondary" />
    <Table data={tableContent} size="xs" radius="lg" color="success" />
    <Table data={tableContent} size="xs" radius="lg" color="warning" />
    <Table data={tableContent} size="xs" radius="lg" color="danger" />
    <Title color="white">Shadow</Title>
    <div class="flex gap-2">
        <Table data={tableContent} size="xs" radius="lg" color="default" shadow={1} />
        <Table data={tableContent} size="xs" radius="lg" color="default" shadow={2} />
        <Table data={tableContent} size="xs" radius="lg" color="default" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Table data={tableContent} size="xs" radius="lg" color="black" shadow={1} />
        <Table data={tableContent} size="xs" radius="lg" color="black" shadow={2} />
        <Table data={tableContent} size="xs" radius="lg" color="black" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Table data={tableContent} size="xs" radius="lg" color="white" shadow={1} />
        <Table data={tableContent} size="xs" radius="lg" color="white" shadow={2} />
        <Table data={tableContent} size="xs" radius="lg" color="white" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Table data={tableContent} size="xs" radius="lg" color="gray" shadow={1} />
        <Table data={tableContent} size="xs" radius="lg" color="gray" shadow={2} />
        <Table data={tableContent} size="xs" radius="lg" color="gray" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Table data={tableContent} size="xs" radius="lg" color="primary" shadow={1} />
        <Table data={tableContent} size="xs" radius="lg" color="primary" shadow={2} />
        <Table data={tableContent} size="xs" radius="lg" color="primary" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Table data={tableContent} size="xs" radius="lg" color="secondary" shadow={1} />
        <Table data={tableContent} size="xs" radius="lg" color="secondary" shadow={2} />
        <Table data={tableContent} size="xs" radius="lg" color="secondary" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Table data={tableContent} size="xs" radius="lg" color="success" shadow={1} />
        <Table data={tableContent} size="xs" radius="lg" color="success" shadow={2} />
        <Table data={tableContent} size="xs" radius="lg" color="success" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Table data={tableContent} size="xs" radius="lg" color="warning" shadow={1} />
        <Table data={tableContent} size="xs" radius="lg" color="warning" shadow={2} />
        <Table data={tableContent} size="xs" radius="lg" color="warning" shadow={3} />
    </div>
    <div class="flex gap-2">
        <Table data={tableContent} size="xs" radius="lg" color="danger" shadow={1} />
        <Table data={tableContent} size="xs" radius="lg" color="danger" shadow={2} />
        <Table data={tableContent} size="xs" radius="lg" color="danger" shadow={3} />
    </div>
</div>

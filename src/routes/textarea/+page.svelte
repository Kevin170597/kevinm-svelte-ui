<script lang="ts">
	import { TextArea, Title } from '$lib';
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
	<Title color="white">Size</Title>
	<TextArea label="Description" size="xs" placeholder="Write in textarea..." />
	<TextArea label="Description" size="sm" placeholder="Write in textarea..." />
	<TextArea label="Description" size="md" placeholder="Write in textarea..." />
	<TextArea label="Description" size="lg" placeholder="Write in textarea..." />
	<TextArea label="Description" size="xl" placeholder="Write in textarea..." />
	<Title color="white">Radius</Title>
	<TextArea label="Description" size="sm" radius="none" placeholder="Write in textarea..." />
	<TextArea label="Description" size="sm" radius="sm" placeholder="Write in textarea..." />
	<TextArea label="Description" size="sm" radius="md" placeholder="Write in textarea..." />
	<TextArea label="Description" size="sm" radius="lg" placeholder="Write in textarea..." />
	<Title color="white">Color</Title>
	<TextArea
		label="Description"
		size="sm"
		radius="lg"
		color="default"
		placeholder="Write in textarea..."
	/>
	<TextArea
		label="Description"
		size="sm"
		radius="lg"
		color="black"
		placeholder="Write in textarea..."
	/>
	<TextArea
		label="Description"
		size="sm"
		radius="lg"
		color="white"
		placeholder="Write in textarea..."
	/>
	<TextArea
		label="Description"
		size="sm"
		radius="lg"
		color="gray"
		placeholder="Write in textarea..."
	/>
	<TextArea
		label="Description"
		size="sm"
		radius="lg"
		color="primary"
		placeholder="Write in textarea..."
	/>
	<TextArea
		label="Description"
		size="sm"
		radius="lg"
		color="secondary"
		placeholder="Write in textarea..."
	/>
	<TextArea
		label="Description"
		size="sm"
		radius="lg"
		color="success"
		placeholder="Write in textarea..."
	/>
	<TextArea
		label="Description"
		size="sm"
		radius="lg"
		color="warning"
		placeholder="Write in textarea..."
	/>
	<TextArea
		label="Description"
		size="sm"
		radius="lg"
		color="danger"
		placeholder="Write in textarea..."
	/>
	<Title color="white">Shadow</Title>
	<div class="flex gap-2">
		<TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="default"
			placeholder="Write in textarea..."
            shadow={1}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="default"
			placeholder="Write in textarea..."
            shadow={2}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="default"
			placeholder="Write in textarea..."
            shadow={3}
		/>
	</div>
    <div class="flex gap-2">
		<TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="black"
			placeholder="Write in textarea..."
            shadow={1}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="black"
			placeholder="Write in textarea..."
            shadow={2}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="black"
			placeholder="Write in textarea..."
            shadow={3}
		/>
	</div>
    <div class="flex gap-2">
		<TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="white"
			placeholder="Write in textarea..."
            shadow={1}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="white"
			placeholder="Write in textarea..."
            shadow={2}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="white"
			placeholder="Write in textarea..."
            shadow={3}
		/>
	</div>
    <div class="flex gap-2">
		<TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="gray"
			placeholder="Write in textarea..."
            shadow={1}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="gray"
			placeholder="Write in textarea..."
            shadow={2}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="gray"
			placeholder="Write in textarea..."
            shadow={3}
		/>
	</div>
    <div class="flex gap-2">
		<TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="primary"
			placeholder="Write in textarea..."
            shadow={1}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="primary"
			placeholder="Write in textarea..."
            shadow={2}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="primary"
			placeholder="Write in textarea..."
            shadow={3}
		/>
	</div>
    <div class="flex gap-2">
		<TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="secondary"
			placeholder="Write in textarea..."
            shadow={1}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="secondary"
			placeholder="Write in textarea..."
            shadow={2}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="secondary"
			placeholder="Write in textarea..."
            shadow={3}
		/>
	</div>
    <div class="flex gap-2">
		<TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="success"
			placeholder="Write in textarea..."
            shadow={1}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="success"
			placeholder="Write in textarea..."
            shadow={2}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="success"
			placeholder="Write in textarea..."
            shadow={3}
		/>
	</div>
    <div class="flex gap-2">
		<TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="warning"
			placeholder="Write in textarea..."
            shadow={1}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="warning"
			placeholder="Write in textarea..."
            shadow={2}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="warning"
			placeholder="Write in textarea..."
            shadow={3}
		/>
	</div>
    <div class="flex gap-2">
		<TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="danger"
			placeholder="Write in textarea..."
            shadow={1}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="danger"
			placeholder="Write in textarea..."
            shadow={2}
		/>
        <TextArea
			label="Description"
			size="sm"
			radius="lg"
			color="danger"
			placeholder="Write in textarea..."
            shadow={3}
		/>
	</div>
</div>

<script lang="ts">
	import { Accordion, Title, Container, Divider } from '$lib';
	import '../../app.css';
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
	<Title color="white">Size</Title>
	<Accordion headTitle="Accordion" size="xs">Content</Accordion>
	<Accordion headTitle="Accordion" size="sm">Content</Accordion>
	<Accordion headTitle="Accordion" size="md">Content</Accordion>
	<Accordion headTitle="Accordion" size="lg">Content</Accordion>
	<Accordion headTitle="Accordion" size="xl">Content</Accordion>
	<Title color="white">Radius</Title>
	<Accordion headTitle="Accordion" size="md" color="default" radius="none">Content</Accordion>
	<Accordion headTitle="Accordion" size="md" color="default" radius="sm">Content</Accordion>
	<Accordion headTitle="Accordion" size="md" color="default" radius="md">Content</Accordion>
	<Accordion headTitle="Accordion" size="md" color="default" radius="lg">Content</Accordion>
	<Title color="white">Color</Title>
	<Accordion headTitle="Accordion" size="md" color="default" radius="lg">Content</Accordion>
	<Accordion headTitle="Accordion" size="md" color="black" radius="lg">Content</Accordion>
	<Accordion headTitle="Accordion" size="md" color="white" radius="lg">Content</Accordion>
	<Accordion headTitle="Accordion" size="md" color="gray" radius="lg">Content</Accordion>
	<Accordion headTitle="Accordion" size="md" color="primary" radius="lg">Content</Accordion>
	<Accordion headTitle="Accordion" size="md" color="secondary" radius="lg">Content</Accordion>
	<Accordion headTitle="Accordion" size="md" color="success" radius="lg">Content</Accordion>
	<Accordion headTitle="Accordion" size="md" color="warning" radius="lg">Content</Accordion>
	<Accordion headTitle="Accordion" size="md" color="danger" radius="lg">Content</Accordion>
	<Title color="white">Shadow</Title>
	<div class="flex items-start gap-2">
		<Accordion headTitle="Accordion" size="md" color="default" radius="lg" shadow={1}>Content</Accordion
		>
		<Accordion headTitle="Accordion" size="md" color="default" radius="lg" shadow={2}>Content</Accordion
		>
		<Accordion headTitle="Accordion" size="md" color="default" radius="lg" shadow={3}>Content</Accordion
		>
	</div>
	<div class="flex items-start gap-2">
		<Accordion headTitle="Accordion" size="md" color="black" radius="lg" shadow={1}>Content</Accordion>
		<Accordion headTitle="Accordion" size="md" color="black" radius="lg" shadow={2}>Content</Accordion>
		<Accordion headTitle="Accordion" size="md" color="black" radius="lg" shadow={3}>Content</Accordion>
	</div>
	<div class="flex items-start gap-2">
		<Accordion headTitle="Accordion" size="md" color="white" radius="lg" shadow={1}>Content</Accordion>
		<Accordion headTitle="Accordion" size="md" color="white" radius="lg" shadow={2}>Content</Accordion>
		<Accordion headTitle="Accordion" size="md" color="white" radius="lg" shadow={3}>Content</Accordion>
	</div>
	<div class="flex items-start gap-2">
		<Accordion headTitle="Accordion" size="md" color="gray" radius="lg" shadow={1}>Content</Accordion>
		<Accordion headTitle="Accordion" size="md" color="gray" radius="lg" shadow={2}>Content</Accordion>
		<Accordion headTitle="Accordion" size="md" color="gray" radius="lg" shadow={3}>Content</Accordion>
	</div>
	<div class="flex items-start gap-2">
		<Accordion headTitle="Accordion" size="md" color="primary" radius="lg" shadow={1}>Content</Accordion
		>
		<Accordion headTitle="Accordion" size="md" color="primary" radius="lg" shadow={2}>Content</Accordion
		>
		<Accordion headTitle="Accordion" size="md" color="primary" radius="lg" shadow={3}>Content</Accordion
		>
	</div>
	<div class="flex items-start gap-2">
		<Accordion headTitle="Accordion" size="md" color="secondary" radius="lg" shadow={1}
			>Content</Accordion
		>
		<Accordion headTitle="Accordion" size="md" color="secondary" radius="lg" shadow={2}
			>Content</Accordion
		>
		<Accordion headTitle="Accordion" size="md" color="secondary" radius="lg" shadow={3}
			>Content</Accordion
		>
	</div>
	<div class="flex items-start gap-2">
		<Accordion headTitle="Accordion" size="md" color="success" radius="lg" shadow={1}>Content</Accordion
		>
		<Accordion headTitle="Accordion" size="md" color="success" radius="lg" shadow={2}>Content</Accordion
		>
		<Accordion headTitle="Accordion" size="md" color="success" radius="lg" shadow={3}>Content</Accordion
		>
	</div>
	<div class="flex items-start gap-2">
		<Accordion headTitle="Accordion" size="md" color="warning" radius="lg" shadow={1}>Content</Accordion
		>
		<Accordion headTitle="Accordion" size="md" color="warning" radius="lg" shadow={2}>Content</Accordion
		>
		<Accordion headTitle="Accordion" size="md" color="warning" radius="lg" shadow={3}>Content</Accordion
		>
	</div>
	<div class="flex items-start gap-2">
		<Accordion headTitle="Accordion" size="md" color="danger" radius="lg" shadow={1}>Content</Accordion>
		<Accordion headTitle="Accordion" size="md" color="danger" radius="lg" shadow={2}>Content</Accordion>
		<Accordion headTitle="Accordion" size="md" color="danger" radius="lg" shadow={3}>Content</Accordion>
	</div>
	<Title color="white">Multiple (Into a Container component)</Title>
	<Container color="default" radius="lg" shadow={2} tailwindClass="w-full">
		<Accordion headTitle="Accordion" size="md" color="default" radius="lg">Content</Accordion>
		<Accordion headTitle="Accordion" size="md" color="default" radius="lg">Content</Accordion>
		<Accordion headTitle="Accordion" size="md" color="default" radius="lg">Content</Accordion>
	</Container>
    <Title color="white">Multiple (With Divider component)</Title>
	<Container color="gray" radius="lg" shadow={2} tailwindClass="w-full">
		<Accordion headTitle="Accordion" size="md" color="gray" radius="lg">Content</Accordion>
        <Divider color="default" />
		<Accordion headTitle="Accordion" size="md" color="gray" radius="lg">Content</Accordion>
        <Divider color="default" />
		<Accordion headTitle="Accordion" size="md" color="gray" radius="lg">Content</Accordion>
	</Container>
    <Container color="secondary" radius="lg" shadow={2} tailwindClass="w-full">
		<Accordion headTitle="Accordion" size="md" color="secondary" radius="lg">Content</Accordion>
        <Divider color="gray" />
		<Accordion headTitle="Accordion" size="md" color="secondary" radius="lg">Content</Accordion>
        <Divider color="default" />
		<Accordion headTitle="Accordion" size="md" color="secondary" radius="lg">Content</Accordion>
	</Container>
</div>

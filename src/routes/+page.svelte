<script lang="ts">
	import {
		Button,
		Container,
		Accordion,
		CodeBlock,
		Breadcrumbs,
		Title,
		Text,
		Link,
		Divider
	} from '$lib/';
	import '../app.css';

	const paths: any = [
		{
			slug: 'Home',
			href: '/'
		},
		{
			slug: 'Products',
			href: '/products'
		},
		{
			slug: 'Instagrapy',
			href: '/products/instagrapy'
		}
	];
</script>

<div class="bg-slate-600 min-h-[100vh] py-4 px-8 flex flex-col gap-2">
	<Title color="white" size="sm">Buttons</Title>
	<Text color="white">Sizes</Text>
	<div class="flex float-start items-start gap-2">
		<Button size="xs" tailwindClass="text-white">size="xs"</Button>
		<Button size="sm" tailwindClass="text-white">size="sm"</Button>
		<Button size="md" tailwindClass="text-white">size="md"</Button>
		<Button size="lg" tailwindClass="text-white">size="lg"</Button>
		<Button size="xl" tailwindClass="text-white">size="xl"</Button>
		<Button size="auto" tailwindClass="text-white">size="auto" (default)</Button>
	</div>
	<Text color="white">Radius</Text>
	<div class="flex float-start items-start gap-2">
		<Button size="auto" radius="none" tailwindClass="text-white">radius="none" (default)</Button>
		<Button size="auto" radius="sm" tailwindClass="text-white">radius="sm"</Button>
		<Button size="auto" radius="md" tailwindClass="text-white">radius="md"</Button>
		<Button size="auto" radius="lg" tailwindClass="text-white">radius="lg"</Button>
		<Button size="auto" radius="full" tailwindClass="text-white">radius="full"</Button>
	</div>
	<Text color="white">Color</Text>
	<div class="flex flex-wrap float-start items-start gap-2">
		<Button size="auto" radius="none" color="default" tailwindClass="text-white"
			>color="default" (default)</Button
		>
		<Button size="auto" radius="none" color="none" tailwindClass="text-white">color="none"</Button>
		<Button size="auto" radius="none" color="white" tailwindClass="text-black">color="white"</Button
		>
		<Button size="auto" radius="none" color="black" tailwindClass="text-white">color="black"</Button
		>
		<Button size="auto" radius="none" color="gray" tailwindClass="text-white">color="gray"</Button>
		<Button size="auto" radius="none" color="primary" tailwindClass="text-white"
			>color="primary"</Button
		>
		<Button size="auto" radius="none" color="secondary" tailwindClass="text-white"
			>color="secondary"</Button
		>
		<Button size="auto" radius="none" color="success" tailwindClass="text-white"
			>color="success"</Button
		>
		<Button size="auto" radius="none" color="warning" tailwindClass="text-white"
			>color="warning"</Button
		>
		<Button size="auto" radius="none" color="danger" tailwindClass="text-white"
			>color="danger"</Button
		>
	</div>
	<Text color="white">Variant</Text>
	<div class="flex flex-wrap float-start items-start gap-2">
		<Button size="auto" radius="none" color="default" variant="solid" tailwindClass="text-white">
			variant="solid" (default)
		</Button>
		<Button size="auto" radius="none" color="default" variant="bordered" tailwindClass="text-white">
			variant="bordered" (default)
		</Button>
		<Button size="auto" radius="none" color="default" variant="shadow" tailwindClass="text-white">
			variant="shadow" (default)
		</Button>
	</div>

	<Title color="white" size="sm">Text</Title>
	<Text color="white">Sizes</Text>
	<div class="flex flex-wrap float-start items-start gap-2">
		<Text size="sm">size="xs"</Text>
		<Text size="sm">size="sm"</Text>
		<Text size="md">size="md"</Text>
		<Text size="lg">size="lg"</Text>
		<Text size="xl">size="xl"</Text>
		<Text size="auto">size="auto" (default)</Text>
	</div>
	<Text color="white">Color</Text>
	<div class="flex flex-wrap float-start items-start gap-2">
		<Text color="default">color="default" (default)</Text>
		<Text color="white">color="white"</Text>
		<Text color="black">color="black"</Text>
		<Text color="gray">color="gray"</Text>
		<Text color="primary">color="primary"</Text>
		<Text color="secondary">color="secondary"</Text>
		<Text color="success">color="success"</Text>
		<Text color="warning">color="warning"</Text>
		<Text color="danger">color="danger"</Text>
	</div>

	<Title color="white" size="sm">Title</Title>
	<Text color="white">Sizes</Text>
	<div class="flex flex-wrap float-start items-start gap-2">
		<Title size="sm">size="xs"</Title>
		<Title size="sm">size="sm"</Title>
		<Title size="md">size="md"</Title>
		<Title size="lg">size="lg"</Title>
		<Title size="xl">size="xl"</Title>
		<Title size="auto">size="auto" (default)</Title>
	</div>
	<Text color="white">Color</Text>
	<div class="flex flex-wrap float-start items-start gap-2">
		<Title color="default">color="default" (default)</Title>
		<Title color="white">color="white"</Title>
		<Title color="black">color="black"</Title>
		<Title color="gray">color="gray"</Title>
		<Title color="primary">color="primary"</Title>
		<Title color="secondary">color="secondary"</Title>
		<Title color="success">color="success"</Title>
		<Title color="warning">color="warning"</Title>
		<Title color="danger">color="danger"</Title>
	</div>

	<Title color="white" size="sm">Link</Title>
	<Text color="white">Sizes</Text>
	<div class="flex flex-wrap float-start items-start gap-2">
		<Link size="xs">size="xs"</Link>
		<Link size="sm">size="sm"</Link>
		<Link size="md">size="md"</Link>
		<Link size="lg">size="lg"</Link>
		<Link size="xl">size="xl"</Link>
		<Link size="auto">size="auto" (default)</Link>
	</div>
	<Text color="white">Color</Text>
	<div class="flex flex-wrap float-start items-start gap-2">
		<Link color="default">color="default" (default)</Link>
		<Link color="white">color="white"</Link>
		<Link color="black">color="black"</Link>
		<Link color="gray">color="gray"</Link>
		<Link color="primary">color="primary"</Link>
		<Link color="secondary">color="secondary"</Link>
		<Link color="success">color="success"</Link>
		<Link color="warning">color="warning"</Link>
		<Link color="danger">color="danger"</Link>
	</div>
	<Text color="white">Underline</Text>
	<div class="flex flex-wrap float-start items-start gap-2">
		<Link underline="none">underline="none" (default)</Link>
		<Link underline="always">underline="always"</Link>
		<Link underline="hover">underline="hover"</Link>
	</div>

	<Title color="white" size="sm">Divider</Title>
	<Text color="white">Color</Text>
	<Text color="default">color="default" (default)</Text>
	<Divider color="default" />
	<Text color="black">color="black"</Text>
	<Divider color="black" />
	<Text color="white">color="white"</Text>
	<Divider color="white" />
	<Text color="gray">color="gray"</Text>
	<Divider color="gray" />
	<Text color="primary">color="primary"</Text>
	<Divider color="primary" />
	<Text color="secondary">color="secondary"</Text>
	<Divider color="secondary" />
	<Text color="success">color="success"</Text>
	<Divider color="success" />
	<Text color="warning">color="warning"</Text>
	<Divider color="warning" />
	<Text color="danger">color="danger"</Text>
	<Divider color="danger" />

	<Title color="white" size="sm">Breadcrumbs</Title>
	<Text color="white">Sizes</Text>
	<Breadcrumbs size="auto" {paths} />
	<Breadcrumbs size="xs" {paths} />
	<Breadcrumbs size="sm" {paths} />
	<Breadcrumbs size="md" {paths} />
	<Breadcrumbs size="lg" {paths} />
	<Breadcrumbs size="xl" {paths} />
	<Text color="white">Radius</Text>
	<Breadcrumbs radius="none" {paths} />
	<Breadcrumbs radius="sm" {paths} />
	<Breadcrumbs radius="md" {paths} />
	<Breadcrumbs radius="lg" {paths} />
	<Breadcrumbs radius="full" {paths} />
	<Text color="white">Color</Text>
	<Breadcrumbs color="default" {paths} />
	<Breadcrumbs color="white" activeTextColor="black" {paths} />
	<Breadcrumbs color="black" {paths} />
	<Breadcrumbs color="gray" textColor="default" activeTextColor="black" {paths} />
	<Breadcrumbs color="primary" textColor="default" {paths} />
	<Breadcrumbs color="secondary" textColor="default" {paths} />
	<Breadcrumbs color="success" textColor="default" {paths} />
	<Breadcrumbs color="warning" textColor="default" {paths} />
	<Breadcrumbs color="danger" textColor="default" {paths} />
	<Text color="white">Variant</Text>
	<Breadcrumbs variant="solid" {paths} />
	<Breadcrumbs variant="bordered" {paths} />
	<Breadcrumbs variant="shadow" {paths} />
</div>

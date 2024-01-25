<script lang="ts">
	import { SideBar, Title } from '$lib';

    let linksArray = [
		{
			label: 'Link 1',
			href: '/',
			icon: 'grid',
			activePath: '/'
		},
		{
			label: 'Link 2',
			href: '/',
			icon: 'clock',
			activePath: '/side-bar'
		},
		{
			label: 'Group 1',
			sublinks: [
				{
					label: 'Group Link 1',
					href: '/side-bar',
					icon: 'clock',
					activePath: '/'
				},
				{
					label: 'Group Link 2',
					href: '/',
					icon: 'clock',
					activePath: '/'
				}
			]
		},
		{
			label: 'Link 3',
			href: '/',
			icon: 'picture',
			activePath: '/'
		}
	];
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
	<Title color="white">Size</Title>
	<SideBar links={linksArray} size="xs" color="default" />
	<SideBar size="sm" color="default" />
	<SideBar size="md" color="default" />
	<SideBar size="lg" color="default" />
	<SideBar size="xl" color="default" />
	<Title color="white">Radius</Title>
	<SideBar size="sm" color="default" radius="none" />
    <SideBar size="sm" color="default" radius="sm" />
    <SideBar size="sm" color="default" radius="md" />
    <SideBar size="sm" color="default" radius="lg" />
    <Title color="white">Color</Title>
    <SideBar size="sm" color="default" radius="lg" />
    <SideBar size="sm" color="black" radius="lg" />
    <SideBar size="sm" color="white" radius="lg" />
    <SideBar size="sm" color="gray" radius="lg" />
    <SideBar size="sm" color="primary" radius="lg" />
    <SideBar size="sm" color="secondary" radius="lg" />
    <SideBar size="sm" color="success" radius="lg" />
    <SideBar size="sm" color="warning" radius="lg" />
    <SideBar size="sm" color="danger" radius="lg" />
    <Title color="white">Shadow</Title>
    <div class="flex gap-2 items-start">
        <SideBar size="sm" color="default" radius="lg" shadow={1} />
        <SideBar size="sm" color="default" radius="lg" shadow={2} />
        <SideBar size="sm" color="default" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2 items-start">
        <SideBar size="sm" color="black" radius="lg" shadow={1} />
        <SideBar size="sm" color="black" radius="lg" shadow={2} />
        <SideBar size="sm" color="black" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2 items-start">
        <SideBar size="sm" color="white" radius="lg" shadow={1} />
        <SideBar size="sm" color="white" radius="lg" shadow={2} />
        <SideBar size="sm" color="white" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2 items-start">
        <SideBar size="sm" color="gray" radius="lg" shadow={1} />
        <SideBar size="sm" color="gray" radius="lg" shadow={2} />
        <SideBar size="sm" color="gray" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2 items-start">
        <SideBar size="sm" color="primary" radius="lg" shadow={1} />
        <SideBar size="sm" color="primary" radius="lg" shadow={2} />
        <SideBar size="sm" color="primary" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2 items-start">
        <SideBar size="sm" color="secondary" radius="lg" shadow={1} />
        <SideBar size="sm" color="secondary" radius="lg" shadow={2} />
        <SideBar size="sm" color="secondary" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2 items-start">
        <SideBar size="sm" color="success" radius="lg" shadow={1} />
        <SideBar size="sm" color="success" radius="lg" shadow={2} />
        <SideBar size="sm" color="success" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2 items-start">
        <SideBar size="sm" color="warning" radius="lg" shadow={1} />
        <SideBar size="sm" color="warning" radius="lg" shadow={2} />
        <SideBar size="sm" color="warning" radius="lg" shadow={3} />
    </div>
    <div class="flex gap-2 items-start">
        <SideBar size="sm" color="danger" radius="lg" shadow={1} />
        <SideBar size="sm" color="danger" radius="lg" shadow={2} />
        <SideBar size="sm" color="danger" radius="lg" shadow={3} />
    </div>
</div>

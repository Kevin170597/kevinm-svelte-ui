<script lang="ts">
	import { BottomPagination, Title } from '$lib';
	import '../../app.css';
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
	<Title color="white">Size</Title>
	<BottomPagination size="xs" nextHref="/" prevHref="/" />
	<BottomPagination size="sm" nextHref="/" prevHref="/" />
	<BottomPagination size="md" nextHref="/" prevHref="/" />
	<BottomPagination size="lg" nextHref="/" prevHref="/" />
	<BottomPagination size="xl" nextHref="/" prevHref="/" />
	<Title color="white">Radius</Title>
	<BottomPagination size="sm" radius="none" nextHref="/" prevHref="/" />
	<BottomPagination size="sm" radius="sm" nextHref="/" prevHref="/" />
	<BottomPagination size="sm" radius="md" nextHref="/" prevHref="/" />
	<BottomPagination size="sm" radius="lg" nextHref="/" prevHref="/" />
	<BottomPagination size="sm" radius="full" nextHref="/" prevHref="/" />
	<Title color="white">Color</Title>
	<BottomPagination size="sm" radius="lg" color="default" nextHref="/" prevHref="/" />
	<BottomPagination size="sm" radius="lg" color="black" nextHref="/" prevHref="/" />
	<BottomPagination size="sm" radius="lg" color="white" nextHref="/" prevHref="/" />
	<BottomPagination size="sm" radius="lg" color="gray" nextHref="/" prevHref="/" />
	<BottomPagination size="sm" radius="lg" color="primary" nextHref="/" prevHref="/" />
	<BottomPagination size="sm" radius="lg" color="secondary" nextHref="/" prevHref="/" />
	<BottomPagination size="sm" radius="lg" color="success" nextHref="/" prevHref="/" />
	<BottomPagination size="sm" radius="lg" color="warning" nextHref="/" prevHref="/" />
	<BottomPagination size="sm" radius="lg" color="danger" nextHref="/" prevHref="/" />
	<Title color="white">Shadow</Title>
	<div class="flex gap-2">
		<BottomPagination size="sm" radius="lg" color="default" shadow={1} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="default" shadow={2} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="default" shadow={3} nextHref="/" prevHref="/" />
	</div>
	<div class="flex gap-2">
		<BottomPagination size="sm" radius="lg" color="black" shadow={1} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="black" shadow={2} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="black" shadow={3} nextHref="/" prevHref="/" />
	</div>
	<div class="flex gap-2">
		<BottomPagination size="sm" radius="lg" color="white" shadow={1} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="white" shadow={2} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="white" shadow={3} nextHref="/" prevHref="/" />
	</div>
	<div class="flex gap-2">
		<BottomPagination size="sm" radius="lg" color="gray" shadow={1} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="gray" shadow={2} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="gray" shadow={3} nextHref="/" prevHref="/" />
	</div>
	<div class="flex gap-2">
		<BottomPagination size="sm" radius="lg" color="primary" shadow={1} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="primary" shadow={2} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="primary" shadow={3} nextHref="/" prevHref="/" />
	</div>
	<div class="flex gap-2">
		<BottomPagination
			size="sm"
			radius="lg"
			color="secondary"
			shadow={1}
			nextHref="/"
			prevHref="/"
		/>
		<BottomPagination
			size="sm"
			radius="lg"
			color="secondary"
			shadow={2}
			nextHref="/"
			prevHref="/"
		/>
		<BottomPagination
			size="sm"
			radius="lg"
			color="secondary"
			shadow={3}
			nextHref="/"
			prevHref="/"
		/>
	</div>
	<div class="flex gap-2">
		<BottomPagination size="sm" radius="lg" color="success" shadow={1} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="success" shadow={2} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="success" shadow={3} nextHref="/" prevHref="/" />
	</div>
	<div class="flex gap-2">
		<BottomPagination size="sm" radius="lg" color="warning" shadow={1} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="warning" shadow={2} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="warning" shadow={3} nextHref="/" prevHref="/" />
	</div>
	<div class="flex gap-2">
		<BottomPagination size="sm" radius="lg" color="danger" shadow={1} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="danger" shadow={2} nextHref="/" prevHref="/" />
		<BottomPagination size="sm" radius="lg" color="danger" shadow={3} nextHref="/" prevHref="/" />
	</div>
	<Title color="white">Buttons</Title>
	<div class="flex gap-2">
		<BottomPagination
			size="sm"
			radius="lg"
			color="default"
			shadow={1}
			buttonsRadius="lg"
			buttonsColor="primary"
			buttonShadow={1}
			nextHref="/"
			prevHref="/"
		/>
		<BottomPagination
			size="sm"
			radius="lg"
			color="white"
			shadow={3}
			buttonsRadius="lg"
			buttonsColor="secondary"
			buttonShadow={3}
			nextHref="/"
			prevHref="/"
		/>
		<BottomPagination
			size="sm"
			radius="lg"
			color="primary"
			shadow={2}
			buttonsRadius="lg"
			buttonsColor="white"
			buttonShadow={2}
			nextHref="/"
			prevHref="/"
		/>
	</div>
</div>

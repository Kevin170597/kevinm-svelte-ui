<script lang="ts">
	import { Switch, Title } from '$lib';
</script>

<div class="min-h-[100vh] bg-[#000] p-8 flex flex-col gap-2">
	<Title color="white">Radius</Title>
	<Switch radius="none" />
	<Switch radius="sm" />
	<Switch radius="md" />
	<Switch radius="lg" />
	<Switch radius="full" />
	<Title color="white">Color</Title>
	<Switch radius="full" color="default" />
	<Switch radius="full" color="black" />
	<Switch radius="full" color="gray" />
	<Switch radius="full" color="primary" />
	<Switch radius="full" color="secondary" />
	<Switch radius="full" color="success" />
	<Switch radius="full" color="warning" />
	<Switch radius="full" color="danger" />
</div>

<script lang="ts">
	import { Container, Title, Divider, Text } from '../ui';

	export let { title, content, footer, id } = {
		title: null as string | null,
		content: null as string | null,
		footer: null as string | null,
		id: null as string | null
	}
</script>

<Container {id} variant="solid" color="default" radius="lg">
	{#if title}
		<Title size="xs" tailwindClass="pt-3 pb-2 px-4">{title}</Title>
	{/if}
	{#if title && content}
		<Divider />
	{/if}
	{#if content}
		<Text color="gray" size="md" tailwindClass="pt-1 pb-4 px-4">
			{content}
		</Text>
	{/if}
    {#if content && footer}
		<Divider />
	{/if}
    {#if footer}
		<Text color="gray" size="md" tailwindClass="pt-1 pb-4 px-4">
			{footer}
		</Text>
	{/if}
</Container>

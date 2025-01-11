<script lang="ts">
	import '../app.css';
	import { FlexV2 as Flex, TitleV2 as Title } from '$lib';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="bg-gray-700 min-h-[100vh]">
	<div class="flex gap-4 p-0">
        <div class="w-[15%] p-4 flex flex-col gap-4">
            <Title s={{ color: "white", size: "lg" }}>SvelteKev</Title>
            <a href="/v2/button" class="text-white">Button</a>
			<a href="/v2/input" class="text-white">Input</a>
			<a href="/v2/flex" class="text-white">Flex</a>
			<a href="/v2/grid" class="text-white">Grid</a>
			<a href="/v2/text" class="text-white">Text</a>
			<a href="/v2/title" class="text-white">Title</a>
        </div>
		<div class="w-[85%]">
            {@render children?.()}
        </div>
	</div>
</div>

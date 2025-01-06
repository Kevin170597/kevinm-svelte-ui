<!-- @migration-task Error while migrating Svelte code: Encountered an export declaration pattern that is not supported for automigration. -->
<script lang="ts">
	import type { Radius } from '../types';
	import { setRadius } from "../helpers"

	export let { src, width, height, alt, radius, id, tailwindClass } = {
		src: '' as string,
		width: '100%' as string,
		height: null as string | null,
		alt: 'image' as string,
		radius: 'none' as Radius,
		id: null as string | null,
		tailwindClass: '' as string
	};
</script>

<img
	{id}
	class={`${setRadius(radius)} object-cover ${tailwindClass}`}
	style={`width: ${width}; height: ${height ? height : 'fit-content'};`}
	{src}
	{alt}
/>

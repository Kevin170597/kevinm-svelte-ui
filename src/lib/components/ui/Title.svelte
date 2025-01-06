<!-- @migration-task Error while migrating Svelte code: Encountered an export declaration pattern that is not supported for automigration. -->
<script lang="ts">
	import type { Size, Color } from "../types";
	import { setTitleSize, setTextColor } from "../helpers"

	export let { size, color, tailwindClass, id } = {
		size: 'auto' as Size,
		color: 'default' as Color,
		tailwindClass: '' as string,
		id: '' as string
	};
</script>

<h1 {id} class={`${setTextColor(color)} ${setTitleSize(size)} ${tailwindClass}`}>
	<slot />
</h1>

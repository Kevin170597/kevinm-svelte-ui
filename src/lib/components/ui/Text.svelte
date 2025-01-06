<!-- @migration-task Error while migrating Svelte code: Encountered an export declaration pattern that is not supported for automigration. -->
<script lang="ts">
	import type { Size, Color } from "../types";
	import { setSize, setTextColor } from "../helpers"
	
	export let { size, color, tailwindClass, id } = {
		size: 'auto' as Size,
		color: 'black' as Color,
		tailwindClass: '' as string,
		id: null as string | null
	};
</script>

<p {id} class={`${setSize(size)} ${setTextColor(color)} ${tailwindClass}`}>
	<slot />
</p>

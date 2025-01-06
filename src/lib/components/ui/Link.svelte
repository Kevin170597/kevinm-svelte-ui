<!-- @migration-task Error while migrating Svelte code: Encountered an export declaration pattern that is not supported for automigration. -->
<script lang="ts">
	import type { Size, Color, Underline } from '../types';
	import { setSize, setUnderline, setTextColor } from '../helpers';

	export let { href, color, underline, size, target, id, tailwindClass } = {
		href: '/' as string,
		color: 'default' as Color,
		underline: 'none' as Underline,
		size: 'auto' as Size,
		target: '' as string | '_blank',
		id: null as string | null,
		tailwindClass: '' as string
	};
</script>

<a
	{href}
	{target}
	{id}
	class={`${setTextColor(color)} ${setUnderline(underline)} ${setSize(size)} ${tailwindClass}`}
>
	<slot />
</a>

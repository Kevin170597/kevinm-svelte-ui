<script lang="ts">
	import type { Radius, Color, Variant, Size } from '../types.js';
	import { setShadow, setSize, setRadius, setBgColor } from '../helpers';

	export let { radius, color, variant, tailwindClass, size, id, shadow } = {
		radius: 'none' as Radius,
		color: 'default' as Color,
		variant: 'solid' as Variant,
		tailwindClass: '' as string,
		size: 'auto' as Size,
		id: null as null | string,
		shadow: 0 as 0 | 1 | 2 | 3
	};
</script>

<div
	{id}
	class="
	{setBgColor(color)}
	{setRadius(radius)} 
	{setShadow(shadow, color)} 
	{setSize(size)} 
	w-fit
	{tailwindClass}"
>
	<slot />
</div>

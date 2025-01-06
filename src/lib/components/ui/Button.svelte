<!-- @migration-task Error while migrating Svelte code: Encountered an export declaration pattern that is not supported for automigration. -->
<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import type { Radius, Size, Color } from '../types';
	import {
		setRadius,
		setSize,
		setShadow,
		setBgColor,
		setHoverColor,
		setTextColorOverBackground
	} from '../helpers';

	export let { radius, size, color, tailwindClass, onClick, id, type, shadow } = {
		radius: 'none' as Radius,
		size: 'auto' as Size,
		color: 'default' as Color,
		tailwindClass: '' as string,
		onClick: null as null | MouseEventHandler<HTMLButtonElement>,
		id: null as null | string,
		type: 'button' as 'button' | 'submit',
		shadow: 0 as 0 | 1 | 2 | 3
	};
</script>

<button
	{type}
	{id}
	on:click={onClick}
	class={`
	${setSize(size)} 
	${setShadow(shadow, color)}
	${setBgColor(color)} 
	${setTextColorOverBackground(color)}
	${setRadius(radius)}
	${tailwindClass} 
	${setHoverColor(color)}
	transition-background-color duration-300
	px-3 py-2 w-fit`}
>
	<slot />
</button>

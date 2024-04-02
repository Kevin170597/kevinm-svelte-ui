<script lang="ts">
	import { Container } from '../ui';
	import type { Color, Radius, Size } from '../types';
	import { setBgColor, setTextColorOverBackground } from '../helpers';

	export let { name, value, placeholder, color, radius, size, shadow, options, tailwindClass } = {
		name: '' as string,
		value: '' as string | number | null | undefined | any,
		placeholder: 'Placeholder' as string,
		color: 'default' as Color,
		radius: 'none' as Radius,
		size: 'md' as Size,
		shadow: 0 as 0 | 1 | 2 | 3,
		options: [
			{ value: 'Option 1', label: '1' },
			{ value: 'Option 2', label: '2' }
		] as { value: string; label: string }[],
		tailwindClass: '' as string
	};
</script>

<Container {color} {radius} {size} {shadow} tailwindClass="p-3 {tailwindClass}">
	<select
		{name}
		bind:value
		class={`${setBgColor(color)} 
        ${setTextColorOverBackground(color)} 
        border-none pr-3 cursor-pointer focus:outline-none w-full`}
	>
		<option value="" disabled selected>{placeholder}</option>
		{#each options as option}
			<option value={option.value}>{option.label}</option>
		{/each}
	</select>
</Container>

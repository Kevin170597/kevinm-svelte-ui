<!-- @migration-task Error while migrating Svelte code: Encountered an export declaration pattern that is not supported for automigration. -->
<script lang="ts">
	import { Container } from '../ui';
	import autosize from 'autosize';
	import type { Variant, Color, Radius, Size } from '../types';
	import { setTextColorOverBackground } from '../helpers';

	export let {
		name,
		value,
		label,
		placeholder,
		variant,
		color,
		radius,
		size,
		shadow,
		tailwindClass,
		required,
		type
	} = {
		name: '' as string,
		value: null as string | number | null | undefined | any,
		label: null as string | null,
		placeholder: 'Placeholder' as string,
		variant: 'solid' as Variant,
		color: 'default' as Color,
		radius: 'none' as Radius,
		size: 'md' as Size,
		shadow: 0 as 0 | 1 | 2 | 3,
		tailwindClass: '' as string,
		required: false as boolean,
		type: 'text' as 'text' | 'password'
	};

	const setPlaceHolderColor = (color: Color): string => {
		const fontColors: Record<Color, string> = {
			none: 'placeholder:text-none',
			black: 'placeholder:text-[#999999]',
			white: 'placeholder:text-[#666666]',
			gray: 'placeholder:text-[#cccccc]',
			default: 'placeholder:text-[#999999]',
			primary: 'placeholder:text-[#99c6f9]',
			secondary: 'placeholder:text-[#d4bbed]',
			success: 'placeholder:text-[#d1f4e0]',
			warning: 'placeholder:text-[#62420e]',
			danger: 'placeholder:text-[#fdd0df]'
		};
		return fontColors[color];
	};

	const autosizeAction = (node: any) => {
		autosize(node);

		return {
			destroy() {
				autosize.destroy(node);
			}
		};
	};
</script>

<Container
	{color}
	{radius}
	{variant}
	{size}
	{shadow}
	tailwindClass="py-2 px-3 hover:cursor-text flex {label ? 'flex-col' : ''} gap-1 {tailwindClass}"
>
	{#if label}
		<div class="flex gap-1">
			<label class={setTextColorOverBackground(color)} for="input">
				{label}
			</label>
			{#if required}
				<p class="text-red-800">*</p>
			{/if}
		</div>
	{/if}
	<textarea
		{name}
		use:autosizeAction
		bind:value
		{placeholder}
		class="bg-inherit focus:outline-none {setPlaceHolderColor(color)} {setTextColorOverBackground(
			color
		)}"
	/>
	{#if !label && required}
		<p class="text-red-800">*</p>
	{/if}
</Container>

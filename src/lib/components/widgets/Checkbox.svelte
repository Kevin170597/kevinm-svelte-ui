<script lang="ts">
	import { Text } from '../ui';
    import type { Radius, Color, Size } from '../types';
    import { setRadius, setBgColor } from '../helpers';

	export let { checked, radius, color, size, label, labelColor } = {
		checked: false as boolean,
        radius: 'lg' as Radius,
        color: 'primary' as Color,
        size: 'md' as Size,
        label: 'Check' as string,
        labelColor: 'white' as Color
	};
</script>

<div class="h-[25px] flex items-center w-fit">
	<label class="container h-6 w-6 pl-8 block relative cursor-pointer">
		<input type="checkbox" class="absolute opacity-0 cursor-pointer h- w-0" bind:checked />
		<span
			class="checkmark {setRadius(radius)} absolute transition-colors duration-500 top-0 left-0
            h-6 w-6 after:content-['']
            {checked ? setBgColor(color) : 'bg-inherit'}
            {checked ? 'border-0' : 'border-2 border-solid border-[#454545]'}"
		>
		</span>
	</label>
	<Text color={labelColor} {size}>{label}</Text>
</div>

<style>
	.container {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
	}
	.checkmark:after {
		position: absolute;
		display: none;
	}
	.container input:checked ~ .checkmark:after {
		display: block;
	}
	.container .checkmark:after {
		left: 40%;
		top: 6px;
		width: 20%;
		height: 40%;
		border: solid white;
		border-width: 0 3px 3px 0;
		-webkit-transform: rotate(45deg);
		-ms-transform: rotate(45deg);
		transform: rotate(45deg);
	}
</style>

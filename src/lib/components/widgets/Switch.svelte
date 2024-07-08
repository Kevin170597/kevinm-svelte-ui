<script lang="ts">
	import { Container } from '../ui';
	import type { Color, Radius } from '../types';
	import { setBgColor, setRadius } from '../helpers';

	export let { shadow, color, radius, checked } = {
		shadow: 0 as 0 | 1 | 2 | 3,
		color: 'default' as Color,
		radius: 'full' as Radius,
		checked: true as boolean
	};

	export let onToggleOn: () => void = () => {};
	export let onToggleOff: () => void = () => {};

	const setRadiusBefore = (radius: Radius) => {
		const radiusMap = {
			full: 'before:rounded-full',
			sm: 'before:rounded-sm',
			md: 'before:rounded-md',
			lg: 'before:rounded-lg',
			none: 'before:rounded-none'
		};
		return radiusMap[radius];
	};

	const handleChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		if (target.checked) {
			onToggleOn();
		} else {
			onToggleOff();
		}
	};
</script>

<Container {radius} color={checked ? color : 'default'} {shadow}>
	<label class="relative inline-block w-[60px] h-[30px]">
		<input class="opacity-0 w-0 h-0" type="checkbox" bind:checked on:change={handleChange} />
		<span
			class="slider {checked ? setBgColor(color) : setBgColor('default')} 
            absolute cursor-pointer top-0 left-0 right-0 bottom-0 {setRadius(radius)}
            before:absolute before:content-[''] before:w-[22px] before:h-[22px] before:left-1 before:bottom-1
            before:bg-white {setRadiusBefore(radius)} before:transition-all"
		/>
	</label>
</Container>

<style>
	input:checked + .slider {
		transition: background-color 0.5s;
	}
	input:checked + .slider:before {
		transform: translateX(30px);
	}
</style>

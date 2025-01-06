<script lang="ts">
	let value: string = $state('0');

	const handleChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		value = target.value;
	};
</script>

<input class="" type="range" bind:value min="0" max="6" step="1" oninput={handleChange} />
<p>Selected value: {value}</p>

<style>
	input {
		height: 80px;
		-webkit-appearance: none;
		width: 30%;
	}
	input[type='range']::-webkit-slider-runnable-track {
		height: 12px;
		cursor: pointer;
		background: #0070f0;
		border-radius: 6px;
	}
	input[type='range']::-webkit-slider-thumb {
		height: 25px;
		width: 25px;
		border: solid 3px #0070f0;
		border-radius: 50px;
		background: #000000;
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -7px;
	}
	input[type='range']:focus::-webkit-slider-runnable-track {
		background: #0070f0;
	}
</style>

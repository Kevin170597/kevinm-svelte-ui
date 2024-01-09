<script lang="ts">
	import { Button, Text, Icon, CodeBlock } from '$lib/';
	import { onMount } from 'svelte';
	import '../../app.css';

	let darkThemeBg = true;

	let radius = 'none';
	let size = 'auto';
	let color = 'default';
	let variant = 'solid';
	let textColor = 'default';

	$: code =`<Button
    radius={'${radius}'}
    size={'${size}'}
    color={'${color}'}
    variant={'${variant}'}
>
    <Text textColor={'${textColor}'}>
            Button
        </Text>    
</Button>`;

</script>

<div class="bg-slate-600 min-h-[100vh] py-4 px-8 flex gap-4">
	<div class="w-1/3">
		<CodeBlock lang="ts" code={code} />
	</div>
	<div
		class={`${
			darkThemeBg ? 'bg-gray-900' : 'bg-slate-300'
		} w-1/3 relative flex justify-center items-center rounded-xl`}
	>
		<Button {radius} {size} {color} {variant} {textColor}>
			<Text color={textColor}>Button</Text>
		</Button>
		<Button
			onClick={() => (darkThemeBg = !darkThemeBg)}
			radius="full"
			size="md"
			tailwindClass="absolute top-4 right-6"
		>
			<Icon iconName="arrowDown" />
		</Button>
	</div>
	<div>
		<Text color="white">Radius</Text>
		<select bind:value={radius} name="" id="">
			<option value="none">none (default)</option>
			<option value="sm">sm</option>
			<option value="md">md</option>
			<option value="lg">lg</option>
			<option value="full">full</option>
		</select>
		<Text color="white">Size</Text>
		<select bind:value={size} name="" id="">
			<option value="auto">auto (default)</option>
			<option value="xs">xs</option>
			<option value="sm">sm</option>
			<option value="md">md</option>
			<option value="lg">lg</option>
			<option value="xl">xl</option>
		</select>
		<Text color="white">Color</Text>
		<select bind:value={color} name="" id="">
			<option value="default">default (default)</option>
			<option value="white">white</option>
			<option value="black">black</option>
			<option value="gray">gray</option>
			<option value="primary">primary</option>
			<option value="secondary">secondary</option>
			<option value="success">success</option>
			<option value="warning">warning</option>
			<option value="danger">danger</option>
		</select>
		<Text color="white">Variant</Text>
		<select bind:value={variant} name="" id="">
			<option value="solid">solid (default)</option>
			<option value="bordered">bordered</option>
			<option value="shadow">shadow</option>
		</select>
		<Text color="white">Text Color</Text>
		<select bind:value={textColor} name="" id="">
			<option value="default">default (default)</option>
			<option value="white">white</option>
			<option value="black">black</option>
			<option value="gray">gray</option>
			<option value="primary">primary</option>
			<option value="secondary">secondary</option>
			<option value="success">success</option>
			<option value="warning">warning</option>
			<option value="danger">danger</option>
		</select>
	</div>
</div>

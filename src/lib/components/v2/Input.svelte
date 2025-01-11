<script lang="ts">
	import { Flex, Text } from '.';

	type Color =
		| 'transparent'
		| 'white'
		| 'black'
		| 'slate'
		| 'zinc'
		| 'gray'
		| 'neutral'
		| 'stone'
		| 'red'
		| 'orange'
		| 'amber'
		| 'yellow'
		| 'lime'
		| 'green'
		| 'emerald'
		| 'teal'
		| 'cyan'
		| 'sky'
		| 'blue'
		| 'indigo'
		| 'violet'
		| 'purple'
		| 'fuchsia'
		| 'pink'
		| 'rose';

	type InputType = 'text' | 'email' | 'password' | 'number';

	interface Style {
		color?: Color;
		colorLevel?: 1 | 2 | 3 | 4 | 5 | 6;
		size?: 'sm' | 'md' | 'lg' | 'xl';
	}

	interface InputConfig {
		label?: string;
		placeholder?: string;
		name?: string;
		id?: string;
		type?: InputType;
		simbol?: string;
	}

	let {
		value = $bindable(),
		c,
		s,
		class: clss
	}: {
		type?: 'text' | 'email' | 'password' | 'number';
		value?: string | number;
		c?: InputConfig;
		s?: Style;
		class?: string;
	} = $props();
</script>

<Flex
	s={{
		color: s?.color ? s.color : 'white',
		colorLevel: s?.colorLevel ? s.colorLevel : 3,
		direction: 'col',
		gap: 2
	}}
>
	<Text s={{ bold: true, size: s?.size ? s.size : 'md' }}>{c?.label}</Text>
	<div class="flex items-center">
		{#if c?.simbol}
			<Text s={{ size: s?.size ? s.size : 'md' }}>{c.simbol}</Text>
		{/if}
		<input
			class="w-full bg-transparent outline-none p-2 inputsize{s?.size ? s.size : 'md'} 
			placeholder{s?.color ? s.color : 'white'}{s?.colorLevel ? s.colorLevel : 3}
            {clss}"
			type={c?.type ? c.type : 'text'}
			name={c?.name ? c.name : ''}
			id={c?.id ? c.id : ''}
			placeholder={c?.placeholder ? c.placeholder : ''}
			bind:value
		/>
	</div>
</Flex>

<style lang="postcss">
	.inputsizesm {
		@apply text-[12px];
	}
	.inputsizemd {
		@apply text-[14px];
	}
	.inputsizelg {
		@apply text-[16px];
	}
	.inputsizexl {
		@apply text-[18px];
	}

	.placeholderslate {
		@apply placeholder:text-slate-500;
	}
	.placeholdergray {
		@apply placeholder:text-gray-500;
	}
	.placeholderzinc {
		@apply placeholder:text-zinc-500;
	}
	.placeholderneutral {
		@apply placeholder:text-neutral-500;
	}
	.placeholderstone {
		@apply placeholder:text-stone-500;
	}
	.placeholderred {
		@apply placeholder:text-red-500;
	}
	.placeholderorange {
		@apply placeholder:text-orange-500;
	}
	.placeholderamber {
		@apply placeholder:text-amber-500;
	}
	.placeholderyellow {
		@apply placeholder:text-yellow-500;
	}
	.placeholderlime {
		@apply placeholder:text-lime-500;
	}
	.placeholdergreen {
		@apply placeholder:text-green-500;
	}
	.placeholderemerald {
		@apply placeholder:text-emerald-500;
	}
	.placeholderteal {
		@apply placeholder:text-teal-500;
	}
	.placeholdercyan {
		@apply placeholder:text-cyan-500;
	}
	.placeholdersky {
		@apply placeholder:text-sky-500;
	}
	.placeholderblue {
		@apply placeholder:text-blue-500;
	}
	.placeholderindigo {
		@apply placeholder:text-indigo-500;
	}
	.placeholderviolet {
		@apply placeholder:text-violet-500;
	}
	.placeholderpurple {
		@apply placeholder:text-purple-500;
	}
	.placeholderfuchsia {
		@apply placeholder:text-fuchsia-500;
	}
	.placeholderpink {
		@apply placeholder:text-pink-500;
	}
	.placeholderrose {
		@apply placeholder:text-rose-500;
	}

	.lighterplaceholderslate {
		@apply placeholder:text-slate-400;
	}
	.lighterplaceholdergray {
		@apply placeholder:text-gray-400;
	}
	.lighterplaceholderzinc {
		@apply placeholder:text-zinc-400;
	}
	.lighterplaceholderneutral {
		@apply placeholder:text-neutral-400;
	}
	.lighterplaceholderstone {
		@apply placeholder:text-stone-400;
	}
	.lighterplaceholderred {
		@apply placeholder:text-red-400;
	}
	.lighterplaceholderorange {
		@apply placeholder:text-orange-400;
	}
	.lighterplaceholderamber {
		@apply placeholder:text-amber-400;
	}
	.lighterplaceholderyellow {
		@apply placeholder:text-yellow-400;
	}
	.lighterplaceholderlime {
		@apply placeholder:text-lime-400;
	}
	.lighterplaceholdergreen {
		@apply placeholder:text-green-400;
	}
	.lighterplaceholderemerald {
		@apply placeholder:text-emerald-400;
	}
	.lighterplaceholderteal {
		@apply placeholder:text-teal-400;
	}
	.lighterplaceholdercyan {
		@apply placeholder:text-cyan-400;
	}
	.lighterplaceholdersky {
		@apply placeholder:text-sky-400;
	}
	.lighterplaceholderblue {
		@apply placeholder:text-blue-400;
	}
	.lighterplaceholderindigo {
		@apply placeholder:text-indigo-400;
	}
	.lighterplaceholderviolet {
		@apply placeholder:text-violet-400;
	}
	.lighterplaceholderpurple {
		@apply placeholder:text-purple-400;
	}
	.lighterplaceholderfuchsia {
		@apply placeholder:text-fuchsia-400;
	}
	.lighterplaceholderpink {
		@apply placeholder:text-pink-400;
	}
	.lighterplaceholderrose {
		@apply placeholder:text-rose-400;
	}

	.darkerplaceholdergray {
		@apply placeholder:text-gray-200;
	}
	.darkerplaceholderslate {
		@apply placeholder:text-slate-200;
	}
	.darkerplaceholderzinc {
		@apply placeholder:text-zinc-200;
	}
	.darkerplaceholderneutral {
		@apply placeholder:text-neutral-200;
	}
	.darkerplaceholderstone {
		@apply placeholder:text-stone-200;
	}
	.darkerplaceholderred {
		@apply placeholder:text-red-200;
	}
	.darkerplaceholderorange {
		@apply placeholder:text-orange-200;
	}
	.darkerplaceholderamber {
		@apply placeholder:text-amber-200;
	}
	.darkerplaceholderyellow {
		@apply placeholder:text-yellow-200;
	}
	.darkerplaceholderlime {
		@apply placeholder:text-lime-200;
	}
	.darkerplaceholdergreen {
		@apply placeholder:text-green-200;
	}
	.darkerplaceholderemerald {
		@apply placeholder:text-emerald-200;
	}
	.darkerplaceholderteal {
		@apply placeholder:text-teal-200;
	}
	.darkerplaceholdercyan {
		@apply placeholder:text-cyan-200;
	}
	.darkerplaceholdersky {
		@apply placeholder:text-sky-200;
	}
	.darkerplaceholderblue {
		@apply placeholder:text-blue-200;
	}
	.darkerplaceholderindigo {
		@apply placeholder:text-indigo-200;
	}
	.darkerplaceholderviolet {
		@apply placeholder:text-violet-200;
	}
	.darkerplaceholderpurple {
		@apply placeholder:text-purple-200;
	}
	.darkerplaceholderfuchsia {
		@apply placeholder:text-fuchsia-200;
	}
	.darkerplaceholderpink {
		@apply placeholder:text-pink-200;
	}
	.darkerplaceholderrose {
		@apply placeholder:text-rose-200;
	}

	.placeholdertransparent1 {
		@apply placeholder:text-gray-50;
	}
	.placeholdertransparent2 {
		@apply placeholder:text-gray-300;
	}
	.placeholdertransparent3 {
		@apply placeholder:text-gray-400;
	}
	.placeholdertransparent4 {
		@apply placeholder:text-gray-500;
	}
	.placeholdertransparent5 {
		@apply placeholder:text-gray-600;
	}
	.placeholdertransparent6 {
		@apply placeholder:text-gray-700;
	}
	.placeholderwhite1 {
		@apply placeholder:text-gray-800;
	}
	.placeholderwhite2 {
		@apply placeholder:text-gray-800;
	}
	.placeholderwhite3 {
		@apply placeholder:text-gray-800;
	}
	.placeholderwhite4 {
		@apply placeholder:text-gray-800;
	}
	.placeholderwhite5 {
		@apply placeholder:text-gray-800;
	}
	.placeholderwhite6 {
		@apply placeholder:text-gray-800;
	}
	.placeholderblack1 {
		@apply placeholder:text-gray-100;
	}
	.placeholderblack2 {
		@apply placeholder:text-gray-100;
	}
	.placeholderblack3 {
		@apply placeholder:text-gray-100;
	}
	.placeholderblack4 {
		@apply placeholder:text-gray-100;
	}
	.placeholderblack5 {
		@apply placeholder:text-gray-100;
	}
	.placeholderblack6 {
		@apply placeholder:text-gray-100;
	}
	.placeholderslate1 {
		@apply placeholder:text-slate-400;
	}
	.placeholderslate2 {
		@apply placeholder:text-slate-400;
	}
	.placeholderslate3 {
		@apply placeholder:text-slate-500
	}
	.placeholderslate4 {
		@apply placeholder:text-slate-100;
	}
	.placeholderslate5 {
		@apply placeholder:text-slate-100;
	}
	.placeholderslate6 {
		@apply placeholder:text-slate-100;
	}
	.placeholderzinc1 {
		@apply placeholder:text-zinc-400;
	}
	.placeholderzinc2 {
		@apply placeholder:text-zinc-400;
	}
	.placeholderzinc3 {
		@apply placeholder:text-zinc-500;
	}
	.placeholderzinc4 {
		@apply placeholder:text-zinc-100;
	}
	.placeholderzinc5 {
		@apply placeholder:text-zinc-100;
	}
	.placeholderzinc6 {
		@apply placeholder:text-zinc-100;
	}
	.placeholdergray1 {
		@apply placeholder:text-gray-400;
	}
	.placeholdergray2 {
		@apply placeholder:text-gray-400;
	}
	.placeholdergray3 {
		@apply placeholder:text-gray-500;
	}
	.placeholdergray4 {
		@apply placeholder:text-gray-100;
	}
	.placeholdergray5 {
		@apply placeholder:text-gray-100;
	}
	.placeholdergray6 {
		@apply placeholder:text-gray-100;
	}
	.placeholderneutral1 {
		@apply placeholder:text-neutral-400;
	}
	.placeholderneutral2 {
		@apply placeholder:text-neutral-400;
	}
	.placeholderneutral3 {
		@apply placeholder:text-neutral-500;
	}
	.placeholderneutral4 {
		@apply placeholder:text-neutral-100;
	}
	.placeholderneutral5 {
		@apply placeholder:text-neutral-100;
	}
	.placeholderneutral6 {
		@apply placeholder:text-neutral-100;
	}
	.placeholderstone1 {
		@apply placeholder:text-stone-400;
	}
	.placeholderstone2 {
		@apply placeholder:text-stone-400;
	}
	.placeholderstone3 {
		@apply placeholder:text-stone-500;
	}
	.placeholderstone4 {
		@apply placeholder:text-stone-100;
	}
	.placeholderstone5 {
		@apply placeholder:text-stone-100;
	}
	.placeholderstone6 {
		@apply placeholder:text-stone-100;
	}
	.placeholderred1 {
		@apply placeholder:text-red-400;
	}
	.placeholderred2 {
		@apply placeholder:text-red-400;
	}
	.placeholderred3 {
		@apply placeholder:text-red-500;
	}
	.placeholderred4 {
		@apply placeholder:text-red-100;
	}
	.placeholderred5 {
		@apply placeholder:text-red-100;
	}
	.placeholderred6 {
		@apply placeholder:text-red-100;
	}
	.placeholderorange1 {
		@apply placeholder:text-orange-400;
	}
	.placeholderorange2 {
		@apply placeholder:text-orange-400;
	}
	.placeholderorange3 {
		@apply placeholder:text-orange-500;
	}
	.placeholderorange4 {
		@apply placeholder:text-orange-100;
	}
	.placeholderorange5 {
		@apply placeholder:text-orange-100;
	}
	.placeholderorange6 {
		@apply placeholder:text-orange-100;
	}
	.placeholderamber1 {
		@apply placeholder:text-amber-400;
	}
	.placeholderamber2 {
		@apply placeholder:text-amber-400;
	}
	.placeholderamber3 {
		@apply placeholder:text-amber-500;
	}
	.placeholderamber4 {
		@apply placeholder:text-amber-100;
	}
	.placeholderamber5 {
		@apply placeholder:text-amber-100;
	}
	.placeholderamber6 {
		@apply placeholder:text-amber-100;
	}
	.placeholderyellow1 {
		@apply placeholder:text-yellow-400;
	}
	.placeholderyellow2 {
		@apply placeholder:text-yellow-400;
	}
	.placeholderyellow3 {
		@apply placeholder:text-yellow-500;
	}
	.placeholderyellow4 {
		@apply placeholder:text-yellow-100;
	}
	.placeholderyellow5 {
		@apply placeholder:text-yellow-100;
	}
	.placeholderyellow6 {
		@apply placeholder:text-yellow-100;
	}
	.placeholderlime1 {
		@apply placeholder:text-lime-400;
	}
	.placeholderlime2 {
		@apply placeholder:text-lime-400;
	}
	.placeholderlime3 {
		@apply placeholder:text-lime-500;
	}
	.placeholderlime4 {
		@apply placeholder:text-lime-100;
	}
	.placeholderlime5 {
		@apply placeholder:text-lime-100;
	}
	.placeholderlime6 {
		@apply placeholder:text-lime-100;
	}
	.placeholdergreen1 {
		@apply placeholder:text-green-400;
	}
	.placeholdergreen2 {
		@apply placeholder:text-green-400;
	}
	.placeholdergreen3 {
		@apply placeholder:text-green-500;
	}
	.placeholdergreen4 {
		@apply placeholder:text-green-100;
	}
	.placeholdergreen5 {
		@apply placeholder:text-green-100;
	}
	.placeholdergreen6 {
		@apply placeholder:text-green-100;
	}
	.placeholderemerald1 {
		@apply placeholder:text-emerald-400;
	}
	.placeholderemerald2 {
		@apply placeholder:text-emerald-400;
	}
	.placeholderemerald3 {
		@apply placeholder:text-emerald-500;
	}
	.placeholderemerald4 {
		@apply placeholder:text-emerald-100;
	}
	.placeholderemerald5 {
		@apply placeholder:text-emerald-100;
	}
	.placeholderemerald6 {
		@apply placeholder:text-emerald-100;
	}
	.placeholderteal1 {
		@apply placeholder:text-teal-400;
	}
	.placeholderteal2 {
		@apply placeholder:text-teal-400;
	}
	.placeholderteal3 {
		@apply placeholder:text-teal-500;
	}
	.placeholderteal4 {
		@apply placeholder:text-teal-100;
	}
	.placeholderteal5 {
		@apply placeholder:text-teal-100;
	}
	.placeholderteal6 {
		@apply placeholder:text-teal-100;
	}
	.placeholdercyan1 {
		@apply placeholder:text-cyan-400;
	}
	.placeholdercyan2 {
		@apply placeholder:text-cyan-400;
	}
	.placeholdercyan3 {
		@apply placeholder:text-cyan-500;
	}
	.placeholdercyan4 {
		@apply placeholder:text-cyan-100;
	}
	.placeholdercyan5 {
		@apply placeholder:text-cyan-100;
	}
	.placeholdercyan6 {
		@apply placeholder:text-cyan-100;
	}
	.placeholdersky1 {
		@apply placeholder:text-sky-400;
	}
	.placeholdersky2 {
		@apply placeholder:text-sky-400;
	}
	.placeholdersky3 {
		@apply placeholder:text-sky-500;
	}
	.placeholdersky4 {
		@apply placeholder:text-sky-100;
	}
	.placeholdersky5 {
		@apply placeholder:text-sky-100;
	}
	.placeholdersky6 {
		@apply placeholder:text-sky-100;
	}
	.placeholderblue1 {
		@apply placeholder:text-blue-400;
	}
	.placeholderblue2 {
		@apply placeholder:text-blue-400;
	}
	.placeholderblue3 {
		@apply placeholder:text-blue-500;
	}
	.placeholderblue4 {
		@apply placeholder:text-blue-100;
	}
	.placeholderblue5 {
		@apply placeholder:text-blue-100;
	}
	.placeholderblue6 {
		@apply placeholder:text-blue-100;
	}
	.placeholderindigo1 {
		@apply placeholder:text-indigo-400;
	}
	.placeholderindigo2 {
		@apply placeholder:text-indigo-400;
	}
	.placeholderindigo3 {
		@apply placeholder:text-indigo-500;
	}
	.placeholderindigo4 {
		@apply placeholder:text-indigo-100;
	}
	.placeholderindigo5 {
		@apply placeholder:text-indigo-100;
	}
	.placeholderindigo6 {
		@apply placeholder:text-indigo-100;
	}
	.placeholderviolet1 {
		@apply placeholder:text-violet-400;
	}
	.placeholderviolet2 {
		@apply placeholder:text-violet-400;
	}
	.placeholderviolet3 {
		@apply placeholder:text-violet-500;
	}
	.placeholderviolet4 {
		@apply placeholder:text-violet-100;
	}
	.placeholderviolet5 {
		@apply placeholder:text-violet-100;
	}
	.placeholderviolet6 {
		@apply placeholder:text-violet-100;
	}
	.placeholderpurple1 {
		@apply placeholder:text-purple-400;
	}
	.placeholderpurple2 {
		@apply placeholder:text-purple-400;
	}
	.placeholderpurple3 {
		@apply placeholder:text-purple-500;
	}
	.placeholderpurple4 {
		@apply placeholder:text-purple-100;
	}
	.placeholderpurple5 {
		@apply placeholder:text-purple-100;
	}
	.placeholderpurple6 {
		@apply placeholder:text-purple-100;
	}
	.placeholderfuchsia1 {
		@apply placeholder:text-fuchsia-400;
	}
	.placeholderfuchsia2 {
		@apply placeholder:text-fuchsia-400;
	}
	.placeholderfuchsia3 {
		@apply placeholder:text-fuchsia-500;
	}
	.placeholderfuchsia4 {
		@apply placeholder:text-fuchsia-100;
	}
	.placeholderfuchsia5 {
		@apply placeholder:text-fuchsia-100;
	}
	.placeholderfuchsia6 {
		@apply placeholder:text-fuchsia-100;
	}
	.placeholderpink1 {
		@apply placeholder:text-pink-400;
	}
	.placeholderpink2 {
		@apply placeholder:text-pink-400;
	}
	.placeholderpink3 {
		@apply placeholder:text-pink-500;
	}
	.placeholderpink4 {
		@apply placeholder:text-pink-100;
	}
	.placeholderpink5 {
		@apply placeholder:text-pink-100;
	}
	.placeholderpink6 {
		@apply placeholder:text-pink-100;
	}
	.placeholderrose1 {
		@apply placeholder:text-rose-400;
	}
	.placeholderrose2 {
		@apply placeholder:text-rose-400;
	}
	.placeholderrose3 {
		@apply placeholder:text-rose-500;
	}
	.placeholderrose4 {
		@apply placeholder:text-rose-100;
	}
	.placeholderrose5 {
		@apply placeholder:text-rose-100;
	}
	.placeholderrose6 {
		@apply placeholder:text-rose-100;
	}
</style>

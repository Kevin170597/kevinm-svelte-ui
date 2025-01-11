<script lang="ts">
	import type { Snippet } from 'svelte';
	import { Text, Icon } from '.';

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

	interface Style {
		color?: Color;
		colorLevel?: 1 | 2 | 3 | 4 | 5 | 6;
		size?: 'sm' | 'md' | 'lg' | 'xl';
		startIcon?: string;
		endIcon?: string;
	}

	let {
		children,
		s,
		class: clss,
		oc
	}: { children: Snippet; s?: Style; class?: string; oc?: () => void } = $props();
</script>

<button
	onclick={oc}
	class="color{s?.color ? s.color : 'white'}{s?.colorLevel ? `${s.colorLevel}` : 3}
        w-fit flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 {clss}"
>
	{#if s?.startIcon}
		<Icon
			name={s.startIcon}
			s={{
				color: s?.color ? s.color : 'slate',
				size: s?.size ? s.size : 'md'
			}}
		/>
	{/if}
	<Text s={{ bold: true, size: s?.size ? s.size : 'md' }}>
		{@render children()}
	</Text>
	{#if s?.endIcon}
		<Icon
			name={s.endIcon}
			s={{
				color: s?.color ? s.color : 'slate',
				size: s?.size ? s.size : 'md'
			}}
		/>
	{/if}
</button>

<style lang="postcss">
	.colortransparent1 {
		@apply bg-transparent text-gray-100 hover:text-gray-50;
	}
	.colortransparent2 {
		@apply bg-transparent text-gray-200 hover:text-gray-300;
	}
	.colortransparent3 {
		@apply bg-transparent text-gray-300 hover:text-gray-400;
	}
	.colortransparent4 {
		@apply bg-transparent text-gray-400 hover:text-gray-500;
	}
	.colortransparent5 {
		@apply bg-transparent text-gray-500 hover:text-gray-600;
	}
	.colortransparent6 {
		@apply bg-transparent text-gray-600 hover:text-gray-700;
	}
	.colorwhite1 {
		@apply bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-800;
	}
	.colorwhite2 {
		@apply bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-800;
	}
	.colorwhite3 {
		@apply bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-800;
	}
	.colorwhite4 {
		@apply bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-800;
	}
	.colorwhite5 {
		@apply bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-800;
	}
	.colorwhite6 {
		@apply bg-white hover:bg-gray-100 text-gray-600 hover:text-gray-800;
	}
	.colorblack1 {
		@apply bg-gray-900 hover:bg-gray-950 text-gray-100;
	}
	.colorblack2 {
		@apply bg-gray-900 hover:bg-gray-950 text-gray-100;
	}
	.colorblack3 {
		@apply bg-gray-900 hover:bg-gray-950 text-gray-100;
	}
	.colorblack4 {
		@apply bg-gray-900 hover:bg-gray-950 text-gray-100;
	}
	.colorblack5 {
		@apply bg-gray-900 hover:bg-gray-950 text-gray-100;
	}
	.colorblack6 {
		@apply bg-gray-900 hover:bg-gray-950 text-gray-100;
	}
	.colorslate1 {
		@apply bg-slate-50 hover:bg-slate-100 text-slate-400 hover:text-slate-500;
	}
	.colorslate2 {
		@apply bg-slate-100 hover:bg-slate-200 text-slate-400 hover:text-slate-500;
	}
	.colorslate3 {
		@apply bg-slate-300 hover:bg-slate-400 text-slate-500 hover:text-slate-700;
	}
	.colorslate4 {
		@apply bg-slate-500 hover:bg-slate-600 text-slate-100;
	}
	.colorslate5 {
		@apply bg-slate-700 hover:bg-slate-800 text-slate-100;
	}
	.colorslate6 {
		@apply bg-slate-900 hover:bg-slate-950 text-slate-100;
	}
	.colorzinc1 {
		@apply bg-zinc-50 hover:bg-zinc-100 text-zinc-400 hover:text-zinc-500;
	}
	.colorzinc2 {
		@apply bg-zinc-100 hover:bg-zinc-200 text-zinc-400 hover:text-zinc-500;
	}
	.colorzinc3 {
		@apply bg-zinc-300 hover:bg-zinc-400 text-zinc-500 hover:text-zinc-700;
	}
	.colorzinc4 {
		@apply bg-zinc-500 hover:bg-zinc-600 text-zinc-100;
	}
	.colorzinc5 {
		@apply bg-zinc-700 hover:bg-zinc-800 text-zinc-100;
	}
	.colorzinc6 {
		@apply bg-zinc-900 hover:bg-zinc-950 text-zinc-100;
	}
	.colorgray1 {
		@apply bg-gray-50 hover:bg-gray-100 text-gray-400 hover:text-gray-500;
	}
	.colorgray2 {
		@apply bg-gray-100 hover:bg-gray-200 text-gray-400 hover:text-gray-500;
	}
	.colorgray3 {
		@apply bg-gray-300 hover:bg-gray-400 text-gray-500 hover:text-gray-700;
	}
	.colorgray4 {
		@apply bg-gray-500 hover:bg-gray-600 text-gray-100;
	}
	.colorgray5 {
		@apply bg-gray-700 hover:bg-gray-800 text-gray-100;
	}
	.colorgray6 {
		@apply bg-gray-900 hover:bg-gray-950 text-gray-100;
	}
	.colorneutral1 {
		@apply bg-neutral-50 hover:bg-neutral-100 text-neutral-400 hover:text-neutral-500;
	}
	.colorneutral2 {
		@apply bg-neutral-100 hover:bg-neutral-200 text-neutral-400 hover:text-neutral-500;
	}
	.colorneutral3 {
		@apply bg-neutral-300 hover:bg-neutral-400 text-neutral-500 hover:text-neutral-700;
	}
	.colorneutral4 {
		@apply bg-neutral-500 hover:bg-neutral-600 text-neutral-100;
	}
	.colorneutral5 {
		@apply bg-neutral-700 hover:bg-neutral-800 text-neutral-100;
	}
	.colorneutral6 {
		@apply bg-neutral-900 hover:bg-neutral-950 text-neutral-100;
	}
	.colorstone1 {
		@apply bg-stone-50 hover:bg-stone-100 text-stone-400 hover:text-stone-500;
	}
	.colorstone2 {
		@apply bg-stone-100 hover:bg-stone-200 text-stone-400 hover:text-stone-500;
	}
	.colorstone3 {
		@apply bg-stone-300 hover:bg-stone-400 text-stone-500 hover:text-stone-700;
	}
	.colorstone4 {
		@apply bg-stone-500 hover:bg-stone-600 text-stone-100;
	}
	.colorstone5 {
		@apply bg-stone-700 hover:bg-stone-800 text-stone-100;
	}
	.colorstone6 {
		@apply bg-stone-900 hover:bg-stone-950 text-stone-100;
	}
	.colorred1 {
		@apply bg-red-50 hover:bg-red-100 text-red-400 hover:text-red-500;
	}
	.colorred2 {
		@apply bg-red-100 hover:bg-red-200 text-red-400 hover:text-red-500;
	}
	.colorred3 {
		@apply bg-red-300 hover:bg-red-400 text-red-500 hover:text-red-700;
	}
	.colorred4 {
		@apply bg-red-500 hover:bg-red-600 text-red-100;
	}
	.colorred5 {
		@apply bg-red-700 hover:bg-red-800 text-red-100;
	}
	.colorred6 {
		@apply bg-red-900 hover:bg-red-950 text-red-100;
	}
	.colororange1 {
		@apply bg-orange-50 hover:bg-orange-100 text-orange-400 hover:text-orange-500;
	}
	.colororange2 {
		@apply bg-orange-100 hover:bg-orange-200 text-orange-400 hover:text-orange-500;
	}
	.colororange3 {
		@apply bg-orange-300 hover:bg-orange-400 text-orange-500 hover:text-orange-700;
	}
	.colororange4 {
		@apply bg-orange-500 hover:bg-orange-600 text-orange-100;
	}
	.colororange5 {
		@apply bg-orange-700 hover:bg-orange-800 text-orange-100;
	}
	.colororange6 {
		@apply bg-orange-900 hover:bg-orange-950 text-orange-100;
	}
	.coloramber1 {
		@apply bg-amber-50 hover:bg-amber-100 text-amber-400 hover:text-amber-500;
	}
	.coloramber2 {
		@apply bg-amber-100 hover:bg-amber-200 text-amber-400 hover:text-amber-500;
	}
	.coloramber3 {
		@apply bg-amber-300 hover:bg-amber-400 text-amber-500 hover:text-amber-700;
	}
	.coloramber4 {
		@apply bg-amber-500 hover:bg-amber-600 text-amber-100;
	}
	.coloramber5 {
		@apply bg-amber-700 hover:bg-amber-800 text-amber-100;
	}
	.coloramber6 {
		@apply bg-amber-900 hover:bg-amber-950 text-amber-100;
	}
	.coloryellow1 {
		@apply bg-yellow-50 hover:bg-yellow-100 text-yellow-400 hover:text-yellow-500;
	}
	.coloryellow2 {
		@apply bg-yellow-100 hover:bg-yellow-200 text-yellow-400 hover:text-yellow-500;
	}
	.coloryellow3 {
		@apply bg-yellow-300 hover:bg-yellow-400 text-yellow-500 hover:text-yellow-700;
	}
	.coloryellow4 {
		@apply bg-yellow-500 hover:bg-yellow-600 text-yellow-100;
	}
	.coloryellow5 {
		@apply bg-yellow-700 hover:bg-yellow-800 text-yellow-100;
	}
	.coloryellow6 {
		@apply bg-yellow-900 hover:bg-yellow-950 text-yellow-100;
	}
	.colorlime1 {
		@apply bg-lime-50 hover:bg-lime-100 text-lime-400 hover:text-lime-500;
	}
	.colorlime2 {
		@apply bg-lime-100 hover:bg-lime-200 text-lime-400 hover:text-lime-500;
	}
	.colorlime3 {
		@apply bg-lime-300 hover:bg-lime-400 text-lime-500 hover:text-lime-700;
	}
	.colorlime4 {
		@apply bg-lime-500 hover:bg-lime-600 text-lime-100;
	}
	.colorlime5 {
		@apply bg-lime-700 hover:bg-lime-800 text-lime-100;
	}
	.colorlime6 {
		@apply bg-lime-900 hover:bg-lime-950 text-lime-100;
	}
	.colorgreen1 {
		@apply bg-green-50 hover:bg-green-100 text-green-400 hover:text-green-500;
	}
	.colorgreen2 {
		@apply bg-green-100 hover:bg-green-200 text-green-400 hover:text-green-500;
	}
	.colorgreen3 {
		@apply bg-green-300 hover:bg-green-400 text-green-500 hover:text-green-700;
	}
	.colorgreen4 {
		@apply bg-green-500 hover:bg-green-600 text-green-100;
	}
	.colorgreen5 {
		@apply bg-green-700 hover:bg-green-800 text-green-100;
	}
	.colorgreen6 {
		@apply bg-green-900 hover:bg-green-950 text-green-100;
	}
	.coloremerald1 {
		@apply bg-emerald-50 hover:bg-emerald-100 text-emerald-400 hover:text-emerald-500;
	}
	.coloremerald2 {
		@apply bg-emerald-100 hover:bg-emerald-200 text-emerald-400 hover:text-emerald-500;
	}
	.coloremerald3 {
		@apply bg-emerald-300 hover:bg-emerald-400 text-emerald-500 hover:text-emerald-700;
	}
	.coloremerald4 {
		@apply bg-emerald-500 hover:bg-emerald-600 text-emerald-100;
	}
	.coloremerald5 {
		@apply bg-emerald-700 hover:bg-emerald-800 text-emerald-100;
	}
	.coloremerald6 {
		@apply bg-emerald-900 hover:bg-emerald-950 text-emerald-100;
	}
	.colorteal1 {
		@apply bg-teal-50 hover:bg-teal-100 text-teal-400 hover:text-teal-500;
	}
	.colorteal2 {
		@apply bg-teal-100 hover:bg-teal-200 text-teal-400 hover:text-teal-500;
	}
	.colorteal3 {
		@apply bg-teal-300 hover:bg-teal-400 text-teal-500 hover:text-teal-700;
	}
	.colorteal4 {
		@apply bg-teal-500 hover:bg-teal-600 text-teal-100;
	}
	.colorteal5 {
		@apply bg-teal-700 hover:bg-teal-800 text-teal-100;
	}
	.colorteal6 {
		@apply bg-teal-900 hover:bg-teal-950 text-teal-100;
	}
	.colorcyan1 {
		@apply bg-cyan-50 hover:bg-cyan-100 text-cyan-400 hover:text-cyan-500;
	}
	.colorcyan2 {
		@apply bg-cyan-100 hover:bg-cyan-200 text-cyan-400 hover:text-cyan-500;
	}
	.colorcyan3 {
		@apply bg-cyan-300 hover:bg-cyan-400 text-cyan-500 hover:text-cyan-700;
	}
	.colorcyan4 {
		@apply bg-cyan-500 hover:bg-cyan-600 text-cyan-100;
	}
	.colorcyan5 {
		@apply bg-cyan-700 hover:bg-cyan-800 text-cyan-100;
	}
	.colorcyan6 {
		@apply bg-cyan-900 hover:bg-cyan-950 text-cyan-100;
	}
	.colorsky1 {
		@apply bg-sky-50 hover:bg-sky-100 text-sky-400 hover:text-sky-500;
	}
	.colorsky2 {
		@apply bg-sky-100 hover:bg-sky-200 text-sky-400 hover:text-sky-500;
	}
	.colorsky3 {
		@apply bg-sky-300 hover:bg-sky-400 text-sky-500 hover:text-sky-700;
	}
	.colorsky4 {
		@apply bg-sky-500 hover:bg-sky-600 text-sky-100;
	}
	.colorsky5 {
		@apply bg-sky-700 hover:bg-sky-800 text-sky-100;
	}
	.colorsky6 {
		@apply bg-sky-900 hover:bg-sky-950 text-sky-100;
	}
	.colorblue1 {
		@apply bg-blue-50 hover:bg-blue-100 text-blue-400 hover:text-blue-500;
	}
	.colorblue2 {
		@apply bg-blue-100 hover:bg-blue-200 text-blue-400 hover:text-blue-500;
	}
	.colorblue3 {
		@apply bg-blue-300 hover:bg-blue-400 text-blue-500 hover:text-blue-700;
	}
	.colorblue4 {
		@apply bg-blue-500 hover:bg-blue-600 text-blue-100;
	}
	.colorblue5 {
		@apply bg-blue-700 hover:bg-blue-800 text-blue-100;
	}
	.colorblue6 {
		@apply bg-blue-900 hover:bg-blue-950 text-blue-100;
	}
	.colorindigo1 {
		@apply bg-indigo-50 hover:bg-indigo-100 text-indigo-400 hover:text-indigo-500;
	}
	.colorindigo2 {
		@apply bg-indigo-100 hover:bg-indigo-200 text-indigo-400 hover:text-indigo-500;
	}
	.colorindigo3 {
		@apply bg-indigo-300 hover:bg-indigo-400 text-indigo-500 hover:text-indigo-700;
	}
	.colorindigo4 {
		@apply bg-indigo-500 hover:bg-indigo-600 text-indigo-100;
	}
	.colorindigo5 {
		@apply bg-indigo-700 hover:bg-indigo-800 text-indigo-100;
	}
	.colorindigo6 {
		@apply bg-indigo-900 hover:bg-indigo-950 text-indigo-100;
	}
	.colorviolet1 {
		@apply bg-violet-50 hover:bg-violet-100 text-violet-400 hover:text-violet-500;
	}
	.colorviolet2 {
		@apply bg-violet-100 hover:bg-violet-200 text-violet-400 hover:text-violet-500;
	}
	.colorviolet3 {
		@apply bg-violet-300 hover:bg-violet-400 text-violet-500 hover:text-violet-700;
	}
	.colorviolet4 {
		@apply bg-violet-500 hover:bg-violet-600 text-violet-100;
	}
	.colorviolet5 {
		@apply bg-violet-700 hover:bg-violet-800 text-violet-100;
	}
	.colorviolet6 {
		@apply bg-violet-900 hover:bg-violet-950 text-violet-100;
	}
	.colorpurple1 {
		@apply bg-purple-50 hover:bg-purple-100 text-purple-400 hover:text-purple-500;
	}
	.colorpurple2 {
		@apply bg-purple-100 hover:bg-purple-200 text-purple-400 hover:text-purple-500;
	}
	.colorpurple3 {
		@apply bg-purple-300 hover:bg-purple-400 text-purple-500 hover:text-purple-700;
	}
	.colorpurple4 {
		@apply bg-purple-500 hover:bg-purple-600 text-purple-100;
	}
	.colorpurple5 {
		@apply bg-purple-700 hover:bg-purple-800 text-purple-100;
	}
	.colorpurple6 {
		@apply bg-purple-900 hover:bg-purple-950 text-purple-100;
	}
	.colorfuchsia1 {
		@apply bg-fuchsia-50 hover:bg-fuchsia-100 text-fuchsia-400 hover:text-fuchsia-500;
	}
	.colorfuchsia2 {
		@apply bg-fuchsia-100 hover:bg-fuchsia-200 text-fuchsia-400 hover:text-fuchsia-500;
	}
	.colorfuchsia3 {
		@apply bg-fuchsia-300 hover:bg-fuchsia-400 text-fuchsia-500 hover:text-fuchsia-700;
	}
	.colorfuchsia4 {
		@apply bg-fuchsia-500 hover:bg-fuchsia-600 text-fuchsia-100;
	}
	.colorfuchsia5 {
		@apply bg-fuchsia-700 hover:bg-fuchsia-800 text-fuchsia-100;
	}
	.colorfuchsia6 {
		@apply bg-fuchsia-900 hover:bg-fuchsia-950 text-fuchsia-100;
	}
	.colorpink1 {
		@apply bg-pink-50 hover:bg-pink-100 text-pink-400 hover:text-pink-500;
	}
	.colorpink2 {
		@apply bg-pink-100 hover:bg-pink-200 text-pink-400 hover:text-pink-500;
	}
	.colorpink3 {
		@apply bg-pink-300 hover:bg-pink-400 text-pink-500 hover:text-pink-700;
	}
	.colorpink4 {
		@apply bg-pink-500 hover:bg-pink-600 text-pink-100;
	}
	.colorpink5 {
		@apply bg-pink-700 hover:bg-pink-800 text-pink-100;
	}
	.colorpink6 {
		@apply bg-pink-900 hover:bg-pink-950 text-pink-100;
	}
	.colorrose1 {
		@apply bg-rose-50 hover:bg-rose-100 text-rose-400 hover:text-rose-500;
	}
	.colorrose2 {
		@apply bg-rose-100 hover:bg-rose-200 text-rose-400 hover:text-rose-500;
	}
	.colorrose3 {
		@apply bg-rose-300 hover:bg-rose-400 text-rose-500 hover:text-rose-700;
	}
	.colorrose4 {
		@apply bg-rose-500 hover:bg-rose-600 text-rose-100;
	}
	.colorrose5 {
		@apply bg-rose-700 hover:bg-rose-800 text-rose-100;
	}
	.colorrose6 {
		@apply bg-rose-900 hover:bg-rose-950 text-rose-100;
	}
</style>

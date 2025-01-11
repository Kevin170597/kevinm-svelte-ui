<script lang="ts">
	import type { Snippet } from 'svelte';

	type Gap = 1 | 2 | 4 | 8 | 12 | 16;

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
		gap?: Gap;
		color?: Color;
		colorLevel?: 1 | 2 | 3 | 4 | 5 | 6;
		direction?: 'row' | 'col';
		justify?: 'start' | 'end' | 'center' | 'between';
		items?: 'start' | 'end' | 'center';
	}

	let {
		children,
		s,
		class: clss
	}: {
		children: Snippet;
		s?: Style;
		class?: string;
	} = $props();
</script>

<div
	class="flex gap{s?.gap} 
		color{s?.color ? s.color : 'transparent'}{s?.colorLevel ? `${s.colorLevel}` : 3} 
		{s?.direction} items{s?.items} justify{s?.justify} 
		w-full p-4 rounded-lg transition-all duration-200 {clss}"
>
	{@render children()}
</div>

<style lang="postcss">
	.col {
		@apply flex-col;
	}
	.row {
		@apply flex-row;
	}
	.itemscenter {
		@apply items-center;
	}
	.itemsstart {
		@apply items-start;
	}
	.itemsend {
		@apply items-end;
	}

	.justifystart {
		@apply justify-start;
	}
	.justifycenter {
		@apply justify-center;
	}
	.justifyend {
		@apply justify-end;
	}
	.justifybetween {
		@apply justify-between;
	}

	.gap1 {
		@apply gap-1;
	}
	.gap2 {
		@apply gap-2;
	}
	.gap4 {
		@apply gap-4;
	}
	.gap8 {
		@apply gap-8;
	}
	.gap12 {
		@apply gap-12;
	}
	.gap16 {
		@apply gap-16;
	}
	
	.colortransparent1 {
		@apply bg-transparent text-gray-100;
	}
	.colortransparent2 {
		@apply bg-transparent text-gray-200;
	}
	.colortransparent3 {
		@apply bg-transparent text-gray-300;
	}
	.colortransparent4 {
		@apply bg-transparent text-gray-400;
	}
	.colortransparent5 {
		@apply bg-transparent text-gray-500;
	}
	.colortransparent6 {
		@apply bg-transparent text-gray-600;
	}
	.colorwhite1 {
		@apply bg-white text-gray-600;
	}
	.colorwhite2 {
		@apply bg-white text-gray-600;
	}
	.colorwhite3 {
		@apply bg-white text-gray-600;
	}
	.colorwhite4 {
		@apply bg-white text-gray-600;
	}
	.colorwhite5 {
		@apply bg-white text-gray-600;
	}
	.colorwhite6 {
		@apply bg-white text-gray-600;
	}
	.colorblack1 {
		@apply bg-gray-900 text-gray-100;
	}
	.colorblack2 {
		@apply bg-gray-900 text-gray-100;
	}
	.colorblack3 {
		@apply bg-gray-900 text-gray-100;
	}
	.colorblack4 {
		@apply bg-gray-900 text-gray-100;
	}
	.colorblack5 {
		@apply bg-gray-900 text-gray-100;
	}
	.colorblack6 {
		@apply bg-gray-900 text-gray-100;
	}
	.colorslate1 {
		@apply bg-slate-50 text-slate-400;
	}
	.colorslate2 {
		@apply bg-slate-100 text-slate-400;
	}
	.colorslate3 {
		@apply bg-slate-300 text-slate-500;
	}
	.colorslate4 {
		@apply bg-slate-500 text-slate-100;
	}
	.colorslate5 {
		@apply bg-slate-700 text-slate-100;
	}
	.colorslate6 {
		@apply bg-slate-900 text-slate-100;
	}
	.colorzinc1 {
		@apply bg-zinc-50 text-zinc-400;
	}
	.colorzinc2 {
		@apply bg-zinc-100 text-zinc-400;
	}
	.colorzinc3 {
		@apply bg-zinc-300 text-zinc-500;
	}
	.colorzinc4 {
		@apply bg-zinc-500 text-zinc-100;
	}
	.colorzinc5 {
		@apply bg-zinc-700 text-zinc-100;
	}
	.colorzinc6 {
		@apply bg-zinc-900 text-zinc-100;
	}
	.colorgray1 {
		@apply bg-gray-50 text-gray-400;
	}
	.colorgray2 {
		@apply bg-gray-100 text-gray-400;
	}
	.colorgray3 {
		@apply bg-gray-300 text-gray-500;
	}
	.colorgray4 {
		@apply bg-gray-500 text-gray-100;
	}
	.colorgray5 {
		@apply bg-gray-700 text-gray-100;
	}
	.colorgray6 {
		@apply bg-gray-900 text-gray-100;
	}
	.colorneutral1 {
		@apply bg-neutral-50 text-neutral-400;
	}
	.colorneutral2 {
		@apply bg-neutral-100 text-neutral-400;
	}
	.colorneutral3 {
		@apply bg-neutral-300 text-neutral-500;
	}
	.colorneutral4 {
		@apply bg-neutral-500 text-neutral-100;
	}
	.colorneutral5 {
		@apply bg-neutral-700 text-neutral-100;
	}
	.colorneutral6 {
		@apply bg-neutral-900 text-neutral-100;
	}
	.colorstone1 {
		@apply bg-stone-50 text-stone-400;
	}
	.colorstone2 {
		@apply bg-stone-100 text-stone-400;
	}
	.colorstone3 {
		@apply bg-stone-300 text-stone-500;
	}
	.colorstone4 {
		@apply bg-stone-500 text-stone-100;
	}
	.colorstone5 {
		@apply bg-stone-700 text-stone-100;
	}
	.colorstone6 {
		@apply bg-stone-900 text-stone-100;
	}
	.colorred1 {
		@apply bg-red-50 text-red-400;
	}
	.colorred2 {
		@apply bg-red-100 text-red-400;
	}
	.colorred3 {
		@apply bg-red-300 text-red-500;
	}
	.colorred4 {
		@apply bg-red-500 text-red-100;
	}
	.colorred5 {
		@apply bg-red-700 text-red-100;
	}
	.colorred6 {
		@apply bg-red-900 text-red-100;
	}
	.colororange1 {
		@apply bg-orange-50 text-orange-400;
	}
	.colororange2 {
		@apply bg-orange-100 text-orange-400;
	}
	.colororange3 {
		@apply bg-orange-300 text-orange-500;
	}
	.colororange4 {
		@apply bg-orange-500 text-orange-100;
	}
	.colororange5 {
		@apply bg-orange-700 text-orange-100;
	}
	.colororange6 {
		@apply bg-orange-900 text-orange-100;
	}
	.coloramber1 {
		@apply bg-amber-50 text-amber-400;
	}
	.coloramber2 {
		@apply bg-amber-100 text-amber-400;
	}
	.coloramber3 {
		@apply bg-amber-300 text-amber-500;
	}
	.coloramber4 {
		@apply bg-amber-500 text-amber-100;
	}
	.coloramber5 {
		@apply bg-amber-700 text-amber-100;
	}
	.coloramber6 {
		@apply bg-amber-900 text-amber-100;
	}
	.coloryellow1 {
		@apply bg-yellow-50 text-yellow-400;
	}
	.coloryellow2 {
		@apply bg-yellow-100 text-yellow-400;
	}
	.coloryellow3 {
		@apply bg-yellow-300 text-yellow-500;
	}
	.coloryellow4 {
		@apply bg-yellow-500 text-yellow-100;
	}
	.coloryellow5 {
		@apply bg-yellow-700 text-yellow-100;
	}
	.coloryellow6 {
		@apply bg-yellow-900 text-yellow-100;
	}
	.colorlime1 {
		@apply bg-lime-50 text-lime-400;
	}
	.colorlime2 {
		@apply bg-lime-100 text-lime-400;
	}
	.colorlime3 {
		@apply bg-lime-300 text-lime-500;
	}
	.colorlime4 {
		@apply bg-lime-500 text-lime-100;
	}
	.colorlime5 {
		@apply bg-lime-700 text-lime-100;
	}
	.colorlime6 {
		@apply bg-lime-900 text-lime-100;
	}
	.colorgreen1 {
		@apply bg-green-50 text-green-400;
	}
	.colorgreen2 {
		@apply bg-green-100 text-green-400;
	}
	.colorgreen3 {
		@apply bg-green-300 text-green-500;
	}
	.colorgreen4 {
		@apply bg-green-500 text-green-100;
	}
	.colorgreen5 {
		@apply bg-green-700 text-green-100;
	}
	.colorgreen6 {
		@apply bg-green-900 text-green-100;
	}
	.coloremerald1 {
		@apply bg-emerald-50 text-emerald-400;
	}
	.coloremerald2 {
		@apply bg-emerald-100 text-emerald-400;
	}
	.coloremerald3 {
		@apply bg-emerald-300 text-emerald-500;
	}
	.coloremerald4 {
		@apply bg-emerald-500 text-emerald-100;
	}
	.coloremerald5 {
		@apply bg-emerald-700 text-emerald-100;
	}
	.coloremerald6 {
		@apply bg-emerald-900 text-emerald-100;
	}
	.colorteal1 {
		@apply bg-teal-50 text-teal-400;
	}
	.colorteal2 {
		@apply bg-teal-100 text-teal-400;
	}
	.colorteal3 {
		@apply bg-teal-300 text-teal-500;
	}
	.colorteal4 {
		@apply bg-teal-500 text-teal-100;
	}
	.colorteal5 {
		@apply bg-teal-700 text-teal-100;
	}
	.colorteal6 {
		@apply bg-teal-900 text-teal-100;
	}
	.colorcyan1 {
		@apply bg-cyan-50 text-cyan-400;
	}
	.colorcyan2 {
		@apply bg-cyan-100 text-cyan-400;
	}
	.colorcyan3 {
		@apply bg-cyan-300 text-cyan-500;
	}
	.colorcyan4 {
		@apply bg-cyan-500 text-cyan-100;
	}
	.colorcyan5 {
		@apply bg-cyan-700 text-cyan-100;
	}
	.colorcyan6 {
		@apply bg-cyan-900 text-cyan-100;
	}
	.colorsky1 {
		@apply bg-sky-50  text-sky-400;
	}
	.colorsky2 {
		@apply bg-sky-100  text-sky-400;
	}
	.colorsky3 {
		@apply bg-sky-300  text-sky-500;
	}
	.colorsky4 {
		@apply bg-sky-500  text-sky-100;
	}
	.colorsky5 {
		@apply bg-sky-700  text-sky-100;
	}
	.colorsky6 {
		@apply bg-sky-900  text-sky-100;
	}
	.colorblue1 {
		@apply bg-blue-50  text-blue-400;
	}
	.colorblue2 {
		@apply bg-blue-100  text-blue-400;
	}
	.colorblue3 {
		@apply bg-blue-300  text-blue-500;
	}
	.colorblue4 {
		@apply bg-blue-500  text-blue-100;
	}
	.colorblue5 {
		@apply bg-blue-700  text-blue-100;
	}
	.colorblue6 {
		@apply bg-blue-900  text-blue-100;
	}
	.colorindigo1 {
		@apply bg-indigo-50 text-indigo-400;
	}
	.colorindigo2 {
		@apply bg-indigo-100 text-indigo-400;
	}
	.colorindigo3 {
		@apply bg-indigo-300 text-indigo-500;
	}
	.colorindigo4 {
		@apply bg-indigo-500 text-indigo-100;
	}
	.colorindigo5 {
		@apply bg-indigo-700 text-indigo-100;
	}
	.colorindigo6 {
		@apply bg-indigo-900 text-indigo-100;
	}
	.colorviolet1 {
		@apply bg-violet-50 text-violet-400;
	}
	.colorviolet2 {
		@apply bg-violet-100 text-violet-400;
	}
	.colorviolet3 {
		@apply bg-violet-300 text-violet-500;
	}
	.colorviolet4 {
		@apply bg-violet-500 text-violet-100;
	}
	.colorviolet5 {
		@apply bg-violet-700 text-violet-100;
	}
	.colorviolet6 {
		@apply bg-violet-900 text-violet-100;
	}
	.colorpurple1 {
		@apply bg-purple-50 text-purple-400;
	}
	.colorpurple2 {
		@apply bg-purple-100 text-purple-400;
	}
	.colorpurple3 {
		@apply bg-purple-300 text-purple-500;
	}
	.colorpurple4 {
		@apply bg-purple-500 text-purple-100;
	}
	.colorpurple5 {
		@apply bg-purple-700 text-purple-100;
	}
	.colorpurple6 {
		@apply bg-purple-900 text-purple-100;
	}
	.colorfuchsia1 {
		@apply bg-fuchsia-50 text-fuchsia-400;
	}
	.colorfuchsia2 {
		@apply bg-fuchsia-100 text-fuchsia-400;
	}
	.colorfuchsia3 {
		@apply bg-fuchsia-300 text-fuchsia-500;
	}
	.colorfuchsia4 {
		@apply bg-fuchsia-500 text-fuchsia-100;
	}
	.colorfuchsia5 {
		@apply bg-fuchsia-700 text-fuchsia-100;
	}
	.colorfuchsia6 {
		@apply bg-fuchsia-900 text-fuchsia-100;
	}
	.colorpink1 {
		@apply bg-pink-50 text-pink-400;
	}
	.colorpink2 {
		@apply bg-pink-100 text-pink-400;
	}
	.colorpink3 {
		@apply bg-pink-300 text-pink-500;
	}
	.colorpink4 {
		@apply bg-pink-500 text-pink-100;
	}
	.colorpink5 {
		@apply bg-pink-700 text-pink-100;
	}
	.colorpink6 {
		@apply bg-pink-900 text-pink-100;
	}
	.colorrose1 {
		@apply bg-rose-50 text-rose-400;
	}
	.colorrose2 {
		@apply bg-rose-100 text-rose-400;
	}
	.colorrose3 {
		@apply bg-rose-300 text-rose-500;
	}
	.colorrose4 {
		@apply bg-rose-500 text-rose-100;
	}
	.colorrose5 {
		@apply bg-rose-700 text-rose-100;
	}
	.colorrose6 {
		@apply bg-rose-900 text-rose-100;
	}
</style>

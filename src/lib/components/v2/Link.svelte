<script lang="ts">
	import type { Snippet } from 'svelte';

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

	type Size = 'sm' | 'md' | 'lg' | 'xl';

	interface Style {
		color?: Color;
		colorLevel?: 1 | 2 | 3 | 4 | 5 | 6;
		bold?: boolean;
		italic?: boolean;
        underline?: boolean;
		size?: Size;
	}

	let {
		children,
		href,
        target,
		s,
		class: clss
	}: {
		children: Snippet;
		href: string;
        target?: string | '_blank';
		s?: Style;
		class?: string;
	} = $props();
</script>

<a
	{href}
    {target}
	class=" 
	color{s?.color}{s?.colorLevel ? `${s.colorLevel}` : 3} 
	{s?.bold && 'font-bold'} 
    {s?.italic && 'italic'} 
    {s?.underline && 'underline'}
	textsize{s?.size ? s.size : 'md'} {clss}"
>
	{@render children()}
</a>

<style lang="postcss">
	p {
		font-family: 'Raleway', serif;
	}

	.textsizesm {
		@apply text-[12px];
	}
	.textsizemd {
		@apply text-[14px];
	}
	.textsizelg {
		@apply text-[16px];
	}
	.textsizexl {
		@apply text-[18px];
	}

	.colortransparent1 {
		@apply text-transparent;
	}
	.colortransparent2 {
		@apply text-transparent;
	}
	.colortransparent3 {
		@apply text-transparent;
	}
	.colortransparent4 {
		@apply text-transparent;
	}
	.colortransparent5 {
		@apply text-transparent;
	}
	.colortransparent6 {
		@apply text-transparent;
	}
	.colorwhite1 {
		@apply text-white;
	}
	.colorwhite2 {
		@apply text-white;
	}
	.colorwhite3 {
		@apply text-white;
	}
	.colorwhite4 {
		@apply text-white;
	}
	.colorwhite5 {
		@apply text-white;
	}
	.colorwhite6 {
		@apply text-white;
	}
	.colorblack1 {
		@apply text-black;
	}
	.colorblack2 {
		@apply text-black;
	}
	.colorblack3 {
		@apply text-black;
	}
	.colorblack4 {
		@apply text-black;
	}
	.colorblack5 {
		@apply text-black;
	}
	.colorblack6 {
		@apply text-black;
	}
	.colorslate1 {
		@apply text-slate-50;
	}
	.colorslate2 {
		@apply text-slate-100;
	}
	.colorslate3 {
		@apply text-slate-300;
	}
	.colorslate4 {
		@apply text-slate-500;
	}
	.colorslate5 {
		@apply text-slate-700;
	}
	.colorslate6 {
		@apply text-slate-900;
	}
	.colorzinc1 {
		@apply text-zinc-50;
	}
	.colorzinc2 {
		@apply text-zinc-100;
	}
	.colorzinc3 {
		@apply text-zinc-300;
	}
	.colorzinc4 {
		@apply text-zinc-500;
	}
	.colorzinc5 {
		@apply text-zinc-700;
	}
	.colorzinc6 {
		@apply text-zinc-900;
	}
	.colorgray1 {
		@apply text-gray-50;
	}
	.colorgray2 {
		@apply text-gray-100;
	}
	.colorgray3 {
		@apply text-gray-300;
	}
	.colorgray4 {
		@apply text-gray-500;
	}
	.colorgray5 {
		@apply text-gray-700;
	}
	.colorgray6 {
		@apply text-gray-900;
	}
	.colorneutral1 {
		@apply text-neutral-50;
	}
	.colorneutral2 {
		@apply text-neutral-100;
	}
	.colorneutral3 {
		@apply text-neutral-300;
	}
	.colorneutral4 {
		@apply text-neutral-500;
	}
	.colorneutral5 {
		@apply text-neutral-700;
	}
	.colorneutral6 {
		@apply text-neutral-900;
	}
	.colorstone1 {
		@apply text-stone-50;
	}
	.colorstone2 {
		@apply text-stone-100;
	}
	.colorstone3 {
		@apply text-stone-300;
	}
	.colorstone4 {
		@apply text-stone-500;
	}
	.colorstone5 {
		@apply text-stone-700;
	}
	.colorstone6 {
		@apply text-stone-900;
	}
	.colorred1 {
		@apply text-red-50;
	}
	.colorred2 {
		@apply text-red-100;
	}
	.colorred3 {
		@apply text-red-300;
	}
	.colorred4 {
		@apply text-red-500;
	}
	.colorred5 {
		@apply text-red-700;
	}
	.colorred6 {
		@apply text-red-900;
	}
	.colororange1 {
		@apply text-orange-50;
	}
	.colororange2 {
		@apply text-orange-100;
	}
	.colororange3 {
		@apply text-orange-300;
	}
	.colororange4 {
		@apply text-orange-500;
	}
	.colororange5 {
		@apply text-orange-700;
	}
	.colororange6 {
		@apply text-orange-900;
	}
	.coloramber1 {
		@apply text-amber-50;
	}
	.coloramber2 {
		@apply text-amber-100;
	}
	.coloramber3 {
		@apply text-amber-300;
	}
	.coloramber4 {
		@apply text-amber-500;
	}
	.coloramber5 {
		@apply text-amber-700;
	}
	.coloramber6 {
		@apply text-amber-900;
	}
	.coloryellow1 {
		@apply text-yellow-50;
	}
	.coloryellow2 {
		@apply text-yellow-100;
	}
	.coloryellow3 {
		@apply text-yellow-300;
	}
	.coloryellow4 {
		@apply text-yellow-500;
	}
	.coloryellow5 {
		@apply text-yellow-700;
	}
	.coloryellow6 {
		@apply text-yellow-900;
	}
	.colorlime1 {
		@apply text-lime-50;
	}
	.colorlime2 {
		@apply text-lime-100;
	}
	.colorlime3 {
		@apply text-lime-300;
	}
	.colorlime4 {
		@apply text-lime-500;
	}
	.colorlime5 {
		@apply text-lime-700;
	}
	.colorlime6 {
		@apply text-lime-900;
	}
	.colorgreen1 {
		@apply text-green-50;
	}
	.colorgreen2 {
		@apply text-green-100;
	}
	.colorgreen3 {
		@apply text-green-300;
	}
	.colorgreen4 {
		@apply text-green-500;
	}
	.colorgreen5 {
		@apply text-green-700;
	}
	.colorgreen6 {
		@apply text-green-900;
	}
	.coloremerald1 {
		@apply text-emerald-50;
	}
	.coloremerald2 {
		@apply text-emerald-100;
	}
	.coloremerald3 {
		@apply text-emerald-300;
	}
	.coloremerald4 {
		@apply text-emerald-500;
	}
	.coloremerald5 {
		@apply text-emerald-700;
	}
	.coloremerald6 {
		@apply text-emerald-900;
	}
	.colorteal1 {
		@apply text-teal-50;
	}
	.colorteal2 {
		@apply text-teal-100;
	}
	.colorteal3 {
		@apply text-teal-300;
	}
	.colorteal4 {
		@apply text-teal-500;
	}
	.colorteal5 {
		@apply text-teal-700;
	}
	.colorteal6 {
		@apply text-teal-900;
	}
	.colorcyan1 {
		@apply text-cyan-50;
	}
	.colorcyan2 {
		@apply text-cyan-100;
	}
	.colorcyan3 {
		@apply text-cyan-300;
	}
	.colorcyan4 {
		@apply text-cyan-500;
	}
	.colorcyan5 {
		@apply text-cyan-700;
	}
	.colorcyan6 {
		@apply text-cyan-900;
	}
	.colorsky1 {
		@apply text-sky-50;
	}
	.colorsky2 {
		@apply text-sky-100;
	}
	.colorsky3 {
		@apply text-sky-300;
	}
	.colorsky4 {
		@apply text-sky-500;
	}
	.colorsky5 {
		@apply text-sky-700;
	}
	.colorsky6 {
		@apply text-sky-900;
	}
	.colorblue1 {
		@apply text-blue-50;
	}
	.colorblue2 {
		@apply text-blue-100;
	}
	.colorblue3 {
		@apply text-blue-300;
	}
	.colorblue4 {
		@apply text-blue-500;
	}
	.colorblue5 {
		@apply text-blue-700;
	}
	.colorblue6 {
		@apply text-blue-900;
	}
	.colorindigo1 {
		@apply text-indigo-50;
	}
	.colorindigo2 {
		@apply text-indigo-100;
	}
	.colorindigo3 {
		@apply text-indigo-300;
	}
	.colorindigo4 {
		@apply text-indigo-500;
	}
	.colorindigo5 {
		@apply text-indigo-700;
	}
	.colorindigo6 {
		@apply text-indigo-900;
	}
	.colorviolet1 {
		@apply text-violet-50;
	}
	.colorviolet2 {
		@apply text-violet-100;
	}
	.colorviolet3 {
		@apply text-violet-300;
	}
	.colorviolet4 {
		@apply text-violet-500;
	}
	.colorviolet5 {
		@apply text-violet-700;
	}
	.colorviolet6 {
		@apply text-violet-900;
	}
	.colorpurple1 {
		@apply text-purple-50;
	}
	.colorpurple2 {
		@apply text-purple-100;
	}
	.colorpurple3 {
		@apply text-purple-300;
	}
	.colorpurple4 {
		@apply text-purple-500;
	}
	.colorpurple5 {
		@apply text-purple-700;
	}
	.colorpurple6 {
		@apply text-purple-900;
	}
	.colorfuchsia1 {
		@apply text-fuchsia-50;
	}
	.colorfuchsia2 {
		@apply text-fuchsia-100;
	}
	.colorfuchsia3 {
		@apply text-fuchsia-300;
	}
	.colorfuchsia4 {
		@apply text-fuchsia-500;
	}
	.colorfuchsia5 {
		@apply text-fuchsia-700;
	}
	.colorfuchsia6 {
		@apply text-fuchsia-900;
	}
	.colorpink1 {
		@apply text-pink-50;
	}
	.colorpink2 {
		@apply text-pink-100;
	}
	.colorpink3 {
		@apply text-pink-300;
	}
	.colorpink4 {
		@apply text-pink-500;
	}
	.colorpink5 {
		@apply text-pink-700;
	}
	.colorpink6 {
		@apply text-pink-900;
	}
	.colorrose1 {
		@apply text-rose-50;
	}
	.colorrose2 {
		@apply text-rose-100;
	}
	.colorrose3 {
		@apply text-rose-300;
	}
	.colorrose4 {
		@apply text-rose-500;
	}
	.colorrose5 {
		@apply text-rose-700;
	}
	.colorrose6 {
		@apply text-rose-900;
	}
</style>

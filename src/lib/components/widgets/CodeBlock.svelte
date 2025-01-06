<!-- @migration-task Error while migrating Svelte code: Encountered an export declaration pattern that is not supported for automigration. -->
<script lang="ts">
	import { Container } from '../ui';
	import type { Radius, Size, Lang } from '../types';
	import Highlight from 'svelte-highlight';
    import gruvbox from 'svelte-highlight/styles/atom-one-dark';

	// languages
	import { javascript } from 'svelte-highlight/languages/javascript';
	import { typescript } from 'svelte-highlight/languages/typescript';
	import { css } from 'svelte-highlight/languages/css';
	import { python } from 'svelte-highlight/languages/python';
	import { bash } from 'svelte-highlight/languages/bash';

	export let { radius, size, code, lang, id } = {
		radius: 'none' as Radius,
		size: 'auto' as Size,
		code: 'console.log("Hello World")' as string,
		lang: 'js' as Lang,
		id: null as string | null
	}

	const setLang = (lang: Lang) => {
		const languages = {
			js: javascript,
			ts: typescript,
			css: css,
			py: python,
			bash: bash
		};
		return languages[lang];
	};
</script>

<svelte:head>
	{@html gruvbox}
</svelte:head>

<Container {id} {radius} {size} tailwindClass="w-full overflow-auto">
	<Highlight language={setLang(lang)} {code} />
</Container>

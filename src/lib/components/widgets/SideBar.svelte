<script lang="ts">
	import { page } from '$app/stores';
	import { Link } from '../ui';

	export let tailwindClass = '' as string;
</script>

<nav class={`flex flex-col gap-4 px-12 py-6 ${tailwindClass}`}>
	<ul class="list-disc flex flex-col gap-4">
		<li class="text-[#858688]">
			<Link
				color={$page.url.pathname === '/products/instagrapy' ? 'white' : 'gray'}
				href="/products/instagrapy"
				size="md"
				underline="hover"
			>
				Quick start
			</Link>
		</li>
		<li class="text-[#858688]">
			<Link
				color={$page.url.pathname === '/products/instagrapy/install' ? 'white' : 'gray'}
				href="/products/instagrapy/install"
				size="md"
				underline="hover"
			>
				Installation
			</Link>
		</li>
		<li class="text-[#858688]">
			<Link
				color={$page.url.pathname === '/products/instagrapy/api' ? 'white' : 'gray'}
				href="/products/instagrapy/api"
				size="md"
				underline="hover"
			>
				API
			</Link>
		</li>
	</ul>
</nav>

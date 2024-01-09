<script lang="ts">
	import { Container, Text, Link } from '../ui';

	export let tailwindClass = '' as string;

	type Links = {
		slug: string;
		href: string;
		sublinks?: { slug: string; href: string }[];
	};

	export let links: Links[] = [
		{
			slug: 'Link example',
			href: '#link-example',
			sublinks: [
				{
					slug: 'Sublink example',
					href: '#sublink-example'
				}
			]
		},
		{
			slug: 'Link example',
			href: '#link-example',
			sublinks: [
				{
					slug: 'Sublink example',
					href: '#sublink-example'
				}
			]
		}
	];
</script>

<Container color="none" {tailwindClass}>
	<Text>On this page</Text>
	<ul class="list-disc flex flex-col mt-4 gap-2 pl-6">
		{#each links as link}
			<li class="text-[#858688]">
				<Link href={link.href} color="gray" size="sm">{link.slug}</Link>
				{#if link.sublinks}
					<ul class="pl-4">
						{#each link.sublinks as sublink}
							<li>
								<Link href={sublink.href} color="gray" size="sm">{sublink.slug}</Link>
							</li>
						{/each}
					</ul>
				{/if}
			</li>
		{/each}
	</ul>
</Container>

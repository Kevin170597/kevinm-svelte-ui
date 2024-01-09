<script lang="ts">
	import type { Radius } from '../types';

	export let { src, width, height, alt, radius, id } = {
		src: '' as string,
		width: '100%' as string,
		height: null as string | null,
		alt: 'image' as string,
		radius: 'none' as Radius,
		id: null as string | null
	};

	const setRadius = (radius: Radius) => {
		const radiusMap = {
			none: 'rounded-none',
			sm: 'rounded-sm',
			md: 'rounded-md',
			lg: 'rounded-lg',
			xl: 'rounded-xl',
			full: 'rounded-full'
		};
		return radiusMap[radius];
	};
</script>

<img
	{id}
	class={`${setRadius(radius)} object-cover`}
	style={`width: ${width}; height: ${height ? height : 'fit-content'};`}
	{src}
	{alt}
/>

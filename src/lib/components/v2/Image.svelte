<script lang="ts">
	interface Style {
		width?: number;
		height?: number;
        rounded?: "sm" | "md" | "lg" | "xl" | "full";
	}

	let { src, alt, s }: { src: string; alt?: string; s?: Style } = $props();
</script>

<img
    class="object-cover {s?.rounded ? `rounded${s.rounded}` : ''}"
	{src}
	{alt}
	style={`width: ${s?.width ? s?.width : '100%'}; height: ${s?.height ? s.height : 'fit-content'};`}
/>

<style lang="postcss">
    .roundedsm {
        @apply rounded-sm;
    }
    .roundedmd {
        @apply rounded-md;
    }
    .roundedlg {
        @apply rounded-lg;
    }
    .roundedxl {
        @apply rounded-xl;
    }
    .roundedfull {
        @apply rounded-full;
    }
</style>

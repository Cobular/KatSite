<script lang="ts">
	import type { ImageDatum } from 'src/image_data'
	import type { DisplayModal } from '../Grid/ImageModalGrid.svelte'

	export let imageDatum: ImageDatum
	export let onClickProp: DisplayModal
</script>

<div
	class="image"
	style={`
		background-image: url(${imageDatum.url}); 
		background-position-x: ${imageDatum.crop.x}; 
		background-position-y: ${imageDatum.crop.y};
		`}
	role="img"
	on:click={() => onClickProp(imageDatum)}
	alt={imageDatum.alt}
/>

<style>
	.image {
		padding-top: 100%; /* 1:1 Aspect Ratio */

		/* Image Management */
		background-size: cover;
		background-repeat: no-repeat;

		cursor: pointer;
    transition: all 0.1s ease-in-out;
	}

  .image:hover {
    transform: scale(1.05);
  }
</style>

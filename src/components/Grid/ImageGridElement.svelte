<script lang="ts">
  import type { ImageDatum } from 'src/image_data'
  import type { DisplayModal } from '../Grid/ImageModalGrid.svelte'

  export let imageDatum: ImageDatum
  export let onClickProp: DisplayModal

  function background_image_creator(url: string) {
    return `
    background-image: url(${url}.large.jpg); 
    background-image: -webkit-image-set(
      url(${url}.large.jpg) 3x,
      url(${url}.small.jpg) 1x);
    background-image: image-set(
      url(${url}.large.jpg) 3x,
      url(${url}.small.jpg) 1x);
    `
  }
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
  class="image"
  style={`
		${background_image_creator(imageDatum.url)} 
		background-position-x: ${imageDatum.crop.x}; 
		background-position-y: ${imageDatum.crop.y};
    position: relitave;
		`}
  role="img"
  on:click={() => onClickProp(imageDatum)}
  on:mouseover={() => fetch(imageDatum.url)}
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

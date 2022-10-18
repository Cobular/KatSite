<script lang="ts">
  import { GraphicImageData } from '../image_data'
  import ImageModalGrid from '../components/Grid/ImageModalGrid.svelte'
</script>

<svelte:head>
  <meta name='description' content='A gallery of some of my graphical works!'/>
</svelte:head>

<main>
  <ImageModalGrid image_data={GraphicImageData}/>
</main>

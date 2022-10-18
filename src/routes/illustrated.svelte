<script lang="ts">
  import { IllustrativeImageData } from '../image_data'
  import ImageModalGrid from '../components/Grid/ImageModalGrid.svelte'
</script>

<svelte:head>
  <meta name='description' content='A gallery of some of my illustrated works!'/>
</svelte:head>

<main>
  <ImageModalGrid image_data={IllustrativeImageData}/>
</main>

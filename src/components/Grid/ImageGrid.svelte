<script lang="ts">
  import ImageGridElement from './ImageGridElement.svelte'

  import type { DisplayModal } from '../Grid/ImageModalGrid.svelte'

  import type { ImageDatum } from '../../image_data'

  export let image_data: ImageDatum[];
  export let displayImageModalFunc: DisplayModal
</script>

<div id="grid">
  {#each image_data as row}
    <ImageGridElement imageDatum={row} onClickProp={displayImageModalFunc} />
  {/each}
</div>

<style>
  #grid {
    /* Grid */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    row-gap: 20px;
    column-gap: 20px;

    background-color: white;
    padding: 10px;
    margin: 0;
    width: 100%;

    border-color: var(--theme-dark);
    border-width: 3px;
    border-style: solid;
  }
</style>

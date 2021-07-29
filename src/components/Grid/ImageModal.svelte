<script lang="ts">
  import Zoom from 'svelte-zoom'

  import type { ImageDatum } from 'src/image_data'

  export let showModal: boolean
  export let imageData: ImageDatum
  export let hideModalFunc: CallableFunction

  let zoom

  function handleKeydown(event) {
    if (event.key == 'Escape') hideModalFunc()
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<div>
  {#if showModal}
    <div id="modal" on:click={() => hideModalFunc()}>
      <div id="modal-inner">
		<img src={imageData.url} alt={imageData.alt} />
      </div>
    </div>
  {/if}
</div>

<style>
  #modal {
    /* Modal Things */
    position: fixed; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
    z-index: 3; /* Specify a stack order in case you're using a different order for other elements */
  }

  #modal-inner {
    width: 100%;
    height: 100%;

    /* Flexbox things */
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    max-width: 90%;
    max-height: 90%;
  }
</style>

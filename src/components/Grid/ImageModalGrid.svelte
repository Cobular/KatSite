<script context="module" lang="ts">
  export interface DisplayModal {
    (data: ImageDatum): void
  }
</script>

<script lang="ts">
  import ImageGrid from './ImageGrid.svelte'
  import ImageModal from './ImageModal.svelte'
  import type { ImageDatum } from 'src/image_data'

  var showModal = false
  var modalInformation: ImageDatum = undefined

  function displayModal(data: ImageDatum) {
    showModal = true
    modalInformation = data
    console.log(data.url)
  }

  function hideModal() {
    showModal = false
    modalInformation = undefined
  }
</script>

<div class="content wide">
  <ImageGrid displayImageModalFunc={displayModal} />
  <ImageModal {showModal} imageData={modalInformation} hideModalFunc={hideModal} />
</div>

<style>
  .content {
    max-width: 900px;
    margin: auto;
    margin-top: 20px;
    background-color: white;
  }

  .content.wide {
    max-width: 1150px;
  }
</style>

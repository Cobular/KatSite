<script>
  export let showOnPx = 150
  let hidden = true

  function goTop() {
    document.body.scrollIntoView()
  }

  function scrollContainer() {
    return document.documentElement || document.body
  }

  function handleOnScroll() {
    if (!scrollContainer()) {
      return
    }

    if (scrollContainer().scrollTop > showOnPx) {
      hidden = false
    } else {
      hidden = true
    }
  }
</script>

<svelte:window on:scroll={handleOnScroll} />

<div class="back-to-top" on:click={goTop} class:hidden>Back to Top</div>

<style>
  .back-to-top {
    opacity: 0.9;
    transition: opacity 0.5s, visibility 0.5s;
    position: fixed;
    z-index: 99;
    right: 15px;
    bottom: 15px;
    user-select: none;
    color: white;
    background-color: var(--theme-dark);
    padding: 10px;
    border-radius: 4px;
  }

  .back-to-top.hidden {
    opacity: 0;
    visibility: hidden;
  }
</style>

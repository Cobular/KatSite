<script lang="ts">
  import Footer from '../components/Footer.svelte'
  import Navigation from '../components/Navigation.svelte'
</script>

<Navigation />

<slot />

<Footer />

<style>
  :global(*) {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: var(--theme-dark);
  }

  :global(body) {
    margin: 0;
    background-image: url('/img/background.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  :global(:root) {
    --background-color: white;
    --theme-light: #9f9f9f;
    --theme-dark: #434343;
  }

  :global(h1) {
    font-weight: 400;
  }

  :global(img) {
    max-width: 100%;
  }

  .link {
    border-right: #434343;
    border-right-width: 1px;
    border-right-style: solid;
    margin-right: 5px;
    padding-right: 5px;
    font-size: 18px;
  }

  .link:last-of-type {
    border-right-style: none;
  }
</style>

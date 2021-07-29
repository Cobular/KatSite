<script lang="ts">
  import BackToTop from '../components/BackToTop.svelte'
  import Footer from '../components/Footer.svelte'
  import Navigation from '../components/Navigation.svelte'
</script>

<Navigation />

<slot />

<Footer />
<BackToTop />

<style>
  :global(*) {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    color: var(--theme-dark);
    scroll-behavior: smooth;
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

  
</style>

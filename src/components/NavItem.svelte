<script lang="ts">
  import { page } from "$app/stores"

  export let label: string
  export let url: string

  function isCurrent(currentUrl: string) {
    return currentUrl.startsWith(url)
  }
</script>

<a href={url} class="nav-item link" class:selected={isCurrent($page.path)}>{label}</a>

<style>
  .selected {
    color: var(--theme-dark);
  }

  a {
    text-decoration: none;
    color: var(--theme-light);
  }

  a:hover {
    text-decoration: underline;
  }
</style>

<script lang="ts">
  import NavItem from './NavItem.svelte'

  interface NavDatum {
    label: string
    url: string
  }

  const navItems: NavDatum[] = [
    {
      label: 'Home',
      url: '/'
    },
    {
      label: 'Contact Info',
      url: '#contact'
    }
  ]
</script>

<nav>
  <a href="." id="title"><h1>Shushicate</h1></a>
  {#each navItems as item}
    <NavItem {...item} />
  {/each}
</nav>

<style>
  #title {
    margin-right: 20px;
    font-size: 24px;
  }

  nav {
    background-color: white;
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 10px;
    padding-bottom: 2px;
    align-items: baseline;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }

  a {
    text-decoration: none;
  }

  :global(.nav-item) {
    border-right: #434343;
    border-right-width: 1px;
    border-right-style: solid;
    margin-right: 5px;
    padding-right: 5px;
    font-size: 18px;
  }

  :global(.nav-item:last-of-type) {
    border-right-style: none;
  }
</style>

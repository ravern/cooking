<script lang="ts">
  import NavigationBar from "$lib/components/admin/NavigationBar.svelte";
  import "../../global.css";
</script>

<NavigationBar />
<main>
  <slot />
</main>

<style>
  main {
    margin: auto;
    max-width: 80ch;
    padding: 1.2rem;
  }
</style>

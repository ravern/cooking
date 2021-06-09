<script lang="ts">
  import "../global.css";

  import NavigationBar from "$lib/components/NavigationBar.svelte";
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

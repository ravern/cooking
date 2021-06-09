<script lang="ts">
  import type { Dish } from "$lib/api/db/models";
  import DishItem from "./components/DishItem.svelte";

  export let dishes: Dish[];
</script>

<div class="container">
  {#each dishes as dish}
    <DishItem {dish} />
    <DishItem {dish} />
  {/each}
</div>

<style>
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-gap: 1.2rem;
  }
</style>

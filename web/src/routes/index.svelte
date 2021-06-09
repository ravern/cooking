<script context="module" lang="ts">
  import type { LoadInput } from "@sveltejs/kit";

  export async function load({ page, fetch, session, context }: LoadInput) {
    const res = await fetch("/api/dishes");
    const body = await res.json();

    if (!res.ok) {
      return {
        status: res.status,
        error: new Error("failed to load dishes"),
      };
    }

    return {
      props: {
        dishes: body.data,
      },
    };
  }
</script>

<script lang="ts">
  import type { Dish } from "$lib/api/db/models";
  import DishGrid from "$lib/components/DishGrid/index.svelte";

  export let dishes: Dish[];
</script>

<svelte:head>
  <title>Jenny's Recipes</title>
</svelte:head>

<DishGrid {dishes} />

<script context="module" lang="ts">
  import type { LoadInput } from "@sveltejs/kit";

  export async function load({
    page: {
      params: { id },
    },
    fetch,
    session,
    context,
  }: LoadInput) {
    const res = await fetch(`/api/dishes/${id}`);
    const body = await res.json();

    if (!res.ok) {
      return {
        status: res.status,
        error: new Error("failed to load dishes"),
      };
    }

    return {
      props: {
        dish: body.data,
      },
    };
  }
</script>

<script lang="ts">
  import type { Dish as DishType } from "$lib/api/db/models";
  import Dish from "$lib/components/Dish.svelte";

  export let dish: DishType;
</script>

<svelte:head>
  <title>Jenny's Recipes</title>
</svelte:head>

<Dish {dish} />

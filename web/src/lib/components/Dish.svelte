<script lang="ts">
  import type { Dish } from "$lib/api/db/models";
  import Markdown from "svelte-markdown";

  export let dish: Dish;
</script>

<article>
  <div class="image-container">
    <div class="image-inner-container">
      <img src={dish.pictures[0]} alt={dish.name} />
    </div>
  </div>
  <div class="body-container markdown">
    <Markdown source={dish.body} />
  </div>
</article>

<style>
  .image-container {
    position: relative;
    border-radius: 0.4rem;
    overflow: hidden;
  }

  .image-container::before {
    content: "";
    padding-bottom: 100%;
    display: block;
  }

  .image-container > .image-inner-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .image-container > .image-inner-container > img {
    width: 100%;
    height: 100%;
  }

  .body-container {
    margin-top: 1.6rem;
  }
</style>

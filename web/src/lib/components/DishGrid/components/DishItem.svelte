<script lang="ts">
  import type { Dish } from "$lib/api/db/models";

  export let dish: Dish;
</script>

<div class="container">
  <div class="content-container">
    <img src={dish.pictures[0]} alt={dish.name} />
  </div>
  <a href={`/dishes/${dish.id}`}>
    <div class="hover-container">
      <h2>{dish.name}</h2>
    </div>
  </a>
</div>

<style>
  .container {
    position: relative;
    border-radius: 0.8rem;
    overflow: hidden;
  }

  .container::before {
    content: "";
    padding-bottom: 100%;
    display: block;
  }

  .container > .content-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .container > .content-container > img {
    width: 100%;
    height: 100%;
  }

  .container > a > .hover-container {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0;
    color: white;
    padding: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .container > a > .hover-container > h2 {
    font-size: 1.2rem;
    text-align: center;
  }

  .container > a > .hover-container:hover {
    opacity: 1;
    transition-duration: 0.2s;
  }
</style>

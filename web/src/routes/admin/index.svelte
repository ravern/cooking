<script>
  import { goto } from "$app/navigation";

  import Button from "$lib/components/Button.svelte";

  function handleAddDishClick() {
    goto("/admin/dishes/new");
  }

  function handleAddRecipeClick() {
    goto("/admin/recipes/new");
  }
</script>

<div class="container">
  <Button on:click={handleAddDishClick}>Add dish</Button>
  <Button on:click={handleAddRecipeClick}>Add recipe</Button>
</div>

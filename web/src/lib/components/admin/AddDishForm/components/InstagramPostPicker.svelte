<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import openAuthWindow from "$lib/helpers";

  function handleLoginClick(event) {
    event.preventDefault();
    openAuthWindow();
  }
</script>

<Button on:click={handleLoginClick}>Login to Instagram</Button>

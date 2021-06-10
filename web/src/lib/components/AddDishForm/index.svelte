<script lang="ts">
  import Button from "../Button.svelte";
  import RichTextEditor from "../RichTextEditor.svelte";
</script>

<form>
  <h1>Add new dish</h1>
  <h2>Step 1: Choose an Instagram post</h2>
  <div class="group" />
  <h2>Step 2: Fill in some details</h2>
  <div class="group">
    <input type="text" placeholder="Name" />
    <RichTextEditor />
  </div>
  <div class="group">
    <Button>Add dish</Button>
  </div>
</form>

<style>
  form > * + * {
    margin-top: 0.8rem;
  }

  form > h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  .group {
    margin-top: 1.2rem;
  }

  .group > input[type="text"] {
    font-family: inherit;
    font-size: 1rem;
  }
</style>

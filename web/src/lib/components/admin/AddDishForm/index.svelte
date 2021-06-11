<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import RichTextEditor from "$lib/components/admin/RichTextEditor.svelte";
  import InstagramPostPicker from "./components/InstagramPostPicker.svelte";
</script>

<form>
  <h1>Add new dish</h1>
  <hr />
  <div class="group">
    <h2>Step 1: Choose an Instagram post</h2>
    <div><InstagramPostPicker /></div>
  </div>
  <hr />
  <div class="group">
    <h2>Step 2: Fill in some details</h2>
    <input type="text" name="name" placeholder="Name" />
    <div><RichTextEditor /></div>
  </div>
  <hr />
  <div class="group">
    <Button>Add dish</Button>
  </div>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
  }

  form > * + * {
    margin-top: 1.2rem;
  }

  form > hr {
    border: 1px solid black;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
  }

  form > .group > h2 {
    font-size: 1.2rem;
    font-weight: 400;
  }

  form > .group > * + * {
    margin-top: 0.4rem;
  }

  .group > input[name="name"] {
    font-family: inherit;
    font-size: 2rem;
    font-weight: 900;
    border: none;
    width: 100%;
  }
</style>

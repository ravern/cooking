<script lang="ts">
  import ProsemirrorEditor from "prosemirror-svelte";

  import { createRichTextEditor, toPlainText } from "prosemirror-svelte/state";

  let editorState = createRichTextEditor("Description");

  function handleChange(event) {
    editorState = event.detail.editorState;
  }

  $: console.log(toPlainText(editorState));
</script>

<ProsemirrorEditor
  placeholder="Description"
  {editorState}
  on:change={handleChange}
/>

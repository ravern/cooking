<script lang="ts">
  import ProsemirrorEditor from "prosemirror-svelte";

  import { createRichTextEditor, toPlainText } from "prosemirror-svelte/state";

  let editorState = createRichTextEditor("Hello world!");

  function handleChange(event) {
    editorState = event.detail.editorState;
  }

  $: console.log(toPlainText(editorState));
</script>

<ProsemirrorEditor
  placeholder="Go ahead and type something"
  {editorState}
  on:change={handleChange}
/>

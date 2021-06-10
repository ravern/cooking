<script lang="ts">
  export let body: string;
</script>

<div class="body-container">
  {@html body}
</div>

<style>
  .body-container {
    margin-top: 0.8rem;
  }

  :global(.body-container > * + *) {
    margin-top: 0.8rem;
  }

  :global(.body-container > h1),
  :global(.body-container > h2),
  :global(.body-container > h3),
  :global(.body-container > h4),
  :global(.body-container > h5),
  :global(.body-container > h6) {
    margin-top: 1.6rem;
  }

  :global(.body-container > p) {
    line-height: 2;
  }

  :global(.body-container > ul),
  :global(.body-container > ol) {
    padding-left: 1.6rem;
  }

  :global(.body-container > ul > li),
  :global(.body-container > ol > li) {
    margin-top: 0.8rem;
  }
</style>

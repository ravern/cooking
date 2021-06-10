<button on:click><slot /></button>

<style>
  button {
    font-family: inherit;
    border: none;
    color: white;
    background-color: black;
    border-radius: 0.4rem;
    padding: 0.4rem 0.8rem;
    font-weight: 700;
    font-size: 1rem;
  }

  button:active {
    transform: scale(0.96);
  }
</style>

<script lang="ts">
  import svelteLogo from '../../assets/svelte.svg'
  import Counter from '../../lib/Counter.svelte'
</script>

<main>
  <div class="flex flex-row my-12 items-center justify-between"> 
    <a href="https://wxt.dev" target="_blank" rel="noreferrer">
      <img src="/wxt.svg" class="size-16 " alt="WXT Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="size-16 " alt="Svelte Logo" />
    </a>
  </div>
  <h1>WXT + Svelte in Dev</h1>

  <div class="my-4">
    <Counter />
  </div>

  <p class="read-the-docs">
    Click on the WXT and Svelte logos to learn more
  </p>
</main>

<!-- <style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #54bc4ae0);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style> -->

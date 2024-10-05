<script lang="ts">
  let count: number = 0
  const increment = () => {
    count += 1
  }
</script>

<button class="bg-blue-500 underline text-white" on:click={increment}>
  count is {count}
</button>

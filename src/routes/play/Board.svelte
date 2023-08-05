<script>
  import { createEventDispatcher } from 'svelte'
  import { squares } from '$lib/stores'
  import Square from './Square.svelte'

  const dispatch = createEventDispatcher()
</script>

<table class="w-full mt-16 mb-5 sm:mt-5">
  <tbody class="grid gap-y-5">
    {#each Array(3).fill(Array(3)) as _, index}
      <tr class="grid grid-cols-3 gap-x-5">
        <Square
          value={$squares[3 * index]}
          on:click={() => dispatch('play', 3 * index)}
        />
        <Square
          value={$squares[3 * index + 1]}
          on:click={() => dispatch('play', 3 * index + 1)}
        />
        <Square
          value={$squares[3 * index + 2]}
          on:click={() => dispatch('play', 3 * index + 2)}
        />
      </tr>
    {/each}
  </tbody>
</table>

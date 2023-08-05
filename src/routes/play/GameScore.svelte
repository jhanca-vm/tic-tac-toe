<script>
  import { derived } from 'svelte/store'
  import { page } from '$app/stores'
  import { mark } from '$lib/stores'

  export let x
  export let o
  export let ties

  const players = derived([page, mark], ([{ route }, $mark]) => {
    if (route.id === '/play/cpu') {
      return {
        x: $mark === 'X' ? 'You' : 'CPU',
        o: $mark === 'O' ? 'You' : 'CPU'
      }
    }

    return { x: `P${$mark === 'X' ? 1 : 2}`, o: `P${$mark === 'O' ? 1 : 2}` }
  })
</script>

<ul
  class="h-16 grid grid-cols-3 gap-x-5 font-medium text-xs text-center
    text-base-200 sm:h-18 sm:text-sm"
>
  <li class="bg-primary-200">
    X ({$players.x})
    <strong>{x}</strong>
  </li>
  <li class="bg-neutral-200">
    Ties
    <strong>{ties}</strong>
  </li>
  <li class="bg-secondary-200">
    O ({$players.o})
    <strong>{o}</strong>
  </li>
</ul>

<style lang="postcss">
  li {
    @apply p-3 rounded-xl sm:rounded-2xl;
  }

  strong {
    @apply block text-xl sm:text-2xl;
  }
</style>

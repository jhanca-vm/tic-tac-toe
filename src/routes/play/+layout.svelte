<script>
  import { onMount } from 'svelte'
  import { squares } from '$lib/stores'
  import Header from './Header.svelte'

  onMount(squares.reset)
</script>

<main class="sm:items-center">
  <section class="w-full max-w-md mx-auto">
    <Header />
    <slot />
  </section>
</main>

<script>
  import { isXTurn, squares } from '$lib/stores'
  import X from '$lib/icons/X.svelte'
  import O from '$lib/icons/O.svelte'
  import logo from '$lib/assets/logo.svg'
  import restart from '$lib/assets/icon-restart.svg'

  const icons = { X, O }
</script>

<header class="flex items-center justify-between">
  <a href="/">
    <img src={logo} alt="Tic Tac Toe Logo" width="72" height="32" />
  </a>
  <span
    class="w-24 flex items-center justify-center gap-x-2.5 bg-base-100
      shadow-sm shadow-base-300 text-sm sm:w-35 sm:text-base sm:gap-x-3"
  >
    <svelte:component
      this={icons[$isXTurn ? 'X' : 'O']}
      class="fill-current w-4 sm:w-5"
    />
    Turn
  </span>
  <button
    class="w-10 grid place-items-center bg-neutral-200 shadow-sm
      shadow-neutral-300 hover:bg-neutral-100 sm:w-13"
    on:click={squares.reset}
  >
    <img
      class="w-4 sm:w-5"
      src={restart}
      alt="Restart"
      width="20"
      height="20"
    />
  </button>
</header>

<style lang="postcss">
  span,
  button {
    @apply h-9 mb-[4px] rounded-md sm:h-12 sm:rounded-xl;
  }
</style>

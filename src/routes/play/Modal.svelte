<script>
  import { page } from '$app/stores'
  import { squares } from '$lib/stores'
  import X from '$lib/icons/X.svelte'
  import O from '$lib/icons/O.svelte'

  export let winner = null

  const icons = { X, O }

  let dialog
  let isVsCPU
  let message

  page.subscribe(({ route: { id } }) => (isVsCPU = id === '/play/cpu'))

  export function show(detail) {
    message = detail
    dialog.showModal()
  }
</script>

<dialog
  bind:this={dialog}
  class="w-full max-w-none {!winner ? 'py-15' : 'pt-10 pb-12'} px-6 bg-base-100
    outline-none backdrop:bg-black/50 {!winner ? 'sm:py-17' : 'sm:py-11'}"
  on:close={squares.reset}
>
  {#if message}
    <p
      class="mb-4 text-neutral-200 text-sm text-center leading-none
        sm:text-[1rem]"
    >
      {message}
    </p>
  {/if}
  <div
    class="mb-6 flex items-center justify-center gap-x-2 text-2xl
      sm:text-[2.5rem] sm:gap-x-6"
    class:text-primary-200={winner === 'X'}
    class:text-secondary-200={winner === 'O'}
  >
    {#if !winner}
      <p class="text-neutral-200 leading-none">
        {isVsCPU ? 'Restart game?' : 'Round tied'}
      </p>
    {:else}
      <svelte:component this={icons[winner]} class="fill-current w-7 sm:w-16" />
      <p>Takes the round</p>
    {/if}
  </div>
  <div class="flex justify-center gap-x-4 text-base-200 leading-none">
    <a
      class="bg-neutral-200 shadow-sm shadow-neutral-300 hover:bg-neutral-100"
      href="/"
    >
      {isVsCPU && !winner ? 'No, cancel' : 'Quit'}
    </a>
    <button
      class="bg-secondary-200 shadow-sm shadow-secondary-300 uppercase
        tracking-[inherit] hover:bg-secondary-100"
      on:click={() => dialog.close()}
    >
      {isVsCPU && !winner ? 'Yes, restart' : 'Next round'}
    </button>
  </div>
</dialog>

<style lang="postcss">
  a,
  button {
    @apply mb-[4px] p-4 rounded-xl transition-colors;
  }
</style>

<script>
  import { mark } from '$lib/stores'
  import X from '$lib/icons/X.svelte'
  import O from '$lib/icons/O.svelte'
  import logo from '$lib/assets/logo.svg'
</script>

<main class="place-items-center">
  <section class="w-full max-w-md text-center">
    <img class="mx-auto" src={logo} alt="" width="72" height="32" />
    <div
      class="mt-8 mb-[8px] p-6 bg-base-100 rounded-2xl shadow shadow-base-300
        sm:mt-10"
    >
      <h1>Pick player 1's mark</h1>
      <div
        class="h-18 grid grid-cols-2 mt-6 mb-4 p-2.5 bg-base-200 rounded-3xl"
      >
        <input
          class="peer/x"
          type="radio"
          id="x"
          bind:group={$mark}
          value="X"
        />
        <label
          class="peer-checked/x:bg-neutral-200 peer-checked/x:text-base-200"
          for="x"
        >
          <X class="fill-current w-8 transition-colors duration-75" />
        </label>
        <input
          class="peer/o"
          type="radio"
          id="o"
          bind:group={$mark}
          value="O"
        />
        <label
          class="peer-checked/o:bg-neutral-200 peer-checked/o:text-base-200"
          for="o"
        >
          <O class="fill-current w-8 transition-colors duration-75" />
        </label>
      </div>
      <p class="font-medium text-sm opacity-50">Remember: X goes first</p>
    </div>
    <nav class="grid gap-y-4 text-base-200 sm:gap-y-5 sm:text-xl">
      <a
        class="mt-8 bg-secondary-200 shadow shadow-secondary-300
          hover:bg-secondary-100 sm:mt-10"
        href="/play/cpu"
      >
        New game (vs CPU)
      </a>
      <a
        class="bg-primary-200 shadow shadow-primary-300 hover:bg-primary-100"
        href="/play/player"
      >
        New game (vs Player)
      </a>
    </nav>
  </section>
</main>

<style lang="postcss">
  input {
    @apply hidden;
  }

  label,
  a {
    @apply grid place-items-center transition-colors;
  }

  label {
    @apply rounded-xl hover:bg-neutral-200/5;
  }

  a {
    @apply h-12 mb-[8px] rounded-2xl sm:h-15;
  }
</style>

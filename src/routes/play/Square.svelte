<script>
  import { isXTurn } from '$lib/stores'
  import X from '$lib/icons/X.svelte'
  import O from '$lib/icons/O.svelte'
  import xOutline from '$lib/assets/icon-x-outline.svg'
  import oOutline from '$lib/assets/icon-o-outline.svg'

  export let value

  const icons = {
    X: { component: X, fill: 'fill-primary-200' },
    O: { component: O, fill: 'fill-secondary-200' }
  }
</script>

<td
  class="group mb-[8px] aspect-square grid place-items-center bg-base-100
    rounded-xl shadow shadow-base-300"
  class:cursor-pointer={!value}
  on:click
>
  <svelte:component
    this={icons[value]?.component}
    class="{icons[value]?.fill} w-10 sm:w-16"
  />
  {#if !value}
    {@const size = $isXTurn ? 64 : 66}
    <img
      class="hidden w-10 group-hover:block sm:w-16"
      src={$isXTurn ? xOutline : oOutline}
      alt=""
      width={size}
      height={size}
    />
  {/if}
</td>

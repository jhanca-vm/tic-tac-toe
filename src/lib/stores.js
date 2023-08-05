import { writable } from 'svelte/store'

export const mark = writable('O')

export const isXTurn = (() => {
  const { set, subscribe, update } = writable(true)

  return {
    subscribe,
    toggle: () => update(value => !value),
    reset: () => set(true)
  }
})()

export const squares = (() => {
  const { set, subscribe, update } = writable(Array(9).fill(null))

  return {
    subscribe,
    setValue: (index, value) => update(values => values.with(index, value)),
    reset: () => {
      set(Array(9).fill(null))
      isXTurn.reset()
    }
  }
})()

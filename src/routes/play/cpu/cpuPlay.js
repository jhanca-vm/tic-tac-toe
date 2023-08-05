import { WINNING_COMBINATIONS } from '$lib/constants'

export default function cpuPlay(squares, cpuMark) {
  const isNull = value => squares[value] === null

  const findWinningCombination = mark => {
    return WINNING_COMBINATIONS.find(combination => {
      const [a, b, c] = combination
      const isMark = index => squares[index] === mark

      return combination.some(isNull) && isMark(a) + isMark(b) + isMark(c) === 2
    })
  }

  const winnigCombination = findWinningCombination(cpuMark)

  if (winnigCombination) return winnigCombination.find(isNull)

  const playerMark = cpuMark === 'O' ? 'X' : 'O'
  const playerWinnigCombination = findWinningCombination(playerMark)

  if (playerWinnigCombination) return playerWinnigCombination.find(isNull)

  const emptySquares = squares.reduce((accumulator, currentValue, index) => {
    return currentValue ? accumulator : accumulator.concat(index)
  }, [])

  return emptySquares[Math.floor(Math.random() * emptySquares.length)]
}

import { WINNING_COMBINATIONS } from '$lib/constants'

export default function checkWinner(squares) {
  const result = WINNING_COMBINATIONS.find(([a, b, c]) => {
    return squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
  })

  return result ? squares[result[0]] : null
}

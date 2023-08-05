<script>
  import { isXTurn, mark, squares } from '$lib/stores'
  import checkWinner from '../checkWinner'
  import Board from '../Board.svelte'
  import GameScore from '../GameScore.svelte'
  import Modal from '../Modal.svelte'

  let modal
  let winner = null
  let x = 0
  let ties = 0
  let o = 0

  function handlePlay({ detail }) {
    if (!$squares[detail]) {
      squares.setValue(detail, $isXTurn ? 'X' : 'O')
      isXTurn.toggle()

      const { length } = $squares.filter(value => value)

      winner = checkWinner($squares)

      if (winner) {
        winner === 'X' ? x++ : o++
        modal.show(`Player ${winner === $mark ? 1 : 2} wins!`)
      }

      if (length === 9 && !winner) {
        ties++
        modal.show()
      }
    }
  }
</script>

<Board on:play={handlePlay} />
<GameScore {x} {ties} {o} />
<Modal bind:this={modal} {winner} />

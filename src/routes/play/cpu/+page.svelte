<script>
  import { beforeUpdate } from 'svelte'
  import { isXTurn, mark, squares } from '$lib/stores'
  import checkWinner from '../checkWinner'
  import cpuPlay from './cpuPlay'
  import Board from '../Board.svelte'
  import GameScore from '../GameScore.svelte'
  import Modal from '../Modal.svelte'

  let modal
  let emptySquares
  let winner = null
  let x = 0
  let ties = 0
  let o = 0

  squares.subscribe(values => {
    emptySquares = values.filter(value => !value).length
  })

  function play() {
    winner = checkWinner($squares)

    if (winner) {
      winner === 'X' ? x++ : o++
      modal.show(winner === $mark ? 'You won!' : 'Oh no, you lost…')
    }

    if (!winner && !emptySquares) {
      ties++
      modal.show()
    }
  }

  function handleCpuPlay() {
    const cpuMark = $mark === 'O' ? 'X' : 'O'

    squares.setValue(cpuPlay($squares, cpuMark), cpuMark)

    play()
  }

  function handlePlayerPlay({ detail }) {
    if (!$squares[detail]) {
      squares.setValue(detail, $mark)
      play()

      if (!winner && emptySquares) handleCpuPlay()
    }
  }

  beforeUpdate(() => {
    if ($mark === 'O' && emptySquares === 9) {
      squares.setValue(cpuPlay($squares), 'X')
      isXTurn.toggle()
    }
  })
</script>

<Board on:play={handlePlayerPlay} />
<GameScore {x} {ties} {o} />
<Modal bind:this={modal} {winner} />

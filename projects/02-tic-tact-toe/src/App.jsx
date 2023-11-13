import { useState } from "react";
import { Square } from "./components/Square.jsx";
import { TURNS, WINNER_COMBOS } from "./constants.js";
import { WinnerModal } from "./components/WinnerModal.jsx";


//acordate que app tambien es un componente, en este caso es el componente padre de los demas
function App() {

  //Tablero para llenar con x y o usando UseState
  //se puede inicializar el valor del useState usando una funcion
  const [board, setBoard] = useState( () => {
    const boardFromStorage = window.localStorage.getItem('board');
    return boardFromStorage ? JSON.parse(boardFromStorage) :  Array(9).fill(null)
  })

  //se genera otro estado para saber de quien es el turno
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X;
  });

  //se genera un nuevo estado para saber quien es el ganador
  // el null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras
    //para ver si x u o gano
    for (const combo of WINNER_COMBOS){
      const [a, b, c] = combo;
      if (
        boardToCheck[a] && 
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }

    //en caso de no haber ganador, devuelve null
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)


    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const checkEndGame = (newBoard) => {
    //Revisamos si hay un empate
    //si no hay mas espacios vacios en el tablero
    return newBoard.every((square) => square != null);

  }

  const updateBoard = (index) => {

    //no actualizamos la posicion si ya tiene algo
    if(board[index] || winner) return

    //se actualiza el tablero
    const newBoard = [... board];
    newBoard[index] = turn;
    setBoard(newBoard)

    //cambiamos el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    //se guarda la partida.
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);

    //revisamos si hay una ganador
    const newWinner = checkWinner(newBoard);

    if(newWinner){
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false); //empate

    }
    
  }

  return (
    <main className='board'>
      <h1>Tateti</h1>
      <button onClick={resetGame}>reset game</button>
      <section className="game">
        {
          board.map((_, index) => {
            return (
             
              <Square
                key={index} 
                index={index}
                //De esta forma le pasamos la funcion, no la ejecucion de la funcion, tener en cuenta la diferencia
                updateBoard={updateBoard}
              >

                {board[index]}
              

              </Square>
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn == TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O}>
          {TURNS.O}
        </Square>

      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
     

    </main>
  )
}

export default App

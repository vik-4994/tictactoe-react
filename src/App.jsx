import Player from "./components/Player.jsx";
import GameBoard from "./components/GameBoard.jsx";
import Log from "./components/Log.jsx";
import {useState} from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
      setActivePlayer(currentPlayer =>
          currentPlayer === 'X' ? 'O' : 'X')
      setGameTurns(currentTurns => {
          let currentPlayer = 'X';

          if (currentTurns.length > 0 && currentTurns[0].player === 'X') {
              currentPlayer = 'O';
          }

          const updatedTurns = [{ square: {row: rowIndex, col: colIndex }, player: currentPlayer } , ...currentTurns];
          return updatedTurns;
      });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>

        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>

      {/*<Log log={gameTurns}/>*/}
    </main>
  )
}

export default App

import {useState} from 'react';

export default function GameBoard() {
    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleClick(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) => {
            const updatedGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedGameBoard[rowIndex][colIndex] = "X";
            return updatedGameBoard;
        });
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return (
                  <li key={rowIndex}>
                      <ol>
                      {row.map((playerSymbol, colIndex) => {
                          return <li key={colIndex}>
                              <button onClick={() => handleClick(rowIndex, colIndex)}>{playerSymbol}</button>
                          </li>;
                      })}
                      </ol>
                  </li>
                );
            })}
        </ol>
    )
}
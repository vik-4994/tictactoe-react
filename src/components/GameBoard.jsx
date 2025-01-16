export default function GameBoard({ onSelectSquare, turns }) {
    const initialGameBoard = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];

    let gameBoard = initialGameBoard;

    for (const turn of turns) {
        gameBoard[turn.square.row][turn.square.col] = turn.player;
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => {
                return (
                  <li key={rowIndex}>
                      <ol>
                      {row.map((playerSymbol, colIndex) => {
                          return <li key={colIndex}>
                              <button onClick={() => onSelectSquare(rowIndex, colIndex)}>{playerSymbol}</button>
                          </li>;
                      })}
                      </ol>
                  </li>
                );
            })}
        </ol>
    )
}
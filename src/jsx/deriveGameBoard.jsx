const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const deriveGameBoard = (gameTurns) => {
  var gameBoard = [...initialGameBoard.map((array) => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

  return gameBoard;
};

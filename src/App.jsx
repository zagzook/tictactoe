import Player from './components/Players/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';
import Log from './components/Log';
import GameOver from './components/GameOver';
import { deriveWinner } from './jsx/deriveWinner';
import { deriveGameBoard } from './jsx/deriveGameBoard';

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

const deriveActivePlayer = (gameTurns) => {
  var currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
};

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = deriveActivePlayer(gameTurns);
  const gameBoard = deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameBoard, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];
      return updatedTurns;
    });
  };

  const rematchHandler = () => {
    setGameTurns([]);
  };

  const playerNameChangeHandler = (symbol, newName) => {
    setPlayers((prePlayers) => {
      return {
        ...prePlayers,
        [symbol]: newName,
      };
    });
  };

  return (
    <main>
      <div id='game-container'>
        <ol
          id='players'
          className='highlight-player'>
          <Player
            player={PLAYERS.X}
            symbol='X'
            isActive={activePlayer === 'X'}
            onChangeName={playerNameChangeHandler}
          />
          <Player
            player={PLAYERS.O}
            symbol='O'
            isActive={activePlayer === 'O'}
            onChangeName={playerNameChangeHandler}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver
            winner={winner}
            onRematch={rematchHandler}
          />
        )}
        <GameBoard
          onSelectSquare={handleSelectSquare}
          board={gameBoard}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;

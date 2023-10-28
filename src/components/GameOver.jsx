const GameOver = ({ winner, winningPlayer, onRematch }) => {
  console.log('GameOver', winningPlayer);
  return (
    <div id='game-over'>
      <h2>Game Over!</h2>
      {winner && <p> {winner} won! </p>}
      {!winner && <p>Game is a Draw!!</p>}
      <button onClick={onRematch}>Rematch!</button>
    </div>
  );
};

export default GameOver;

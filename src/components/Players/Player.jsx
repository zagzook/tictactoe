import { useState } from 'react';

const Player = ({ player, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(player);
  const [isEditing, setIsEditing] = useState(false);
  const editingHandler = () => {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  };

  const changeHandler = (e) => {
    setPlayerName(e.target.value);
  };

  var editablePlayerName = <span className='player-name'>{playerName}</span>;

  if (isEditing) {
    editablePlayerName = (
      <input
        type='text'
        required
        value={playerName}
        onChange={changeHandler}
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {editablePlayerName}
        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={editingHandler}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;

import React, { useState } from 'react';

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
    const [palyerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing)
    }

    function handleChange(event){
        setPlayerName(event.target.value);
        if(isEditing){
           onChangeName(symbol, event.target.value);
        }
    }

    let editablePlayerName = <span className="player-name">{palyerName}</span>;

    if(isEditing){
        editablePlayerName= <input type="text" requrire value={palyerName} onChange={handleChange} />
    }palyerName

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player-info">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            
            <button
                onClick={handleEditClick}
            > 
            {isEditing ? "Save" : "Edit"}
            </button>
      
        </li>
    );
};

export default Player;
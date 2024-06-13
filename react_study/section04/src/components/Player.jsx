import React, {useState} from 'react';

const Player = ({initialName, symbol, isActive, onChangeName}) => {
    console.log(isActive)
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    
    function handleEditClick(){
        //setIsEditing(!isEditing); // 이 방식은 최신 상태 값을 보장하지 못할 수 있음(현재 상태 기반 업데이트)
        setIsEditing((editing) => !editing); //최신 상태 기반 업데이트
        if(isEditing) {    
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event){
        //console.log(event);
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    if(isEditing) {
        editablePlayerName = (<input type="text" required defaultValue={playerName}
            onChange={handleChange}
        />)
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>
                {isEditing ? "Save" : "Edit"} 
            </button>
        </li>
    );
};

export default Player;
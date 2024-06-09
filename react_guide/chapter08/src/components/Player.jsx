import { useState, useRef } from "react";

export default function Player() {  
    const playerName = useRef();
    const [enteredPlayerName, setEnteredPlayerName] = useState(null)

    function handlerClick(){
        setEnteredPlayerName(playerName.current.value);
        playerName.current.value ='';
    }

    return (
        <section id="player">
            <h2>Welcome  { enteredPlayerName ?? 'unknown entity'} </h2>
            <p>
                <input 
                    type="text" 
                    ref={playerName} 
                />
                <button onClick={handlerClick}>Set Name</button>
            </p>
        </section>
    );
}

import React, { useState } from 'react';

import Header from "./components/Header"
import Result from "./components/Result"
import UserInput from "./components/UserInput"

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment:1000,
        annualInvestment : 1200,
        expectedReturn : 6, 
        duration: 10,
    });

    function handlerChange(inputIdentifier, newValue){
        setUserInput(prevUserInput => {
            return{
                ...prevUserInput,
                [inputIdentifier] : +newValue
            }
        });
    }

    const inputIsValid = userInput.duration >= 1; 


    return (
        <>
            <Header />
            <UserInput 
                onChange={handlerChange}
                userInput={userInput}    
            />
            {!inputIsValid && <p className='center'>Please enter a duration greater than zero.</p>}
            {
                inputIsValid &&
                <Result 
                    input={userInput}
                />
            }
         

        </>
    )
}

export default App

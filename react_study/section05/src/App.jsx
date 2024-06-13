import { useState } from "react";

import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx"
import UserInput from "./components/UserInput.jsx"

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    });

    const inputIsValid = userInput.duration >= 1;


    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: Number(newValue)
            }
        })
    }


    return (
        <>
            <Header />
            <UserInput 
                userInput = {userInput}
                onChange={handleChange}
            />
            {inputIsValid && 
                <Results input = {userInput}/>
            }
            {!inputIsValid && 
                <p className="center">Please enter a duration greater than zero.</p>
            }

        </>
    )
}

export default App

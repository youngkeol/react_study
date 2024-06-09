import React, { useReducer } from "react";

function setCounterValue(state, action) {
    switch (action) {
        case "+":
            return state + 1;
        case "-":
            return state - 1;
        default:
            return 0;
    }
}

const MyReducer = () => {
    const [counter, setCounter] = useReducer(setCounterValue, 0);
    return (
        <div>
            <h2>MyReducer</h2>
            <p>현재 값 : {counter}</p>
            <button type="button" onClick={(e) => setCounter("+")}>
                +
            </button>
            <button type="button" onClick={(e) => setCounter("-")}>
                -
            </button>
            <button type="button" onClick={(e) => setCounter("0")}>
                초기화
            </button>
        </div>
    );
};

export default MyReducer;

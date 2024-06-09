import React, { useCallback, useState } from "react";

const MyCallback = () => {
    const [myText, setMyText] = useState("Hello");

    const onInputChange = useCallback((e) => {
        setMyText(e.currentTarget.value);
    }, []);

    return (
        <div>
            <h2>MyCallback</h2>
            <h3>{myText}</h3>
            <input
                type="text"
                placeholder="input.."
                onChange={onInputChange}
            ></input>
        </div>
    );
};

export default MyCallback;

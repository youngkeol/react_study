import React, { memo, useRef } from "react";
import styled from "styled-components";

const Box = styled.div`
    &.box1 {
        border: 1px solid black;
        margin: 10px auto;
        padding: 30px;
        text-align: center;
        width: auto;
    }

    &.box2 {
        border: 10px dotted red;
        margin: 10px auto;
        padding: 30px;
        text-align: center;
    }
`;

const Button = styled.input`
    margin: 0 5px;
`;

const StyleEx = memo(() => {
    const myBox = useRef();

    return (
        <div>
            <h2>StyleEx</h2>
            <Box className="box1" ref={myBox}>
                <p>Hello React</p>
            </Box>
            <Button
                type="button"
                value="폰트 변경(orange)"
                onClick={(e) => {
                    //myBox.current.style.color = "#f60";
                    myBox.current.style.setProperty("color", "#f60");
                    myBox.current.classList.add("box2");
                    myBox.current.classList.remove("box1");
                }}
            />
        </div>
    );
});

export default StyleEx;

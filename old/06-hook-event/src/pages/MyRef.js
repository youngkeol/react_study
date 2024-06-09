import React, { useRef } from "react";

import MyBox from "../components/MyBox";
//react에서 dom 해당 기능을 사용하기는 ㅎ방법
const MyRef = () => {
    const myDname = useRef();
    const myLoc = useRef();
    const myResult = useRef();

    const myBoxRef = useRef();
    return (
        <div>
            <h2>MyRef</h2>
            <div>
                <label htmlFor="dname">학과명</label>
                <input type="text" ref={myDname} id="dNane"></input>
            </div>

            <div>
                <label htmlFor="dname">학과위치</label>
                <input type="text" ref={myLoc} id="myLoc"></input>
            </div>
            <button
                onClick={(e) => {
                    console.log(myDname.current); //dom객체
                    console.log(myLoc.current); //dom객체

                    console.log(myDname.current.value);
                    console.log(myLoc.current.value);
                }}
            >
                클릭
            </button>

            <hr />
            <hr />

            <MyBox ref={myBoxRef} />
            <button
                onClick={() => {
                    myBoxRef.current.style.backgroundColor = "#f00";
                }}
            >
                RED
            </button>
            <button
                onClick={() => {
                    myBoxRef.current.style.backgroundColor = "#00f";
                }}
            >
                BLUE
            </button>
        </div>
    );
};

export default MyRef;

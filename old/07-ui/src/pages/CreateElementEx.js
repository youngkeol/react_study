import React, { memo, useRef, useCallback } from "react";
import ListContainer from "../components/ListContainer";

const CreateElementEx = memo(() => {
    const comment = useRef();
    const list = useRef();
    const css = { marginRight: "10px" };

    const onAppendChildClick = useCallback((e) => {
        const li = getItem("blue");

        list.current.appendChild(li);
    }, []);

    const onInsertBefore1Click = useCallback((e) => {
        const li = getItem("orange");

        list.current.insertBefore(li, null); //끝에 삽입
    }, []);

    const onInsertBefore2Click = useCallback((e) => {
        const li = getItem("pink");

        list.current.insertBefore(li, document.querySelector("li:first-child")); //맨앞에 삽입
    }, []);

    const getItem = useCallback((color) => {
        const li = document.createElement("li");
        li.classList.add("item", color);
        li.innerHTML = comment.current.value;

        li.addEventListener("click", (e) => {
            e.currentTarget.remove();
        });

        return li;
    }, []);
    return (
        <div>
            <h2>CreateElementEx</h2>
            <input type="text" style={css} ref={comment} />
            <button type="button" style={css} onClick={onAppendChildClick}>
                appendChild{" "}
            </button>
            <button type="button" style={css} onClick={onInsertBefore1Click}>
                insertBefore1{" "}
            </button>

            <button type="button" style={css} onClick={onInsertBefore2Click}>
                insertBefore2{" "}
            </button>

            <ListContainer ref={list}></ListContainer>
            <hr />
        </div>
    );
});

export default CreateElementEx;

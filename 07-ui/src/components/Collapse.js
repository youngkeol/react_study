import React, { memo, useCallback } from "react";
import { styled } from "styled-components";

const CollapseContainer = styled.div`
    .collapse-title {
        background-color: #777;
        color: #fff;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        font-weight: normal;
        margin: 0;
        text-align: left;
        outline: none;
        font-size: 15px;

        &:hover,
        &.active {
            background-color: #555;
            font-weight: bold;
        }
    }

    .collapse-content {
        padding: 0 18px;
        background-color: #f1f1f1;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;

        p {
            margin: 0;
        }
    }
`;

const Collapse = memo(({ title, content }) => {
    const onCollapseTitleClick = useCallback((e) => {
        const current = e.currentTarget;
        current.classList.toggle("active");

        const content = current.parentElement.querySelector(
            ".collapse-content"
        );
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    }, []);

    return (
        <CollapseContainer>
            <h2 className="collapse-title" onClick={onCollapseTitleClick}>
                {" "}
                {title}
            </h2>
            <div className="collapse-content">
                <p>{content}</p>
            </div>
        </CollapseContainer>
    );
});

export default Collapse;

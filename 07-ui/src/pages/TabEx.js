import React, { memo, useState, useCallback, useMemo } from "react";
import styled from "styled-components";
import classnames from "classnames";

const TabContainer = styled.div`
    .tab-button-group {
        overflow: hidden;
        border: 1px solid #ccc;
        background-color: #f1f1f1;
        display: flex;

        .tab-button {
            display: block;
            background-color: inherit;
            min-width: 100px;
            border: none;
            outline: none;
            padding: 14px 16px;
            font-size: 17px;
            color: #222;
            text-align: center;
            text-decoration: none;
            cursor: pointer;
            transition: 0.3s;

            &:hover {
                background-color: #ddd;
            }
            &.active {
                background-color: #ccc;
            }
        }
    }
`;

const tabcContent = [
    {
        id: "newyaork",
        subject: "NewYork",
        content: "NewYork ...",
    },
    {
        id: "london",
        subject: "London",
        content: "London ...",
    },
    {
        id: "seoul",
        subject: "Seoul",
        content: "Seoul ...",
    },
];

const TabEx = memo(() => {
    const [tabIndex, setTabIndex] = useState(0);

    const onTabButtonClick = useCallback((e) => {
        e.preventDefault();
        const current = e.currentTarget;
        const href = current.getAttribute("href");

        let currentIndex = tabcContent.findIndex((ele) => {
            return `#${ele.id}` === href;
        });

        setTabIndex(currentIndex);
    }, []);

    return (
        <div>
            <h2>TabEx{tabIndex}</h2>

            <TabContainer>
                <div className="tab-button-group">
                    {tabcContent.map((v, i) => {
                        const cls = classnames({
                            "tab-button": true,
                            active: i == tabIndex,
                        });
                        return (
                            <a
                                key={i}
                                className={cls}
                                href={`#${v.id}`}
                                onClick={onTabButtonClick}
                            >
                                {v.subject}
                            </a>
                        );
                    })}
                </div>
            </TabContainer>
        </div>
    );
});

export default memo(TabEx);

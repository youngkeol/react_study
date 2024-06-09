import React, { memo } from "react";
import Collapse from "../components/Collapse";
const content = [
    {
        title: "title1",
        content: "content1",
    },
    {
        title: "title2",
        content: "content2",
    },
    {
        title: "title3",
        content: "content3",
    },
];
const CollapseEx = memo(() => {
    return (
        <div>
            <h2>Collapese Ex</h2>

            {content.map(({ title, content }, i) => {
                return <Collapse key={i} title={title} content={content} />;
            })}
        </div>
    );
});

export default CollapseEx;

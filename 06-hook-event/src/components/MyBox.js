import React, { forwardRef } from "react";

const MyBox = forwardRef((props, ref) => {
    const containerStyle = {
        border: "1px solid black",
        height: "100px",
        width: "100px",
    };
    return <div style={containerStyle} ref={ref}></div>;
});

export default MyBox;

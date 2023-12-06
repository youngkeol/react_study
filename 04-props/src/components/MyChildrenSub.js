import React from 'react';

const MyChildrenSub = ({width, height, children}) => {
    const myStyle = {
        width: width + 'px',
        height: height + 'px',
        backgroundColor: '#eee'
    }

    return (
        <div>
            <h2>MyChildrenSub</h2>

            <div style={myStyle} >
                {children}
            </div>
            <div style={ {backgroundColor:'#eee'}}>
                {children}
            </div>
        </div>
    );
};

export default MyChildrenSub;
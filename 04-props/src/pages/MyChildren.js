import React from 'react';
import MyChildrenSub from '../components/MyChildrenSub';

const MyChildren = () => {
    return (
        <div>
            <MyChildrenSub width={400} height={100}>
                Hello World
            </MyChildrenSub>
            <MyChildrenSub width={300} height={80}>
                Hello React
            </MyChildrenSub>
        </div>
    );
};

export default MyChildren;
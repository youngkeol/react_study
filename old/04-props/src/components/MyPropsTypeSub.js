import React from 'react';

const MyPropsTypeSub = (props) => {
    const {name, age} = props;
    return (
        <div>
            이름은 ? {name} 
            나이는 ? {age}
        </div>
    );
};

export default MyPropsTypeSub;
import React from 'react';

const MyPropsSub = (props) => {



    return (
        <div>
            이름은 ? {props.name} 
            나이는 ? {props.age}
        </div>
    );

};


//디폴트 PROPS 
MyPropsSub.defaultProps = {
    name: '이름없음',
    age : 20
}

export default MyPropsSub;
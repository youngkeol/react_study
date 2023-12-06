import React from 'react';
import MyPropsTypeSub from '../components/MyPropsTypeSub';

const MyPropTypes = () => {
    return (
        <div>
            <h2>MyPropTypes</h2>
            <MyPropsTypeSub 
                name ='민호'
                age ='20'
            />
       
        </div>
    );
};



//props 전달되는 형식 지정
//오류시 콘솔오류로 출력됨
MyPropTypes.propType={
    name: MyPropTypes.string,
    age: MyPropTypes.number
}

export default MyPropTypes;
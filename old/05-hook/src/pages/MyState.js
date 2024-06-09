import React, { useState } from 'react';


const MyState = () => {
    const [myName, setMyName] = useState('');
    const [age, setAge]  = useState(30);

    const onMyNameChage = (e)=>{
        setMyName(e.currentTarget.value);
    }
    return (
        <div>
            <h2>MyState</h2>        
            <p>{myName}님은 {age}살입니다.</p>

            <hr/>
            <div>
                <label htmlFor='myNameInput'>이름 : </label>
                <input valu={myName} onChange={onMyNameChage}/>
            </div>
        </div>
    );
};

export default MyState;
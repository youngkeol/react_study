import React from 'react';

const Expr = () => {
    const name = 'react';
    const age = '20';
    const color = '#f00';
    const msg = '내용입니다.';


    return (
        <div>
            <h2>JSX 기본 표현식</h2>
            <p>{name}님</p>
            <p style={{marginTop: '10px', backgroundColor: color}}>
                {age} 살
            </p>
            <p>{msg}</p>
        </div>
    );
};

export default Expr;

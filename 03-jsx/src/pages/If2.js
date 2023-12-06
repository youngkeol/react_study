import React from 'react';

const If2 = () => {
    const isLogin = true;
    return (
        <div>
            <h1>If2</h1>
            {isLogin === true && <p>로그인 되었습니다.</p>}
        </div>
    );
};

export default If2;
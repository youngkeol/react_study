import React from 'react';

const If3 = () => {

    const articleList = undefined;
    return (
        <div>
            <h1>If3</h1>
            {articleList || <p>조회한 결과가 없습니다.</p>}
        </div>
    );
};

export default If3;
import React from 'react';

const Loop3 = () => {
    const seasons = ['봄', '여름', '가을', '겨울'];
    const ss= 's';

    return (
        <div>
            <ul>
                {seasons.length > 0 ? (
                   seasons.map((item, index)=>{
                    return <li key={index}>{item}</li>
                   })
                ) : (
                    <li>데이터가 없습니다.</li>
                )}


            </ul>
        </div>
    );
};

export default Loop3;
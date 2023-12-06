import React from 'react';

const Loop1 = () => {

    const createItemList  = (count) => {
        let li = [];
        for(let i = 0; i<count; i++){
            li.push(<li key={i}> Itme {i}</li>);
        }

        return li;
    }
    return (
        <div>
            <ul>
                {createItemList(4)}
            </ul>
        </div>
    );
};

export default Loop1;
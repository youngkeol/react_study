import React, { useState } from 'react';

interface IProps {
    word : IWord;
}

export interface IWord {
    id: string;
    day: number;
    eng: string;
    kor: string;
    isDone: boolean;
}


const Word = ({ word:w } : IProps) => {
    const [word, setWord] = useState(w);
    const [isShow, setIsShow] = useState(false);
    const [isDone, setIsDone] = useState(word.isDone);


    function toggleShow() {
        setIsShow(!isShow);
    }

    function toggleDone(){
        console.log(`http://localhost:3001/words/${w.id}`)
        fetch(`http://localhost:3001/words/${w.id}`, {
            method:'PUT',
            headers: {
                'content-Type' : 'application/json'
            },
            body : JSON.stringify({
                ...word,
                isDone : !isDone,
            }),
        }).then(res => {
            if(res.ok) {
                setIsDone(!isDone);
            }
        })
    }


    function del(){
        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/words/${w.id}`, {
                method: "DELETE"
            }).then(res => {
                if(res.ok) {
                    setWord({
                        ...word,
                        id:0
                    });
                }
            })
        }
    }


    if(word.id === 0) {
        return null;
    }

    return (
        <tr className={isDone? 'off' : ''}>
            <td>
                <input 
                    type="checkbox" 
                    checked={isDone}
                    onChange={toggleDone}
                />
            </td>
            <td>{word.eng}</td>
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow} >
                    {!isShow ? '뜻 숨기기' : '뜻 보기'}
                </button>
                <button onClick={del} className='btn_del'>삭제</button>
            </td>
        </tr>
    );
};

export default Word;
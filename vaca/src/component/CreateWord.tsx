import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import useFetch from '../hooks/useFetch.ts';
import { IDay } from './DayList';

const CreateWord = () => {
    const days :IDay[] = useFetch('http://localhost:3001/days');

    const dayRef = useRef<HTMLSelectElement>(null);
    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [isLoding, setIsLoding] = useState(false);


    function onSubmit(e : React.FormEvent){
        e.preventDefault();
        if(!isLoding && dayRef.current && engRef.current && korRef.current
            ){
            setIsLoding(true);
        
            const day = dayRef.current.value;
            const eng = engRef.current.value;
            const kor = korRef.current.value;

            fetch(`http://localhost:3001/words/`, {
                method:'POST',
                headers: {
                    'content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    day,
                    eng,
                    kor,
                    isDone : false,
                }),
            }).then(res => {
                if(res.ok) {
                    alert("생성이 완료 되었습니다.");
                    navigate(`/day/${day}`);
                    setIsLoding(false);
                }
            })
        }
    }



    return (
        <form onSubmit={onSubmit}> 
            <div className='input_area'>
                <label>Eng</label>
                <input type="text" placeholder='computer' ref={engRef}/>
            </div>
            <div className='input_area'>
                <label>Kor</label>
                <input type="text" placeholder='컴퓨터' ref={korRef}/>
            </div>
            <div className='input_area'>
                <label>Day</label>
                <select ref={dayRef}>
                    {
                        days.map(day=>(
                            <option key={day.id} value={day.day}>
                                {day.day}
                            </option>
                        ))
                    }
                </select>
            </div>
            <button
                style={{
                    opacity: isLoding ? 0.3:1,
                }}
            >{isLoding? "저장중" : "저장"}</button>
        </form>
    );
};

export default CreateWord;
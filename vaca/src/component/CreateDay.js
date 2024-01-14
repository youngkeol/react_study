import React from 'react';
import { useNavigate } from 'react-router';
import useFetch from '../hooks/useFetch.ts';

const CreateDay = () => {
    const days = useFetch('http://localhost:3001/days');
    const navigate = useNavigate();

    function addDay(e){
        e.preventDefault();

        fetch(`http://localhost:3001/days`, {
            method:'POST',
            headers: {
                'content-Type' : 'application/json'
            },
            body : JSON.stringify({
                day: days.length + 1
            }),
        }).then(res => {
            if(res.ok) {
                alert("생성이 완료 되었습니다.");
                navigate(`/`);
            }
        })
    }
    return (
        <div>
            <h2>현재 일수 : {days.length}일</h2>
            <button onClick={addDay}>Day추가</button>
        </div>
    );
};

export default CreateDay;
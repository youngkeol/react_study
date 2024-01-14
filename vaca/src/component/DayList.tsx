import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import useFetch from '../hooks/useFetch.ts';

export interface IDay {
    id : number;
    day : number;
}

export default function DayList() {
    const days : IDay[] = useFetch('http://localhost:3001/days');
    if(days.length ===0) {
        return <span>Loding.....</span>
    } 
    return (
        <div>
            <ul className='list_day'>
                {days.map(day => (
                    <li key={day.id}>
            
                        <Link to={`./day/${day.day}`} >
                            Day {day.day}
                        </Link>
        
                    </li>
                ))}
            </ul>
        </div>
    )
}
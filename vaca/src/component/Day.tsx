import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Word, {IWord} from './Word.tsx';
import useFetch from '../hooks/useFetch.ts';




export default function Day(){
    let { day } = useParams<{day:string}>();
    console.log(day)
    const words : IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);
    console.log(words);
    return(
        <div>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading</span> }
            <table>
                <tbody>
                    {

                        words.map(word => (
                            <Word 
                                key={word.id}
                                word ={word}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import avatar from '../assets/img/avatar.png';

const MyEffect = () => {
    const [myBrightness, setMyBrightness] = useState(100);

    useEffect(()=>{
        console.log('[MyEffect1]처음 로딩만 처리');
    },[]);

    useEffect(()=>{
        console.log('[MyEffect2]렌더링 마다 실행');
    });

    useEffect(()=>{
        console.log('[MyEffect3] myBrightness값 변경시 실행');
    }, [myBrightness]);




    return (
        <div>
            <h2>MyEffect</h2>
            <div>
                <input
                    type ='range'
                    min='0'
                    max='200'
                    step='1'
                    value={myBrightness}
                    onChange={(e)=>{
                        setMyBrightness(e.currentTarget.value);
                    }}
                />
            </div>
            <img 
                src={avatar}
                width={100}
                style={{
                    fill:'brightness(' + myBrightness + '%)'
                }}
            />
        </div>
    );
};

export default MyEffect;
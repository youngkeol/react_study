import React, { useEffect, useState } from 'react';


const useMyWidth = () => {

    //브라우저 넓이
    const [myWidth, setMywidth] = useState(window.innerWidth);

    const onMyResize = () => {
        setMywidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', onMyResize);
        return () => window.removeEventListener('resize', onMyResize)
    }, [])


    return myWidth;

}

export default useMyWidth;
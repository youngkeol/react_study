import React from 'react';
import MyPropsSub from '../components/MyPropsSub';

import Meta from '../Meta';
const MyProps = () => {
    return (
        <div>
            <Meta 
                title='메타 태그'
            />
            <h2>MyProps</h2>
            <MyPropsSub/>
            <MyPropsSub
                name ='민호'
                age ='20'
            />
            <MyPropsSub
                  name ='민수'
                  age ={20}
            />
        </div>
    );
};

export default MyProps;
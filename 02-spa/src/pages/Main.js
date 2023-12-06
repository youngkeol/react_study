import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';

import SubMain from '../SubMain';
const Main = () => {
    return (
        <div>
            main.js


            <nav>
                <Link to="subMain">[SubMain]</Link>
            </nav>



            {/* 페이지 역할을 할 컴포넌트 */}
            <Routes>
                <Route path="/subMain" element={<SubMain />}></Route>

            </Routes>
            
        </div>



    );
};

export default Main;
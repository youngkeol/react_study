
import React from 'react';


import { Link, Routes, Route } from 'react-router-dom';
import MyProps from './pages/MyProps';
import GradeTable from './pages/GradeTable';
import MyChildren from './pages/MyChildren';
import MyPropTypes from './pages/MyPropTypes';



function App() {
    return (
        <div className="App">
            <Link to="/myProps">[MyProps]</Link>
            <Link to="/myPropTypes">[MyPropTypes]</Link>
            <Link to="/myChildren">[MyChildren]</Link>
            <Link to="/gradeTable">[GradeTable]</Link>

            <Routes>
                <Route path="/myProps" element={<MyProps />} />
                <Route path="/myPropTypes" element={<MyPropTypes />} />
                <Route path="/myChildren" element={<MyChildren />} />
                <Route path="/gradeTable" element={<GradeTable />} />
            </Routes>
        </div >
    );
}

export default App;

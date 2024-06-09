import React from 'react';

import { Link, Routes, Route } from 'react-router-dom';
import Expr from './pages/Expr';

import If1 from './pages/If1';
import If2 from './pages/If2';
import If3 from './pages/If3';
import If4 from './pages/If4';
import Loop1 from './pages/Loop1';
import Loop2 from './pages/Loop2';
import Loop3 from './pages/Loop3';

const App = () => {
  return (
    <div>
         <nav>
            <Link to="/Expr">[Expr]</Link>

            <Link to="/IF1">[IF1]</Link>
            <Link to="/IF2">[IF2]</Link>
            <Link to="/IF3">[IF3]</Link>
            <Link to="/IF4">[IF4]</Link>

            <Link to="/LOOP1">[LOOP1]</Link>
            <Link to="/LOOP2">[LOOP2]</Link>
            <Link to="/LOOP3">[LOOP3]</Link>

        </nav>


        <Routes>
            <Route path="/Expr" element={<Expr />} exact={true}></Route>

            <Route path="/IF1" element={<If1 />} exact={true}></Route>
            <Route path="/IF2" element={<If2 />} exact={true}></Route>
            <Route path="/IF3" element={<If3 />} exact={true}></Route>
            <Route path="/IF4" element={<If4 />} exact={true}></Route>

            <Route path="/LOOP1" element={<Loop1 />} exact={true}></Route>
            <Route path="/LOOP2" element={<Loop2 />} exact={true}></Route>
            <Route path="/LOOP3" element={<Loop3 />} exact={true}></Route>
        </Routes>
    </div>
  );
};

export default App;
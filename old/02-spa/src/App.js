import { Link, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import About from './pages/About';
import Main from './pages/Main';
import Error404 from './pages/Error404';
import DepartmentGet from './pages/DepartmentGet';
import DepartmentPath from './pages/DepartmentPath';

function App() {
    return (
        <div className="App">
            {/* 링크 구분  */}
            <nav>
                <Link to="/home">[HOME]</Link>
                <Link to="/about">[ABOUT]</Link>
                <Link to="/main">[MAIN]</Link>
                <Link to="/department_get?id=101&msg=34ㅁㄴㅇㄴㅁ5">[aaa]</Link>
                <Link to="/department_get?id=102&msg=342sasa5">[bbb]</Link>
                <Link to="/department_path/103/ddd">[bbb]</Link>
            </nav>



            {/* 페이지 역할을 할 컴포넌트 */}
            <Routes>
                <Route path="/home" element={<Home />} exact={true}></Route>
                <Route path="/about" element={<About />}></Route>

                {/* 서브러웉팅 */}
                <Route path="/main/*" element={<Main />}></Route>



                {/* 서브러웉팅 */}
                <Route path="/department_get" element={<DepartmentGet />}></Route>

                <Route path="/department_path/:id/:msg" element={<DepartmentPath />}></Route>

                <Route path="/*" element={<Error404 />}></Route>
            </Routes>

        </div>
    );
}

export default App;

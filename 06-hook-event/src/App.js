import { Routes, Route } from "react-router-dom";

import MenuLink from "./components/MenuLink";
import Home from "./pages/Home";

import DateRange2 from "./pages/DateRange2";
import MyReducer from "./pages/MyReducer";
import MyRef from "./pages/MyRef";
import MyWidth from "./pages/MyWidth";
import MyMemo from "./pages/MyMemo";
import MyCallback from "./pages/MyCallback";

function App() {
    return (
        <div className="App">
            <nav>
                <MenuLink to="/home">Home</MenuLink>
                <MenuLink to="/myReducer">MyReducer</MenuLink>
                <MenuLink to="/dateRage2">DateRage2</MenuLink>
                <MenuLink to="/myRef">MyRef</MenuLink>
                <MenuLink to="/myCallback">MyCallback</MenuLink>
                <MenuLink to="/myMemo">MyMemo</MenuLink>
                <MenuLink to="/myWidth">MyWidth</MenuLink>
            </nav>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/myReducer" element={<MyReducer />} />
                <Route path="/dateRage2" element={<DateRange2 />} />
                <Route path="/myRef" element={<MyRef />} />
                <Route path="/myCallback" element={<MyCallback />} />
                <Route path="/myMemo" element={<MyMemo />} />
                <Route path="/myWidth" element={<MyWidth />} />
            </Routes>
        </div>
    );
}

export default App;

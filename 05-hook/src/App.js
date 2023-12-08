import { Routes, Route } from "react-router-dom";

import MenuLink from "./components/MenuLink";

import Home from "./pages/Home";
import MyState from "./pages/MyState";
import DateRange1 from "./pages/DateRange1";
import MyEffect from "./pages/MyEffect";

function App() {
    return (
        <div className="App">
            <nav>
                <MenuLink to="/home">HOME</MenuLink>
                <MenuLink to="/myState">myState</MenuLink>
                <MenuLink to="/dateRange1">DateRange1</MenuLink>
                <MenuLink to="/myEffect">MyEffect</MenuLink>
            </nav>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/myState" element={<MyState />} />
                <Route path="/dateRange1" element={<DateRange1 />} />
                <Route path="/myEffect" element={<MyEffect />} />
            </Routes>
        </div>
    );
}

export default App;

import { Routes, Route } from "react-router-dom";

import MenuLink from "./components/MenuLink";
import Home from "./pages/Home";

function App() {
    return (
        <div className="App">
            <nav>
                <MenuLink to="/home">Home</MenuLink>
            </nav>
            <Routes>
                <Route path="/home" element={<Home />} />
            </Routes>
        </div>
    );
}

export default App;

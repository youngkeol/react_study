import React, { memo } from 'react';
import { Routes, Route } from "react-router-dom";
import MenuLink from "./components/MenuLink";

import Home from "./pages/Home";
import CollapseEx from './pages/CollapseEx';
import SubmenuEx from './pages/SubmenuEx';
import StyleEx from './pages/StyleEx';
import ImageEx from './pages/ImageEx';
import TabEx from './pages/TabEx';
import CreateElementEx from './pages/CreateElementEx';

const App = memo(() => {
    return (
        <div className="App">
            <nav>
                <MenuLink to="/home">Home</MenuLink>
                <MenuLink to="/imageEx">ImageEx</MenuLink>
                <MenuLink to="/styleEx">StyleEx</MenuLink>
                <MenuLink to="/tabEx">TabEx</MenuLink>
                <MenuLink to="/submenuEx">SubmenuEx</MenuLink>
                <MenuLink to="/collapseEx">CollapseEx</MenuLink>
                <MenuLink to="/createElementEx">CreateElementEx</MenuLink>
            </nav>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/imageEx" element={<ImageEx />} />
                <Route path="/styleEx" element={<StyleEx />} />
                <Route path="/tabEx" element={<TabEx />} />
                <Route path="/submenuEx" element={<SubmenuEx />} />
                <Route path="/collapseEx" element={<CollapseEx />} />
                <Route path="/createElementEx" element={<CreateElementEx />} />

            </Routes>
        </div>
    );
})

export default App;

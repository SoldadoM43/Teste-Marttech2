import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home/index";
import Login from "./pages/Telas/Login";
import Cadastro from "./pages/Telas/Cadastro";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}
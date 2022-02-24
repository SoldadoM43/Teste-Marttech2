import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home/index";
import Login from "./pages/Telas/Login";
import Senha from "./pages/Telas/Senha";
import Cadastro from "./pages/Telas/Cadastro";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/home" element={<Home />} />
                <Route path="/" element={<Login />} />
                <Route path="/senha" element={<Senha />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home/index";
import Tarefas from "./pages/Tarefas/index";
import Login from "./pages/Telas/Login/index";
import Senha from "./pages/Telas/Senha/index";
import Cadastro from "./pages/Telas/Cadastro/index";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes >
                <Route path="/" element={<Login />}/>
                <Route path="/home" element={<Home />}/>
                <Route path="/senha" element={<Senha />}/>
                <Route path="/tarefas" element={<Tarefas/>}/>
                <Route path="/cadastro" element={<Cadastro />}/>
            </Routes>
        </BrowserRouter>
    );
}
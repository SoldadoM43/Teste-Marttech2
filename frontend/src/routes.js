import {BrowserRouter, Route, Routes} from "react-router-dom";

// import Perfil from "./pages/Perfil";
import Home from "./pages/Home/index";
// import Tarefas from "./pages/Tarefas";
// import Login from "./pages/Telas/Login";
// import Senha from "./pages/Telas/Senha";
// import Cadastro from "./pages/Telas/Cadastro";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes >
                {/* <Route path="/" element={<Login />}/> */}
                <Route path="/home" element={<Home />}/>
                {/* <Route path="/senha" element={<Senha />}/> */}
                {/* <Route path="/perfil" element={<Perfil />}/> */}
                {/* <Route path="/tarefas" element={<Tarefas/>}/> */}
                {/* <Route path="/cadastro" element={<Cadastro />}/> */}
            </Routes>
        </BrowserRouter>
    );
}
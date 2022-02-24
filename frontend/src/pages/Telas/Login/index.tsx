import { Link } from "react-router-dom";

import "./styles.css";
import {} from "./styles";

export default function Login() {
    return (
        <>
            <h1>Login</h1>
            <button>
                <Link to="/home">
                    Acessar
                </Link>
            </button>
            <Link to="/senha">
                Esqueci minha Senha
            </Link>
            <p>
                Ainda não tem uma conta? 
                <Link to="/cadastro">
                    Cadastre-se
                </Link>
            </p>
        </>
    );
}
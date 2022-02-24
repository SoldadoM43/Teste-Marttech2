import { Link } from "react-router-dom";

import "./styles.css";
import {Container} from "./styles";

export default function Login() {
    return (
        <Container>
            <header>
                <h1>Login</h1>
            </header>
            <main className="inputs">
                <input type="email" placeholder="E-mail"/> <br />
                <input type="password" placeholder="Senha"/>
            </main>
            <div className="botao">
                <Link to="/home" className="link">
                    <button className="btn">
                        Acessar
                    </button>
                </Link>
            </div>
            <footer>
                <p className="text">
                    <Link to="/senha" className="link">
                        Esqueci minha Senha
                    </Link>
                </p>
                <p className="text">
                    Ainda não tem uma conta? 
                    <Link to="/cadastro" className="link">
                        Cadastre-se
                    </Link>
                </p>
            </footer>
        </Container>
    );
}
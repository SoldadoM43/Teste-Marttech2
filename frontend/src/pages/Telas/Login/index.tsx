import { Link } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import "./styles.css";
import { Container } from "./styles";

export default function Login() {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container>
                <header>
                    <p className="title">Login</p>
                    <p className="subtitle">Bem-Vindo(a) ao TSS</p>
                </header>
                <FaTasks className="icon"/>
                <div className="inputs">
                    <table>
                        <tr>
                            <td><FaUserAlt /></td>
                            <td><input type="email" placeholder="E-mail" /></td>
                        </tr>
                        <tr>
                            <td><RiLockPasswordFill /></td>
                            <td><input type="password" placeholder="Senha" /></td>
                        </tr>
                    </table>
                </div>
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
        </>
    );
}
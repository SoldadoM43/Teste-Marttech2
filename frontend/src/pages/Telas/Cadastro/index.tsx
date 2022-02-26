import { Link } from "react-router-dom";
import { FaUserAlt, FaTasks } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import "./styles.css";
import { Container } from './styles';

export default function Cadastro() {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
            <Container>
                <header>
                    <p className="title">Cadastre-se</p>
                    <p className="subtitle">Conheça o TSS</p>
                </header>
                <FaTasks className="icon"/>
                <div className="inputs">
                    <table>
                        <tr>
                            <td><FaUserAlt /></td>
                            <td><input type="text" placeholder="Nome" className="campo"/></td>
                        </tr>
                        <tr>
                            <td><MdAlternateEmail /></td>
                            <td><input type="email" placeholder="E-mail" className="campo"/></td>
                        </tr>
                        <tr>
                            <td><RiLockPasswordFill /></td>
                            <td><input type="password" placeholder="Senha" className="campo"/></td>
                        </tr>
                    </table>
                </div>
                <div className="botao">
                    <Link to="/" className="link">
                        <button className="btn">
                            Cadastrar
                        </button>
                    </Link>
                </div>
            </Container>
        </>
    );
}
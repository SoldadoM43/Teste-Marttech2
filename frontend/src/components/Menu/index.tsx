import { Link } from "react-router-dom";

import "./styles.css";
import { Container, Header, Nav } from "./styles";

export default function Menu() {
    return (
        <Header className="header">
            <p>Logo</p>
            <Nav>
                <ul className="menu">
                    <li>
                        <Link to="/home" className="a">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/tarefas" className="a">
                            Tarefas
                        </Link>
                    </li>
                    <li>
                        <Link to="/perfil" className="a">
                            Perfil
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="a">
                            Sair
                        </Link>
                    </li>
                </ul>
            </Nav>
        </Header>
    );
}
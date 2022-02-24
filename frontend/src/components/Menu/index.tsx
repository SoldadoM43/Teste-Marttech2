import { Link } from "react-router-dom";
import {HiOutlineLogout} from "react-icons/hi";

import "./styles.css";
import { Header } from "./styles";

export default function Menu() {
    return (
        <Header className="header">
            <Link to="/home" className="a_nome">
                <p className="name">TSS - Task System Storage</p>
            </Link>
            <nav>
                <ul className="menu">
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
                            <HiOutlineLogout />
                        </Link>
                    </li>
                </ul>
            </nav>
        </Header>
    );
}
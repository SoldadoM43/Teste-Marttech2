import { Link } from "react-router-dom";
import {HiOutlineLogout} from "react-icons/hi";

import "./styles.css";
import { Header } from "./styles";

export default function Menu() {
    return (
        <Header className="header">
            <p className="name">TSS - Task System Storage</p>
            <nav>
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
                            <HiOutlineLogout />
                        </Link>
                    </li>
                </ul>
            </nav>
        </Header>
    );
}
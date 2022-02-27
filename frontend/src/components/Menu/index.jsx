import { Link } from "react-router-dom";
import {HiOutlineLogout} from "react-icons/hi";

import "./styles.css";
import { Header } from "./styles";

import {useAuth} from "../../providers/auth";

export default function Menu() {
    const {setUser} = useAuth();

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser({
            name: '',
        });
    };

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
                        <Link to="/" className="a">
                            <HiOutlineLogout onChange={handleLogout}/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </Header>
    );
}
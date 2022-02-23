import { Link } from "react-router-dom";

import "./styles.css";

export default function Menu() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/home" className="a">Home</Link>
                    </li>
                    <li>
                        <Link to="tarefas" className="a">Tarefas</Link>
                    </li>
                    <li>
                        <Link to="/perfil" className="a">
                            <div className="profile_details">
                                <p >Perfil</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}
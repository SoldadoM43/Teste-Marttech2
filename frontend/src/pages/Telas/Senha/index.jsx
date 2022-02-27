import { Link } from "react-router-dom";

import {MdConstruction} from "react-icons/md";

import "./styles.css";
import {Main} from "../../../styles/global";

export default function Senha() {
    return (
        <Main>
            <br />
            <br />
            <br />
            <p className="texto">Tela provisóriamente em manutenção.</p>
            <p className="texto">Por favor, volte para onde estava.</p>
            <div className="div_icon">
                <MdConstruction className="icon"/>
            </div>
            <Link to="/">
                <p className="link">Tela de Login</p>
            </Link>
        </Main>
    );
}
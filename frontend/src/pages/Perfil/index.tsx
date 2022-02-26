import "./styles.css";
import {} from "./styles";
import { Main } from "../../styles/global";

import Menu from "../../components/Menu";

export default function Perfil() {
    return(
        <>
            <Menu />
            <Main>
                <h1 className="title">Aba de Perfil</h1>
                <div className="textos">
                    Em desenvolvimento...
                </div>
            </Main>
        </>
    );
}
import "./styles.css";
import { Main } from "../../styles/global";

import Menu from "../../components/Menu";

export default function Perfil() {
    return(
        <>
            <Menu />
            <Main>
                <h1 className="title"></h1>
                <div className="textos">
                </div>
            </Main>
        </>
    );
}
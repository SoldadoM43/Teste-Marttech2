import "./styles.css";
import {} from "./styles";
import { Main } from "../../styles/global";

import Menu from "../../components/Menu";
import Tarefa from "../../components/Tarefa";

export default function Tarefas() {
    return(
        <>
            <Menu />
            <Main>
                <Tarefa/>
            </Main>
        </>
    );
}

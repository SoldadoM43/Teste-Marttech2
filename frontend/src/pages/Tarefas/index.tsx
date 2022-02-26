import { useState } from "react";

import "./styles.css";
import {} from "./styles";
import { Main } from "../../styles/global";

import { Item } from '../../types/item';
import Menu from "../../components/Menu";
import Tarefa from "../../components/Tarefa";

type Props = {
    taskName: string,
    taskDescription: string,
}

export default function Tarefas() {
    return(
        <>
            <Menu />
            <Main>
                <Tarefa item={{
                    id: 0,
                    name: "",
                    done: false,
                    description: ""
                }} />
            </Main>
        </>
    );
}

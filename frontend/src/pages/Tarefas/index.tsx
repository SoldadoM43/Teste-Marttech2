import { useState } from "react";

import "./styles.css";
import {} from "./styles";
import { Main } from "../../styles/global";

import { Item } from '../../types/item';
import List from "../../components/Lista";
import Menu from "../../components/Menu";
// import Tarefa from "../../components/Tarefa";

export default function Tarefas() {
    const [list, setList] = useState<Item[]>([
        {id: 1, name: 'Testar Tarefa', description: 'Testar a função de Tarefas', done: false},
        {id: 2, name: 'Testar Tarefa2', description: 'Testar a função da segunda Tarefa', done: false},
    ]);
    return(
        <>
            <Menu />
            <Main>
                {/* <Tarefa /> */}
                {list.map((Item, index)=>(
                    <List key={index} item={Item} />
                ))}
            </Main>
        </>
    );
}
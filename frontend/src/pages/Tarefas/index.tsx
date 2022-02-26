import { useState } from "react";

import "./styles.css";
import {} from "./styles";
import { Main } from "../../styles/global";

import { Item } from '../../types/item';
import Menu from "../../components/Menu";
import List from "../../components/Lista";
import AddTarefa from "../../components/AddTarefa";
// import Tarefa from "../../components/Tarefa";

export default function Tarefas() {
    const [list, setList] = useState<Item[]>([
        {id: 1, name: 'Testar Tarefa', description: 'Testar a função de Tarefas', done: false},
        {id: 2, name: 'Testar Tarefa2', description: 'Testar a função da segunda Tarefa', done: false},
    ]);
    const handleAddTarefa = (taskfaName: string) => {
        let newList = [...list];
        newList.push();
        setList(newList);
    }
    return(
        <>
            <Menu />
            <Main>
                <AddTarefa />
                {list.map((Item, index)=>(
                    <List key={index} item={Item} />
                ))}
            </Main>
        </>
    );
}

function id(id: any) {
    throw new Error("Function not implemented.");
}

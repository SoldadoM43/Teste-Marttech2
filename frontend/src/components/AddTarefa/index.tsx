import { useState, KeyboardEvent } from "react";
import { GrAddCircle } from "react-icons/gr";

import "./styles.css";
import { Container } from "./styles";

export default function AddTarefa() {
    const [salvar, setSalvar] = useState('');
    const handleKeyUp = (e: KeyboardEvent) => {
        if(e.code === 'Enter' && salvar !== '') {
            
        }
    }
    return (
        <Container>
            <div className="add">+</div>
            <input
                type="text"
                value={salvar}
                className="add_tarefa"
                placeholder="Insira a Tarefa"
                onChange={e=>setSalvar(e.target.value)}
                onKeyUp={handleKeyUp}
            />
        </Container>
    );
}
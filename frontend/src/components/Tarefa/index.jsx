import { useState } from 'react';
import { useAuth } from '../../providers/auth';

import "./styles.css";

export default function NovaTarefa() {
  const {setNewTarefa} = useAuth();
  const [nome, setNome] = useState("");
  const [tarefa, setTarefa] = useState([]);
  const [description, setDescription] = useState("");
  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!!nome) {
            setTarefa([...tarefa, nome]);
            setNome("");
            setDescription("");
          }
          return;
        }}
      >
        <input
          type="text"
          value={nome}
          id="tarefaInput"
          className="tarefa"
          placeholder="Adicione uma Tarefa"
          onChange={(e)=>setNewTarefa({name: e.target.value})}
        />
        <input
          type="text"
          value={description}
          className="descricao"
          placeholder="Adicione uma Descrição"
          onChange={(e)=>setNewTarefa({description: e.target.value})}
        />
        <button 
          id="enter" 
          type="submit" 
          className="add_tarefa"
        >
          +
        </button>
      </form>
      <div className='exibe_tarefa'>
        <ul>
          {tarefa.map((tarefa, index) => (
            <li key={index}>
              <div className="print_tarefa">
                {tarefa}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
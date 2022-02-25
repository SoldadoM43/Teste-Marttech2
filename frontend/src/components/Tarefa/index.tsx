import { useState } from 'react';

import "./styles.css";

export default function NovaTarefa() {
  const [nome, setNome] = useState<string>("");
  const [tarefa, setTarefa] = useState<string[]>([]);
  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!!nome) {
            setTarefa([...tarefa, nome]);
            setNome("");
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
          onChange={event => setNome(event.target.value)}
        />
        <button type="submit" id="enter" className="add_tarefa">Add Tarefa</button>
      </form>
      <ul>
        {tarefa.map((tarefa, index) => (
          <li key={index}>
            <p className="print_tarefa">{tarefa}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
import { useState } from 'react';

import "./styles.css";

export default function NovaTarefa() {
  const [nome, setNome] = useState<string>("");
  const [tarefa, setTarefa] = useState<string>([]);
  const [isChecked, setIsChecked] = useState(item.done);
  const [description, setDescription] = useState<string>("");
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
          onChange={event => setNome(event.target.value)}
        />
        <input
          type="text"
          value={description}
          className="descricao"
          placeholder="Adicione uma Descrição"
          onChange={event => setDescription(event.target.value)}
        />
        <button type="submit" id="enter" className="add_tarefa">+</button>
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
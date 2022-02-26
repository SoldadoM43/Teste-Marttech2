import { useState } from 'react';

import "./styles.css";
import { Item } from '../../types/item';

type Props = {
  item: Item
}

export default function NovaTarefa({ item }: Props) {
  const [nome, setNome] = useState<string>("");
  const [tarefa, setTarefa] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState(item.done);
  const [description, setDescription] = useState<string>("");
  return (
    <>
      <form
        onSubmit={event => {
          event.preventDefault();
          if (!!nome && description) {
            setTarefa([...tarefa, nome, description]);
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
                <input
                  type="checkbox"
                  className="input"
                  checked={isChecked}
                  onChange={e => setIsChecked(e.target.checked)}
                />
                {tarefa}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
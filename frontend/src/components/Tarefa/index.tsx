import { useState } from 'react';

export default function NovaTarefa() {
  const [nome, setNome] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  return (
    <div>
      <form
        onSubmit={event => {
          event.preventDefault();
          setTodos([...todos, nome]);
        }}
      >
        <input
          type="text"
          value={nome}
          onChange={event => setNome(event.target.value)}
        />
        <button type="submit">Add Tarefa</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
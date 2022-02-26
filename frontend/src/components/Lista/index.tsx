import { useState } from 'react';
import { List } from "../../types/list";

type Props = {
    list: List;
}

export default function List() {
    const [item, setItem] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    return (
        <>
            <form
                onSubmit={event => {
                    event.preventDefault();
                    if (!!title) {
                        setItem([...item, title]);
                        setTitle("");
                    }
                    return;
                }}
            >
                <input
                    type="text"
                    value={title}
                    id="tarefaInput"
                    className="tarefa"
                    placeholder="Adicione uma Lista"
                    onChange={event => setTitle(event.target.value)}
                />
                <button type="submit" id="enter" className="add_tarefa">+</button>
            </form>
            <div className='exibe_tarefa'>
                <ul>
                    {item.map((item, index) => (
                        <li key={index}>
                            <div className="print_tarefa">
                                {item}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
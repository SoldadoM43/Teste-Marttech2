import { useState } from 'react';

import "./styles.css";
import { Container } from './styles';

import { Item } from '../../types/item';

type Props = {
  item: Item
}

export default function List({ item }: Props) {
  const [isChecked, setIsChecked] = useState(item.done);
  return (
    <> 
      <Container done={isChecked}>
        <input 
          type="checkbox" 
          className="input"
          checked={isChecked}
          onChange={e => setIsChecked(e.target.checked)}
        />
        <label className='item'>{item.name}</label>
      </Container>
    </>  
  );
};
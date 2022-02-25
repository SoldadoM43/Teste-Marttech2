import React from 'react';

import "./styles.css";
import { Container } from './styles';

import { Item } from '../../types/item';

type Props = {
  item: Item
}

export default function List({ item }: Props) {
  return (
    <> 
      <Container>
        <input type="checkbox"/>
        <label className='item'>{item.name}</label>
      </Container>
    </>  
  );
};
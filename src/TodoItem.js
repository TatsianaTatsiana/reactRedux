import React, { useContext } from 'react';
import { Context } from './context';
import './css/TodoItem.css';

export const TodoItem = ({ id, title, completed }) => {
  const { deleteTodo, toggleCheckbox } = useContext(Context);
  console.log(completed, '////completed')
  return (
    <div className="item-wrapper">
      <li className="item">
        <input className='item-input' type="checkbox" checked={completed}
          onChange={() => { toggleCheckbox(id) }} />
        <p className='item-text'>{title}</p>
      </li>
      <button className="item-btn" onClick={() => { deleteTodo(id) }}>Delete</button>
    </div>
  )
}
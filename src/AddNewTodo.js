import React, { useState, useContext } from 'react';
import { Context } from './context';

export const AddNewTodo = () => {
  const { addTodo } = useContext(Context);
  const [value, setValue] = useState('')


  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo(value);
      save()
    }
  }

  const save = () => {
    addTodo(value)
    setValue('')
  }

  return (
    <>
      <input type='text'
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={onKeyPress} value={value} />
      <button onClick={save}>Add</button>
    </>

  )
}
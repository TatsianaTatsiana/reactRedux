import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos }) => {
  console.log(typeof todos, '////todoss')
  return (
    <ul className="list">
      {todos.map((todo) => {
        return (
          <TodoItem key={todo.id} {...todo} />
        )
      })}
    </ul>
  )
}
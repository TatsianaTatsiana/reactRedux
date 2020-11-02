import React, { useState, useEffect } from 'react';
import { TodoList } from './TodoList';
import { Context } from './context';
import { AddNewTodo } from './AddNewTodo';
import { Search } from './Search';
import { FilterStatus } from './FilterStatus';
import { useDispatch, useSelector } from "react-redux";
import { todosFromStorage, searchTodosStorage, filterStatusTodosStorage } from './actions';
import './css/AppHooks.css';

const AppHooks = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filterStatusValue, setFilterStatusValue] = useState('');

  const dispatch = useDispatch()

  const todos = useSelector((store) => store.todos)//раньше было useState(todos)
  const searchTodos = useSelector((store) => store.searchTodos)//раньше было [searchTodos, setSearchTodos] = useState
  const filterStatusTodos = useSelector((store) => store.filterStatusTodos)//раньше было [filterStatusTodos, setFilterStatusTodos] = useState

  useEffect(() => {
    const raw = localStorage.getItem('todos') || [];
    setTodos(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const setTodos = (raw) => {
    dispatch(todosFromStorage(raw))
  }

  const setSearchTodos = (raw) => {
    dispatch(searchTodosStorage(raw))
  }

  const setFilterStatusTodos = (raw) => {
    dispatch(filterStatusTodosStorage(raw))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => { return todo.id !== id }));
    setSearchTodos(searchTodos.filter((todo) => { return todo.id !== id }));
    setFilterStatusTodos(filterStatusTodos.filter((todo) => { return todo.id !== id }))
  }

  const addTodo = (value) => {
    if (value !== '') {
      let newTodo = {
        id: Date.now(),
        title: value,
        completed: false,
      }
      setTodos([...todos, newTodo])
    }
  }

  const toggleCheckbox = (id) => {
    const changedArray = todos.map((elem) => {
      if (elem.id === id) {
        elem.completed = !elem.completed
      }
      return elem
    })
    setTodos(changedArray)
  }

  const saveSearch = (value) => {
    setSearchValue(value)
    search(value)
  }

  const search = (searchValue) => {
    let copy = [...todos];
    if (searchValue === '') {
      setSearchTodos(copy)
      return copy
    }
    copy = copy.filter((elem) => {
      return elem.title.toLowerCase().includes(searchValue.toLowerCase())
    })
    setSearchTodos(copy)
  }

  const filterStatusSave = (value) => {
    setFilterStatusValue(value);
    filterStatus(value)
  }

  const filterStatus = (value) => {
    let copy = [...searchTodos];
    if (value === 'all') {
      setFilterStatusTodos(copy);
    }
    if (value === 'done') {
      copy = copy.filter((elem) => { return elem.completed })
      setFilterStatusTodos(copy);
    }
    if (value === 'not done') {
      copy = copy.filter((elem) => { return !elem.completed })
      setFilterStatusTodos(copy);
    }
  }

  return (
    <Context.Provider value={{ deleteTodo, addTodo, toggleCheckbox }}>
      <div className="app-hooks">
        <h1 className='app-title'>Todo List(hooks, page1)</h1>
        <div className="settings">
          <AddNewTodo />
          <Search saveSearch={saveSearch} />
          <FilterStatus filterStatusSave={filterStatusSave} />
        </div>

        {(!searchValue && !filterStatusValue) && (<TodoList todos={todos} />)}
        {searchValue && !filterStatusValue
          && (<TodoList todos={searchTodos} />)}
        {filterStatusValue
          && (<TodoList todos={filterStatusTodos} />)}

      </div>
    </Context.Provider>
  );
}

export default AppHooks;

const todosFromStorage = (newTodos) => {
  return {
    type: 'TODOS_FROM_STORAGE',
    payload: newTodos,
  }
}

const searchTodosStorage = (newTodos) => {
  return {
    type: 'SEARCH_TODOS_STORAGE',
    payload: newTodos,
  }
}

const filterStatusTodosStorage = (newTodos) => {
  return {
    type: 'FILTER_TODOS_STORAGE',
    payload: newTodos,
  }
}

export {
  todosFromStorage,
  searchTodosStorage,
  filterStatusTodosStorage,
}
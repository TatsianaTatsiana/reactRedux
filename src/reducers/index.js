const initialState = {
  todos: [],
  searchTodos: [],
  filterStatusTodos: [],
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'TODOS_FROM_STORAGE':
      return { ...state, todos: action.payload };
    case 'SEARCH_TODOS_STORAGE':
      return { ...state, searchTodos: action.payload };
    case 'FILTER_TODOS_STORAGE':
      return { ...state, filterStatusTodos: action.payload };
    default:
      return state;
  }
};

export default reducer;
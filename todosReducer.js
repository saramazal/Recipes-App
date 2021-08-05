const initialState = {
  filter: 'SHOW_INCOMPLETE',
  todos: [
    { id: 0, text: 'learn redux', completed: false },
    { id: 1, text: 'build a redux app', completed: true },
    { id: 2, text: 'do a dance', completed: false },
  ]
};
 
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/setFilter':
      return {
        ...state,
        filter: action.payload
      };
    case 'todos/addTodo': 
      return {
        ...state,
        todos: [...state.todos, action.payload]
      } ;
    case 'todos/toggleTodo':
      return {
        ...state,
        todos: state.todos.map(todo => {
          return (todo.id === action.payload.id) ? 
            { ...todo, completed: !todo.completed } : 
            todo;
        })
      }
    default:
      return state;
  }
};

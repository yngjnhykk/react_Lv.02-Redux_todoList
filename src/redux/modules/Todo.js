const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const TOGGLESTATUS_TODO = 'TOGGLESTATUS_TODO';
const GET_TODO = 'GET_TODO';

export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    newTodo: {
      id: newTodo.id,
      title: newTodo.title,
      value: newTodo.value,
      isDone: newTodo.isDone,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const toggleStatusTodo = (id) => {
  return {
    type: TOGGLESTATUS_TODO,
    id,
  };
};

export const getTodoById = (id) => {
  return {
    type: GET_TODO,
    id,
  };
};

export const initialState = { todos: [], detailTodo: {} };
console.log(initialState);

const todo = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { todos: [...state.todos, action.newTodo] };
    case 'DELETE_TODO':
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.id)],
      };
    case 'TOGGLESTATUS_TODO':
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case 'GET_TODO':
      return {
        todos: [...state.todos],
        detailTodo: state.todos.find((todo) => {
          return parseInt(todo.id) === parseInt(action.id);
        }),
      };

    default:
      return state;
  }
};

export default todo;

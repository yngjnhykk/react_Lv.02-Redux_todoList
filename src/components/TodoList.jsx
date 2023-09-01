import TodoItem from '../components/TodoItem.jsx';
import { useSelector } from 'react-redux';

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  console.log(todos);

  return (
    <>
      <div className='yetList'>
        {' '}
        ✴︎ To Do
        {todos.map(
          (todo) =>
            todo.isDone === false && <TodoItem todo={todo} key={todo.id} />
        )}
      </div>
      <div className='doneList'>
        ✍︎ Success
        {todos.map(
          (todo) =>
            todo.isDone === true && <TodoItem todo={todo} key={todo.id} />
        )}
      </div>
    </>
  );
}

export default TodoList;

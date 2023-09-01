import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleStatusTodo } from '../redux/modules/Todo';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('TodoItem.jsx 이 렌더링되었습니다.');
  // });

  function handleDelete() {
    dispatch(deleteTodo(todo.id));
  }

  function handleUpdate() {
    dispatch(toggleStatusTodo(todo.id));
  }

  if (todo.isDone !== null && todo.isDone === false) {
    return (
      <div className='todoList'>
        <div className='listText'>
          <Link to={`/detail/${todo.id}`}>상세보기</Link>
          <h4>{todo.title}</h4>
          <p>{todo.value}</p>
          <div className='listBtn'>
            <button className='doneBtn' onClick={handleUpdate}>
              Done
            </button>
            <button className='deleteBtn' onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  } else if (todo.isDone === true) {
    return (
      <div className='todoList'>
        <div className='listText'>
          <Link to={`/detail/${todo.id}`}>상세보기</Link>
          <h4>{todo.title}</h4>
          <p>{todo.value}</p>
          <div className='listBtn'>
            <button className='doneBtn' onClick={handleUpdate}>
              Cancel
            </button>
            <button className='deleteBtn' onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;

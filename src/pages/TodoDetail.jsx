import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTodoById } from '../redux/modules/Todo';
import { useDispatch, useSelector } from 'react-redux';

function TodoDetail() {
  const param = useParams();
  const dispatch = useDispatch();

  const getTodo = () => {
    console.log('성공');
    dispatch(getTodoById(param.id));
  };
  getTodo();
  //   useEffect(() => {
  //     console.log(param.id);
  //   }, []);

  const todos = useSelector((state) => state.todos);
  const detailTodo = useSelector((state) => state.todos.detailTodo);
  console.log(todos);
  console.log(detailTodo);

  return (
    <div>
      <div className='TodoDetail'>
        <div className='detailID'>
          {' '}
          ID: {detailTodo.id}{' '}
          <span>
            <button>이전으로</button>
          </span>
        </div>

        <div className='detailContent'>
          <h1>{detailTodo.title}</h1>
          <div>{detailTodo.value}</div>
        </div>
      </div>
    </div>
  );
}

export default TodoDetail;

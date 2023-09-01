import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../redux/modules/Todo';
import { memo } from 'react';

const TodoCreate = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');

  // useEffect(() => {
  //   console.log('TodoCreate.jsx 이 렌더링되었습니다.');
  // });

  const writeTitle = (e) => {
    setTitle(e.target.value);
  };
  const writeValue = (e) => {
    setValue(e.target.value);
  };
  const todoListAdd = () => {
    if (title !== '' && value !== '') {
      const newTodo = {
        id: Date.now(),
        title: title,
        value: value,
        isDone: false,
      };
      dispatch(addTodo(newTodo));
      setTitle('');
      setValue('');
    }
  };

  return (
    <div className='inputContainer'>
      <div>
        <input
          name='title'
          onChange={writeTitle}
          value={title}
          className='inputBox1'
          type='text'
          placeholder='Title'
        />
      </div>
      <div>
        <input
          name='value'
          onChange={writeValue}
          value={value}
          className='inputBox2'
          type='text'
          placeholder='Value'
        />
      </div>
      <button onClick={todoListAdd} className='saveBtn'>
        Save
      </button>
    </div>
  );
};

export default TodoCreate;

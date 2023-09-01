import React from 'react';
import '../App.css';
import TodoCreate from '../components/TodoCreate.jsx';
import TodoList from '../components/TodoList.jsx';
import { useSelector } from 'react-redux';

function Home() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);

  return (
    <div className='wrap'>
      <div className='header'>
        <h4 className='title'>React To Do</h4>
        <button
          className='btn'
          onClick={() => {
            alert('Kakaobank 3333-18-5480876');
          }}
        >
          Donation
        </button>
      </div>
      <div>
        <TodoCreate />
      </div>
      <div className='flexer'>
        <TodoList />
      </div>
    </div>
  );
}

export default Home;

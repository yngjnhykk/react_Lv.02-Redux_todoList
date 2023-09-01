import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import TodoDetail from '../pages/TodoDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='detail/:id' element={<TodoDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

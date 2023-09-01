import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todos from '../modules/Todo';
import detailTodo from '../modules/Todo';

const rootReducer = combineReducers({
  todos,
  detailTodo,
});
const store = createStore(rootReducer);

export default store;

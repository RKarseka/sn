import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { usersReducer } from './users-reducer';
import { app } from './app-reducer';

const reducers = combineReducers({
  app,
  profileReducer,
  usersReducer,
});

export const store = createStore(reducers);

// console.log(store.getState());
// window.store = store;

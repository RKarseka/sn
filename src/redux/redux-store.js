import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { friends } from './users-reducer';
import { app } from './app-reducer';

const reducers = combineReducers({
  app,
  profileReducer,
  friends,
});

export const store = createStore(reducers);

// console.log(store.getState());
// window.store = store;

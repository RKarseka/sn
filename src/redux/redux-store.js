import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { usersReducer } from './users-reducer';

const reducers = combineReducers({ profileReducer, usersReducer });

export const store = createStore(reducers);

// console.log(store.getState());
// window.store = store;

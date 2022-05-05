import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';

const reducers = combineReducers({ profileReducer });

export const store = createStore(reducers);

// console.log(store.getState());
window.store = store;

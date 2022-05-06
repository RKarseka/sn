import { axiosGet } from '../utils/axios';

const ADD_POST = 'ADD_POST';

const initialState = {
  users: [
    { id: 0, text: 'user1' },
    { id: 1, text: 'user2' },
    { id: 2, text: 'user3' },
    { id: 3, text: 'user4' },
    { id: 4, text: 'user5' },
    { id: 5, text: 'user6' },
  ],
};

const getusers = async () => console.log(await axiosGet('/users'));

getusers();

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_POST:
      const newPost = {
        id: state.posts.reduce((acc, { id }) => (acc > id ? acc : id), 0) + 1,
        text: payload,
      };
      return { ...state, posts: [...state.posts, newPost] };
    default:
      return state;
  }
};

export const usersAC = () => ({ type: '' });

const ADD_POST = 'ADD_POST';

const initialState = {
  posts: [
    { id: 0, text: 'post1' },
    { id: 1, text: 'post2' },
    { id: 2, text: 'post3' },
    { id: 3, text: 'post4' },
    { id: 4, text: 'post5' },
    { id: 5, text: 'post6' },
  ],
};

export const profileReducer = (state = initialState, { type, payload }) => {
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

export const addPostAC = (text) => ({ type: ADD_POST, payload: text });

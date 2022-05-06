const SET_USERS = 'SET_USERS';

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USERS:
      return { ...state, users: [...payload] };
    default:
      return state;
  }
};

export const setUsersAC = (users) => ({ type: SET_USERS, payload: users });

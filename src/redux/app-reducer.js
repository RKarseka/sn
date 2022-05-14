const PAGE_SIZE = 'PAGE_SIZE';
const SET_USER_AUTH = 'SET_USER_AUTH ';
const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  pageSize: localStorage.getItem('pagesize') || 25,
  isAuth: false,
  me: {
    id: null,
    email: null,
    login: null,
  },
};

export const app = (state = initialState, { type, payload }) => {
  switch (type) {
    case PAGE_SIZE:
      return { ...state, pageSize: payload };
    case SET_USER_AUTH:
      return { ...state, isAuth: payload };
    case SET_USER_DATA:
      return { ...state, me: payload };
    default:
      return state;
  }
};

export const setPageSize = (payload) => ({ type: PAGE_SIZE, payload });

export const setAuthUserData = (payload) => ({ type: SET_USER_DATA, payload });
export const setUserAuth = (payload) => ({ type: SET_USER_AUTH, payload });

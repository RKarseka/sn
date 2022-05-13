const PAGE_SIZE = 'PAGE_SIZE';

const initialState = {
  pageSize: localStorage.getItem('pagesize') || 25,
  isAuth: false,
};

export const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PAGE_SIZE:
      return { ...state, pageSize: payload };
    default:
      return state;
  }
};

export const setPageSize = (size) => ({ type: PAGE_SIZE, payload: size });

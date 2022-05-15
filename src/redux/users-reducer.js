const SET_FRIEND_SETTINGS = 'SET_FRIEND_SETTINGS';
const SET_FRIEND_MODE = 'SET_FRIEND_MODE';
const SET_FRIEND_PAGE = 'SET_FRIEND_PAGE';
const SET_FRIEND_SEARCH = 'SET_FRIEND_SEARCH';

const initialState = {
  page: 751,
  mode: 'any',
  search: '',
};

export const friends = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_FRIEND_SETTINGS:
      return { ...state, ...payload };
    case SET_FRIEND_MODE:
      return { ...state, mode: payload };
    case SET_FRIEND_PAGE:
      return { ...state, page: payload };
    case SET_FRIEND_SEARCH:
      return { ...state, search: payload };
    default:
      return state;
  }
};

export const setFriends = (payload) => ({
  type: SET_FRIEND_SETTINGS,
  payload,
});

export const setFriendsMode = (payload) => ({
  type: SET_FRIEND_MODE,
  payload,
});

export const setFriendsPage = (payload) => ({
  type: SET_FRIEND_PAGE,
  payload,
});

export const setFriendsSearch = (payload) => ({
  type: SET_FRIEND_SEARCH,
  payload,
});

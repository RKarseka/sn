import { connect } from 'react-redux';
import { Friends } from '.';
import { setPageSize } from '../../redux/app-reducer';
import {
  setFriends,
  setFriendsMode,
  setFriendsPage,
  setFriendsSearch,
} from '../../redux/users-reducer';

const mapStateToProps = (state) => ({
  pageSize: state.app.pageSize,
  isAuth: state.app.isAuth,
  page: state.friends.page,
  mode: state.friends.mode,
  search: state.friends.search,
});

export const FriendsC = connect(mapStateToProps, {
  setPageSize,
  setFriends,
  setFriendsMode,
  setFriendsPage,
  setFriendsSearch,
})(Friends);

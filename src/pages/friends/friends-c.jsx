import { connect } from 'react-redux';
import { Friends } from '.';
import { setUsersAC } from '../../redux/users-reducer';
const mapStateToProps = (state) => ({ users: state.usersReducer.users });
const mapDispatchToProps = (dispatch) => ({
  setFriends: (users) => {
    dispatch(setUsersAC(users));
  },
});

export const FriendsC = connect(mapStateToProps, mapDispatchToProps)(Friends);

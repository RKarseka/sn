import { connect } from 'react-redux';
import { Friends } from '.';

const mapStateToProps = (state) => ({ users: state.usersReducer.users });
const mapDispatchToProps = (dispatch) => ({ onFriends: () => {} });

export const FriendsC = connect(mapStateToProps, mapDispatchToProps)(Friends);

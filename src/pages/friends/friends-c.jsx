import { connect } from 'react-redux';
import { Friends } from '.';
import { setPageSize } from '../../redux/app-reducer';

const mapStateToProps = (state) => ({
  pageSize: state.appReducer.pageSize,
  isAuth: state.appReducer.isAuth,
});

export const FriendsC = connect(mapStateToProps, {
  setPageSize,
})(Friends);

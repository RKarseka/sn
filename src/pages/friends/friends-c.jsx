import { connect } from 'react-redux';
import { Friends } from '.';
import { setPageSize } from '../../redux/app-reducer';

const mapStateToProps = (state) => ({
  pageSize: state.app.pageSize,
  isAuth: state.app.isAuth,
});

export const FriendsC = connect(mapStateToProps, {
  setPageSize,
})(Friends);

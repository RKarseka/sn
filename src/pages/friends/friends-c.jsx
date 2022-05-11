import { connect } from 'react-redux';
import { Friends } from '.';
import { setPageSizeAC } from '../../redux/app-reducer';

const mapStateToProps = (state) => ({
  pageSize: state.appReducer.pageSize,
  isAuth: state.appReducer.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  setPageSize: (pageSize) => {
    dispatch(setPageSizeAC(pageSize));
  },
});

export const FriendsC = connect(mapStateToProps, mapDispatchToProps)(Friends);

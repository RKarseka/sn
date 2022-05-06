import { connect } from 'react-redux';
import { Timeline } from '.';
import { addPostAC } from '../../redux/profile-reducer';

const mapStateToProps = (state) => ({ posts: state.profileReducer.posts });
const mapDispatchToProps = (dispatch) => ({
  AddPost: (input) => {
    dispatch(addPostAC(input));
  },
});

export const TimelineContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);

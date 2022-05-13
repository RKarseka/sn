import { connect } from 'react-redux';
import { Timeline } from '.';
import { addPost } from '../../redux/profile-reducer';

const mapStateToProps = (state) => ({ posts: state.profileReducer.posts });

export const TimelineC = connect(mapStateToProps, {
  addPost,
})(Timeline);

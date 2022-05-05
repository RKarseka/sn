import { connect } from 'react-redux';
import { Timeline } from '.';
import { addPostAC } from '../../redux/profile-reducer';

//  const TimelineContainer = ({ store }) => {
//   console.log(store.getState());
//   // const { posts } = profilePage;

//   return (
//     <Timeline
//       posts={store.getState().posts}
//       onAddPost={() => store.dispatch(addPostAC(input))}
//     />
//   );
// };

// console.log(store);

const mapStateToProps = (state) => ({ posts: state.profileReducer.posts });
const mapDispatchToProps = (dispatch) => ({
  onAddPost: (input) => {
    dispatch(addPostAC(input));
  },
});

export const TimelineContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline);

import { connect } from 'react-redux';
import Movies from './Movies';
import { withRouter } from 'react-router';
import { requestVideos } from '../../actions/video_actions';
import { selectVideosByMediatype } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
  const movies = selectVideosByMediatype('movie', state.entities.videos);

  return {
    movies: movies,
  };
};

const mDTP = (dispatch) => ({
  requestVideos: () => dispatch(requestVideos()),
});

export default withRouter(connect(mSTP, mDTP)(Movies));

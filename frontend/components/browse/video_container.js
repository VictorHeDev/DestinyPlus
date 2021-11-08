import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Video from './video';
// import { requestVideo } from '../../actions/video_actions';

const mSTP = (state, ownProps) => {
  const videos = selectVideosFromGenre(ownProps.genre, state.entities.videos);

  return {
    videos: videos,
  };
};

// const mDTP = (dispatch) => ({});

export default withRouter(connect()(Video));

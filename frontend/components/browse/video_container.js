import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Video from './video';
// import { requestVideo } from '../../actions/video_actions';

const mSTP = (state, ownProps) => {
  const series = selectVideosFromGenre(ownProps.genre, state.entities.videos);

  return {
    series: series,
  };
};

// const mDTP = (dispatch) => ({});

export default withRouter(connect()(Video));

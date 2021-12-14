import { connect } from 'react-redux';
import Search from './search';
import { withRouter } from 'react-router';
import { requestVideos } from '../../actions/video_actions';

const mSTP = (state, ownProps) => {
  return {
    videos: Object.values(state.entities.videos),
  };
};

const mDTP = (dispatch) => ({
  requestVideos: () => dispatch(requestVideos()),
});

export default withRouter(connect(mSTP, mDTP)(Search));

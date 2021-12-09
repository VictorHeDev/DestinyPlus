import { connect } from 'react-redux';
import Series from './series';
import { withRouter } from 'react-router';
import { requestVideos } from '../../actions/video_actions';
import { selectVideosByMediatype } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
  const series = selectVideosByMediatype('tv', state.entities.videos);

  return {
    series: series,
  };
};

const mDTP = (dispatch) => ({
  requestVideos: () => dispatch(requestVideos()),
});

export default withRouter(connect(mSTP, mDTP)(Series));

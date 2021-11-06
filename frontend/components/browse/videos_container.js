import { connect } from 'react-redux';
import Videos from './videos';
import { selectVideosFromGenre } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
  const videos = selectVideosFromGenre(ownProps.genre, state.entities.videos);
  debugger;
  return {
    videos: videos,
  };
};

const mDTP = (dispatch) => ({});

export default connect(mSTP, mDTP)(Videos);

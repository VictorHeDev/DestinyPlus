import { connect } from 'react-redux';
import Videos from './videos';
import { selectVideosFromGenre } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
  // debugger;
  const videos = selectVideosFromGenre(ownProps.genre, state.entities.videos);
  return {
    videos: videos,
  };
};

const mDTP = (dispatch) => ({});

export default connect(mSTP, mDTP)(Videos);

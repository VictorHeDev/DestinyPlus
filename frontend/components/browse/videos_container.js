import { connect } from 'react-redux';
import Videos from './Videos';
import { selectVideosFromGenre } from '../../reducers/selectors';
import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => {
  const videos = selectVideosFromGenre(ownProps.genre, state.entities.videos);

  return {
    videos: videos,
  };
};

// const mDTP = (dispatch) => ({});

export default withRouter(connect(mSTP)(Videos));

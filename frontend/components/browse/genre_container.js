import { connect } from 'react-redux';
import Genre from './genre';
import { selectedVideos } from '../../reducers/selectors';
import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => {
  return {
    // videos:
  };
};

const mDTP = (dispatch) => ({});

export default withRouter(connect(mSTP, mDTP)(Genre));

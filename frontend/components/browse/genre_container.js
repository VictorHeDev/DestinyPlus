import { connect } from 'react-redux';
import Genre from './genre';
import { selectedVideos } from '../../reducers/selectors';

const mSTP = (state, ownProps) => {
  return {
    // videos:
  };
};

const mDTP = (dispatch) => ({});

export default connect(mSTP, mDTP)(Genre);

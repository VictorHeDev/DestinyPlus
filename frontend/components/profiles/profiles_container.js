import { connect } from 'react-redux';
import { requestProfile, requestProfiles } from '../../actions/profile_actions';
import { withRouter } from 'react-router';
import Profiles from './profiles';

const mSTP = (state, ownProps) => {
  return {
    profiles: Object.values(state.entities.profiles),
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    requestProfiles: () => dispatch(requestProfiles()),
    requestProfile: (profileId) => dispatch(requestProfile(profileId)),
  };
};

export default withRouter(connect(mSTP, mDTP)(Profiles));

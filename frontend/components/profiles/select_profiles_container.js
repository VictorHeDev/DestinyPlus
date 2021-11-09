import { connect } from 'react-redux';
import {
  requestProfile,
  requestProfiles,
  reformatProfiles,
  receiveCurrentProfile,
} from '../../actions/profile_actions';
import { withRouter } from 'react-router';
import SelectProfiles from './select_profiles';

const mSTP = (state, ownProps) => {
  return {
    profiles: Object.values(state.entities.profiles),
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    requestProfiles: () => dispatch(requestProfiles()),
    requestProfile: (profileId) => dispatch(requestProfile(profileId)),
    reformatProfiles: (profileId) => dispatch(reformatProfiles(profileId)),
    receiveCurrentProfile: (profileId) =>
      dispatch(receiveCurrentProfile(profileId)),
  };
};

export default withRouter(connect(mSTP, mDTP)(SelectProfiles));

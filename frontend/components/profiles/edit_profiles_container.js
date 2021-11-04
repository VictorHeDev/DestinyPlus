import { connect } from 'react-redux';
import { requestProfile, requestProfiles } from '../../actions/profile_actions';
import EditProfiles from './edit_profiles';

const mSTP = (state, ownProps) => {
  // debugger
  return {
    profiles: Object.values(state.entities.profiles),
  };
};

const mDTP = (dispatch, ownProps) => {
  return {
    requestProfiles: () => dispatch(requestProfiles()),
    requestProfile: (profileId) => dispatch(requestProfile(profileId)),
    reformatProfiles: (profileId) => dispatch(reformatProfiles(profileId)),
  };
};

export default connect(mSTP, mDTP)(EditProfiles);

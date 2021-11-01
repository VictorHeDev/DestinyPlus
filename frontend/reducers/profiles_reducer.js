import {
  RECEIVE_ALL_PROFILES,
  RECEIVE_PROFILE,
  REMOVE_PROFILE,
} from '../actions/profile_actions';
// create list

const ProfilesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = { ...oldState };

  switch (action.type) {
    case RECEIVE_ALL_PROFILES:
      return action.profiles;
    case RECEIVE_PROFILE:
      nextState[action.profile.id] = action.profile;
      return nextState;
    case REMOVE_PROFILE:
      delete nextState[action.profileId];
      return nextState;
    default:
      oldState;
  }
};

export default ProfilesReducer;

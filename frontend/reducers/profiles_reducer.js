import {
  RECEIVE_ALL_PROFILES,
  RECEIVE_PROFILE,
  REMOVE_PROFILE,
  REFORMAT_PROFILE,
} from '../actions/profile_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
// create list

const ProfilesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = { ...oldState };

  switch (action.type) {
    // case RECEIVE_CURRENT_USER:
    //   return action.currentUser.profiles;
    case RECEIVE_ALL_PROFILES:
      return action.profiles;
    case RECEIVE_PROFILE:
      // nextState[action.profile.id] = action.profile;
      // return action.profile;
      return { ...nextState, [action.profile.id]: action.profile };
    case REMOVE_PROFILE:
      delete nextState[action.profileId];
      return nextState;
    case REFORMAT_PROFILE:
      return nextState[action.profileId];
    default:
      return oldState;
  }
};

export default ProfilesReducer;

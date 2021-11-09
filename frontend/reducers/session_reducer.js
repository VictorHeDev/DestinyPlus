import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';
import { RECEIVE_CURRENT_PROFILE } from '../actions/profile_actions';

const _nullUser = Object.freeze({
  id: null,
  currentProfile: null,
});

const sessionReducer = (oldState = _nullUser, action) => {
  Object.freeze(oldState);
  let nextState = { ...oldState };

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState.id = action.currentUser.id;
      return nextState;
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    case RECEIVE_CURRENT_PROFILE:
      nextState.currentProfile = action.profileId;
      return nextState;
    default:
      return oldState;
  }
};

export default sessionReducer;

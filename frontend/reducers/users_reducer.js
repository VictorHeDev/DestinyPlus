import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { REFORMAT_PROFILE } from '../actions/profile_actions';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = { ...oldState };

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState[action.currentUser.id] = action.currentUser;
      return nextState;
    case REFORMAT_PROFILE:
    // return {
    // ...nextState,
    // profile: nextState.,
    // };
    default:
      return oldState;
  }
};

export default usersReducer;

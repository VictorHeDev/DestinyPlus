import { combineReducers } from 'redux';

import users from './users_reducer';
import profile from './profiles_reducer';

const entitiesReducer = combineReducers({
  users,
  profile,
  // genre
  // video
});

export default entitiesReducer;

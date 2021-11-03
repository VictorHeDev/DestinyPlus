import { combineReducers } from 'redux';

import users from './users_reducer';
import profiles from './profiles_reducer';

const entitiesReducer = combineReducers({
  users,
  profiles,
  // genre
  // video
});

export default entitiesReducer;

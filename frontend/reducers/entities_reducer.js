import { combineReducers } from 'redux';

import users from './users_reducer';

const entitiesReducer = combineReducers({
  users,
  // profile
  // genre
  // video
});

export default entitiesReducer;

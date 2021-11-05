import { combineReducers } from 'redux';

import users from './users_reducer';
import profiles from './profiles_reducer';
import genres from './genres_reducer';
import videos from './videos_reducer';

const entitiesReducer = combineReducers({
  users,
  profiles,
  genres,
  videos,
});

export default entitiesReducer;

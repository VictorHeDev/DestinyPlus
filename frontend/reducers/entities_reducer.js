import { combineReducers } from 'redux';

import users from './users_reducer';
import profiles from './profiles_reducer';
import genres from './genres_reducer';
import videos from './videos_reducer';
import watchlists from './watchlists_reducer';

const entitiesReducer = combineReducers({
  users,
  profiles,
  genres,
  videos,
  // watchlists,
});

export default entitiesReducer;

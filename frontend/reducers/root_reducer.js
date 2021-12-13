import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
// import ui from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
  // profile: have separate profile reducer to check if there is a current profile ... initially null -> return string representing profile
  // boolean value to check if there is a current profile
  // ui,
});

export default rootReducer;

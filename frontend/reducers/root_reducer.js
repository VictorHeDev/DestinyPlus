import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionErrorsReducer from './session_reducer';
import errorsReducer from './errors_reducer';
// import ui from './ui_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionErrorsReducer,
  errors: errorsReducer,
  // ui,
});

export default rootReducer;

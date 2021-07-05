import { combineReducers } from 'redux';

import authenticationReducer from './authentication.reducer';
import authFormReducer from './auth-form.reducer';
import appReducer from './app.reducer';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  app: appReducer,
  authForm: authFormReducer,
});

export default rootReducer;

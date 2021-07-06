import { combineReducers } from 'redux';

import authenticationReducer from './authentication.reducer';
import authFormReducer from './auth-form.reducer';
import appReducer from './app.reducer';
import mainMenuReducer from './main-menu.reducer';
import userReducer from './user.reducer';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  app: appReducer,
  authForm: authFormReducer,
  mainMenu: mainMenuReducer,
  user: userReducer,
});

export default rootReducer;

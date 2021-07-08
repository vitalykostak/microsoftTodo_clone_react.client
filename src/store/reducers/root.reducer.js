import { combineReducers } from 'redux';

import authenticationReducer from './authentication.reducer';
import authFormReducer from './auth-form.reducer';
import mainMenuReducer from './main-menu.reducer';
import tasksReducer from './tasks.reducer';
import listsReducer from './lists.reducer';
import userReducer from './user.reducer';
import appReducer from './app.reducer';

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  authForm: authFormReducer,
  mainMenu: mainMenuReducer,
  tasks: tasksReducer,
  lists: listsReducer,
  user: userReducer,
  app: appReducer,
});

export default rootReducer;

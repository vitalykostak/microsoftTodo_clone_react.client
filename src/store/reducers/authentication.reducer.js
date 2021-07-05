import { SET_AUTH, UNSET_AUTH } from '../actionTypes';
import authHelper from '../../helpers/auth-helper';

const initalState = authHelper.checkAuth();

function authenticationReducer(state = initalState, action) {
  switch (action.type) {
    case SET_AUTH: {
      return true;
    }
    case UNSET_AUTH: {
      return false;
    }
    default:
      return state;
  }
}

export default authenticationReducer;

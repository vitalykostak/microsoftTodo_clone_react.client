import userService from '../../services/user-service';
import { SET_USER_INFO } from '../actionTypes';

export const setUserInfo = payload => ({
  type: SET_USER_INFO,
  payload,
});

// =============================================

export const fetchUserInfo = () => dispatch => {
  return userService.getUserInfo(dispatch);
};

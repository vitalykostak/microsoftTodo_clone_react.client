import {
  SET_FIRSTNAME_HTTP_ERROR,
  SET_SURNAME_HTTP_ERROR,
  SET_USERNAME_HTTP_ERROR,
  SET_PASSWORD_HTTP_ERROR,
  SET_AUTH_ACTIVE_ACTION,
  SET_VISIBLE_REGISTER_FIELDS,
  UNSET_VISIBLE_REGISTER_FIELDS,
} from '../actionTypes';
import authService from '../../services/auth-service';

export const setFirstNameHTTPError = payload => ({
  type: SET_FIRSTNAME_HTTP_ERROR,
  payload,
});

export const setSurnameHTTPError = payload => ({
  type: SET_SURNAME_HTTP_ERROR,
  payload,
});
export const setUsernameHTTPError = payload => ({
  type: SET_USERNAME_HTTP_ERROR,
  payload,
});

export const setPasswordHTTPError = payload => ({
  type: SET_PASSWORD_HTTP_ERROR,
  payload,
});

export const setAuthActiveAction = payload => ({
  type: SET_AUTH_ACTIVE_ACTION,
  payload,
});

export const setVisibleRegisterFields = () => ({
  type: SET_VISIBLE_REGISTER_FIELDS,
});

export const unsetVisibleRegisterFields = () => ({
  type: UNSET_VISIBLE_REGISTER_FIELDS,
});

// ========================================================================

export const fetchRegistration =
  (firstName, surname, username, password) => dispatch => {
    return authService.registration(dispatch, {
      firstName,
      surname,
      username,
      password,
    });
  };

export const fetchLogin = (username, password) => dispatch => {
  return authService.login(dispatch, { username, password });
};

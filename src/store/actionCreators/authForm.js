import {
  SET_FIRSTNAME_FIELD,
  SET_SURNAME_FIELD,
  SET_USERNAME_FIELD,
  SET_PASSWORD_FIELD,
  SET_FIRSTNAME_VISITED,
  SET_SURNAME_VISITED,
  SET_USERNAME_VISITED,
  SET_PASSWORD_VISITED,
  SET_FIRSTNAME_HTTP_ERROR,
  SET_SURNAME_HTTP_ERROR,
  SET_USERNAME_HTTP_ERROR,
  SET_PASSWORD_HTTP_ERROR,
  SET_AUTH_ACTIVE_ACTION,
  SET_VISIBLE_REGISTER_FIELDS,
  UNSET_VISIBLE_REGISTER_FIELDS,
} from '../actionTypes';
import authService from '../../services/auth-service';

export const setFirstNameValue = payload => ({
  type: SET_FIRSTNAME_FIELD,
  payload,
});

export const setSurnameValue = payload => ({
  type: SET_SURNAME_FIELD,
  payload,
});
export const setUsernameValue = payload => ({
  type: SET_USERNAME_FIELD,
  payload,
});

export const setPasswordValue = payload => ({
  type: SET_PASSWORD_FIELD,
  payload,
});

export const setFirstNameVisit = () => ({
  type: SET_FIRSTNAME_VISITED,
});

export const setSurnameVisit = () => ({
  type: SET_SURNAME_VISITED,
});
export const setUsernameVisit = () => ({
  type: SET_USERNAME_VISITED,
});

export const setPasswordVisit = () => ({
  type: SET_PASSWORD_VISITED,
});

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

// ===================================================================
export const setAuthActionWithVisibleFields = activeAction => dispatch => {
  dispatch(setVisibleRegisterFields());
  dispatch(setAuthActiveAction(activeAction));
};
export const setAuthActionWithoutVisibleFields = activeAction => dispatch => {
  dispatch(unsetVisibleRegisterFields());
  setTimeout(() => {
    dispatch(setAuthActiveAction(activeAction));
  }, 200);
};

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

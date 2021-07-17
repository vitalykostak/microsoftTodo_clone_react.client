import api from '../api';
import authHelper from '../helpers/auth-helper';
import ResponseHelper from '../helpers/response-helper';
import {
  setFirstNameHTTPError,
  setSurnameHTTPError,
  setUsernameHTTPError,
  setPasswordHTTPError,
} from '../store/actionCreators/authForm';

class AuthService {
  async registration(dispatch, { firstName, surname, username, password }) {
    return await api('/auth/registration', 'POST', {
      firstName,
      surname,
      username,
      password,
    }).then(response => {
      const { statusCode, json } = response;

      if (statusCode === 400) {
        const errors = ResponseHelper.findErrorsByParam(
          json.errors,
          'username',
          'password',
          'firstName',
          'surname'
        );

        errors.firstName &&
          dispatch(setFirstNameHTTPError({ registration: errors.firstName }));
        errors.surname &&
          dispatch(setSurnameHTTPError({ registration: errors.surname }));
        errors.username &&
          dispatch(setUsernameHTTPError({ registration: errors.username }));
        errors.password &&
          dispatch(setPasswordHTTPError({ registration: errors.password }));
      } else if (statusCode === 201) {
        authHelper.setAuthDataToLS({
          token: json.accesToken,
        });
        window.location.reload();
      }
    });
  }

  async login(dispatch, { username, password }) {
    return await api('/auth/login', 'POST', {
      username,
      password,
    }).then(response => {
      const { statusCode, json } = response;

      if (statusCode === 400) {
        const errors = ResponseHelper.findErrorsByParam(
          json.errors,
          'username',
          'password'
        );
        errors.username &&
          dispatch(setUsernameHTTPError({ login: errors.username }));
        errors.password &&
          dispatch(setPasswordHTTPError({ login: errors.password }));
      } else if (statusCode === 200) {
        authHelper.setAuthDataToLS({
          token: json.accesToken,
        });
        window.location.reload();
      }
    });
  }

  async logout() {
    return await api('/auth/logout', 'DELETE').finally(() => {
      authHelper.deleteToken();
      window.location.reload();
    });
  }

  async refresh() {
    return await api('/auth/refresh', 'GET').then(response => {
      if (response.statusCode === 200) {
        authHelper.deleteToken();
        authHelper.setAuthDataToLS({
          token: response.json.accesToken,
        });
      }
    });
  }
}

export default new AuthService();

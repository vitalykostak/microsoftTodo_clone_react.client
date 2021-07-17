import AuthError from '../exceptions/authentication-exception';
import AuthHelper from '../helpers/auth-helper';
import api from './api';

async function requestInterceptor(
  url,
  method,
  body = null,
  headers = {},
  needToken = true
) {
  try {
    // If token === true. Add token to request
    if (!needToken) {
      return await api(url, method, body, headers);
    }

    const token = AuthHelper.getToken();
    if (token) {
      headers.authorization = `Bearer ${token}`;
    }

    return await api(url, method, body, headers);
  } catch (e) {
    console.log(e);
    if (e instanceof AuthError) {
      const {
        json: { accesToken },
      } = await api(`/auth/refresh`, 'GET');
      AuthHelper.setAuthDataToLS({ token: accesToken });
      const newToken = AuthHelper.getToken();
      if (newToken) {
        headers.authorization = `Bearer ${newToken}`;
      }
      return await api(url, method, body, headers);
    }
    throw e;
  }
}

export default requestInterceptor;

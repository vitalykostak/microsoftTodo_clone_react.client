import AuthHelper from '../helpers/auth-helper';
import api from './api';

async function requestInterceptor(
  url,
  method,
  body = null,
  headers = {},
  needToken = true
) {
  // If token === true. Add token to request
  if (!needToken) {
    return await api(url, method, body, headers);
  }

  const token = AuthHelper.getToken();
  if (token) {
    headers.authorization = `Bearer ${token}`;
  }

  return await api(url, method, body, headers);
}

export default requestInterceptor;

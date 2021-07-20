import AuthError from '../exceptions/authentication-exception';
import NetworkError from '../exceptions/network-exception';
import ServerError from '../exceptions/server-exception';
import ApiHelper from '../helpers/api-helper';

async function api(url, method, body = null, headers = {}) {
  try {
    const fetchOption = {
      method,
      credentials: 'include',
      headers: { ...headers },
    };

    if (body) {
      fetchOption.headers['Content-Type'] = 'application/json';
      fetchOption.body = JSON.stringify(body);
    }

    // const URL = `https://radiant-brook-31860.herokuapp.com/api${url}`;
    const URL = `http://localhost:5000/api${url}`;
    const response = await fetch(URL, fetchOption);
    const normalisedResponse = await ApiHelper.normaliseResponse(response);
    ApiHelper.checkServerError(normalisedResponse);
    ApiHelper.checkAuthError(normalisedResponse);
    return normalisedResponse;
  } catch (e) {
    if (e instanceof ServerError || e instanceof AuthError) {
      throw e;
    }
    console.log(e);
    throw new NetworkError('Ошибка связи');
  }
}

export default api;

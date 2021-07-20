import ServerError from '../exceptions/server-exception';
import AuthError from '../exceptions/authentication-exception';

class ApiHelper {
  hasBody(response) {
    if (response.status === 204) {
      return false;
    }

    if (!response.headers.get('Content-Length')) {
      return false;
    }

    return true;
  }

  async normaliseResponse(response) {
    const statusCode = response.status;

    if (!this.hasBody(response)) {
      return { statusCode };
    }

    const json = await response.json();
    return { statusCode, json };
  }

  checkServerError(normalisedResponse) {
    if (`${normalisedResponse.statusCode}`.match(/^5\d{2}$/)) {
      throw new ServerError(
        normalisedResponse.json.message,
        normalisedResponse.statusCode
      );
    }
  }

  checkAuthError(normalisedResponse) {
    if (normalisedResponse.statusCode === 401) {
      throw new AuthError(normalisedResponse.json.message);
    }
  }
}

export default new ApiHelper();

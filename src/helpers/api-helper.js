import ServerError from '../exceptions/server-exception';

class ApiHelper {
  hasBody(response) {
    console.log(response.headers.get('Content-Length'));
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
}

export default new ApiHelper();

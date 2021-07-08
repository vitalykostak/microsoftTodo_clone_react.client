import api from '../api';
import { setLists } from '../store/actionCreators/lists';

class ListService {
  async getLists(dispatch) {
    return await api('/list', 'GET').then(response => {
      const { statusCode, json } = response;
      console.log(statusCode);
      if (statusCode === 404) {
        return dispatch(setLists([]));
      } else if (statusCode === 200) {
        return console.log(json);
        // return dispatch(setLists());
      }
    });
  }
}

export default new ListService();

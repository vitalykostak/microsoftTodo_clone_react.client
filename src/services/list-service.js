import api from '../api';
import { setLists, setOneList } from '../store/actionCreators/lists';

class ListService {
  async getLists(dispatch) {
    return await api('/list', 'GET').then(response => {
      const { statusCode, json } = response;
      if (statusCode === 404) {
        return dispatch(setLists([]));
      } else if (statusCode === 200) {
        // return console.log(json);
        return dispatch(setLists(json));
      }
    });
  }

  async create(dispatch, label) {
    return await api('/list', 'POST', { label }).then(response => {
      const { statusCode, json } = response;
      if (statusCode === 201) {
        // return console.log(json);
        return dispatch(setOneList(json));
      }
    });
  }
}

export default new ListService();

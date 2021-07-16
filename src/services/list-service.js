import api from '../api';
import {
  setLists,
  setOneList,
  replaceOneList,
} from '../store/actionCreators/lists';

class ListService {
  async getLists(dispatch) {
    return await api('/list', 'GET').then(response => {
      const { statusCode, json } = response;
      if (statusCode === 404) {
        return dispatch(setLists([]));
      } else if (statusCode === 200) {
        return dispatch(setLists(json));
      }
    });
  }

  async create(dispatch, label) {
    return await api('/list', 'POST', { label }).then(response => {
      const { statusCode, json } = response;
      if (statusCode === 201) {
        return dispatch(setOneList(json));
      }
    });
  }

  async update(dispatch, { listId, updateData }) {
    return await api('/list', 'PATCH', { listId, updateData }).then(
      response => {
        const { statusCode, json } = response;
        if (statusCode === 200) {
          return dispatch(replaceOneList(json));
        }
      }
    );
  }
}

export default new ListService();

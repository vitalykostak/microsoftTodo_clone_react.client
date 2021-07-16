import api from '../api';
import {
  setLists,
  setOneList,
  deleteOneList,
  replaceOneList,
  setActiveList,
} from '../store/actionCreators/lists';

import { deleteTasksByListId } from '../store/actionCreators/tasks';

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

  async delete(dispatch, listId) {
    return await api('/list', 'DELETE', { listId }).then(response => {
      const { statusCode } = response;
      if (statusCode === 204) {
        dispatch(deleteOneList(listId));
        dispatch(deleteTasksByListId(listId));
        return dispatch(setActiveList('__DEFAULT_LIST_TASKS__'));
      }
    });
  }
}

export default new ListService();

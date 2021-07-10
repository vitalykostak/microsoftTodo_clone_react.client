import api from '../api';
import {
  setTasks,
  setOneTask,
  unsetCreatingTask,
  setNewTaskValue,
} from '../store/actionCreators/tasks';

class TaskService {
  async getTasks(dispatch) {
    return await api('/task', 'GET').then(response => {
      const { statusCode, json } = response;
      if (statusCode === 404) {
        return dispatch(setTasks([]));
      } else if (statusCode === 200) {
        return dispatch(setTasks(json));
      }
    });
  }

  async addNewTask(dispatch, newTaskObj) {
    return await api('/task', 'POST', { task: newTaskObj }).then(response => {
      const { statusCode, json } = response;
      if (statusCode === 201) {
        dispatch(setOneTask(json));
        dispatch(unsetCreatingTask());
        dispatch(setNewTaskValue(''));
      }
    });
  }
}

export default new TaskService();

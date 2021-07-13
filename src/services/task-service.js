import api from '../api';
import {
  setTasks,
  setOneTask,
  deleteOneTask,
  replaceOneTask,
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

  async updateTask(dispatch, { taskId, updateData }) {
    return await api('/task', 'PATCH', { taskId, updateData }).then(
      response => {
        const { statusCode, json } = response;

        if (statusCode === 200) {
          dispatch(replaceOneTask(json));
        }
      }
    );
  }

  async deleteTask(dispatch, taskId) {
    return await api('/task', 'DELETE', { taskId }).then(response => {
      const { statusCode } = response;

      if (statusCode === 204) {
        dispatch(deleteOneTask(taskId));
      }
    });
  }
}

export default new TaskService();

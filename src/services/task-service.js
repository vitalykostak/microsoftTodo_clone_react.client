import api from '../api';
import { setTasks } from '../store/actionCreators/tasks';

class TaskService {
  async getTasks(dispatch) {
    return await api('/task', 'GET').then(response => {
      const { statusCode, json } = response;
      console.log(statusCode);
      if (statusCode === 404) {
        return dispatch(setTasks([]));
      } else if (statusCode === 200) {
        return console.log(json);
        // return dispatch(setTasks());
      }
    });
  }
}

export default new TaskService();

import { SET_TASKS } from '../actionTypes';
import taskService from '../../services/task-service';

export const setTasks = payload => ({
  type: SET_TASKS,
  payload,
});

// =============================================

export const fetchAllTasks = () => dispatch => {
  return taskService.getTasks(dispatch);
};

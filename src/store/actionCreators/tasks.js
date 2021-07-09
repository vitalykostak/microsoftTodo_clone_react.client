import {
  SET_TASKS,
  SET_CREATING_TASK,
  UNSET_CREATING_TASK,
} from '../actionTypes';
import taskService from '../../services/task-service';

export const setTasks = payload => ({
  type: SET_TASKS,
  payload,
});

export const setCreatingTask = () => ({
  type: SET_CREATING_TASK,
});

export const unsetCreatingTask = () => ({
  type: UNSET_CREATING_TASK,
});

// =============================================

export const fetchAllTasks = () => dispatch => {
  return taskService.getTasks(dispatch);
};

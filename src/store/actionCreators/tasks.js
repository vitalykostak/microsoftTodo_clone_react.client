import {
  SET_TASKS,
  SET_ONE_TASK,
  SET_CREATING_TASK,
  UNSET_CREATING_TASK,
  SET_NEW_TASK_VALUE,
  REPLACE_ONE_TASK,
} from '../actionTypes';
import taskService from '../../services/task-service';

export const setTasks = payload => ({
  type: SET_TASKS,
  payload,
});

export const setOneTask = payload => ({
  type: SET_ONE_TASK,
  payload,
});

export const replaceOneTask = payload => ({
  type: REPLACE_ONE_TASK,
  payload,
});

export const setCreatingTask = () => ({
  type: SET_CREATING_TASK,
});

export const unsetCreatingTask = () => ({
  type: UNSET_CREATING_TASK,
});

export const setNewTaskValue = payload => ({
  type: SET_NEW_TASK_VALUE,
  payload,
});

// =============================================

export const fetchAllTasks = () => dispatch => {
  return taskService.getTasks(dispatch);
};

export const fetchAddNewTask = newTaskObj => dispatch => {
  return taskService.addNewTask(dispatch, newTaskObj);
};

export const fetchUpdateTask = updateData => dispatch => {
  return taskService.updateTask(dispatch, updateData);
};

import {
  SET_TASKS,
  SET_ONE_TASK,
  DELETE_ONE_TASK,
  DELETE_TASKS_BY_LIST_ID,
  REPLACE_ONE_TASK,
  SET_VISIBLE_TASK_DETAILS,
  UNSET_VISIBLE_TASK_DETAILS,
  SET_ACTIVE_TASK,
  UNSET_ACTIVE_TASK,
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

export const deleteOneTask = payload => ({
  type: DELETE_ONE_TASK,
  payload,
});

export const deleteTasksByListId = payload => ({
  type: DELETE_TASKS_BY_LIST_ID,
  payload,
});

export const setVisibeTaskDetails = () => ({
  type: SET_VISIBLE_TASK_DETAILS,
});

export const unsetVisibeTaskDetails = () => ({
  type: UNSET_VISIBLE_TASK_DETAILS,
});

export const setActiveTask = payload => ({
  type: SET_ACTIVE_TASK,
  payload,
});

export const unsetActiveTask = () => ({
  type: UNSET_ACTIVE_TASK,
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

export const fetchDeleteTask = taskId => dispatch => {
  return taskService.deleteTask(dispatch, taskId);
};

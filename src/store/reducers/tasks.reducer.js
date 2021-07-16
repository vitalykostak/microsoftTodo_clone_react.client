import listHelper from '../../helpers/list-helper';
import {
  SET_TASKS,
  SET_ONE_TASK,
  REPLACE_ONE_TASK,
  DELETE_ONE_TASK,
  SET_VISIBLE_TASK_DETAILS,
  UNSET_VISIBLE_TASK_DETAILS,
  SET_ACTIVE_TASK,
  UNSET_ACTIVE_TASK,
} from '../actionTypes';

const initialState = {
  allTasks: null,
  isDisplayTaskDetails: false,
  activeTask: null,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS: {
      return {
        ...state,
        allTasks: [...action.payload],
      };
    }

    case SET_ONE_TASK: {
      return {
        ...state,
        allTasks: [...state.allTasks, action.payload],
      };
    }

    case DELETE_ONE_TASK: {
      return {
        ...state,
        allTasks: [...listHelper.deleteOneTask(state.allTasks, action.payload)],
      };
    }

    case REPLACE_ONE_TASK: {
      return {
        ...state,
        allTasks: [
          ...listHelper.findAndReplace(state.allTasks, action.payload),
        ],
      };
    }

    case SET_VISIBLE_TASK_DETAILS: {
      return {
        ...state,
        isDisplayTaskDetails: true,
      };
    }

    case UNSET_VISIBLE_TASK_DETAILS: {
      return {
        ...state,
        isDisplayTaskDetails: false,
      };
    }

    case SET_ACTIVE_TASK: {
      return {
        ...state,
        activeTask: action.payload,
      };
    }

    case UNSET_ACTIVE_TASK: {
      return {
        ...state,
        activeTask: null,
      };
    }

    default: {
      return state;
    }
  }
};

export default tasksReducer;

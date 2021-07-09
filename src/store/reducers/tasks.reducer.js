import {
  SET_TASKS,
  SET_CREATING_TASK,
  UNSET_CREATING_TASK,
} from '../actionTypes';

const initialState = {
  allTasks: null,
  creatingTask: false,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS: {
      return {
        ...state,
        allTasks: [...action.payload],
      };
    }

    case SET_CREATING_TASK: {
      return {
        ...state,
        creatingTask: true,
      };
    }

    case UNSET_CREATING_TASK: {
      return {
        ...state,
        creatingTask: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default tasksReducer;

import { SET_TASKS } from '../actionTypes';

const initialState = {
  allTasks: null,
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASKS: {
      return {
        ...state,
        allTasks: [...action.payload],
      };
    }

    default: {
      return state;
    }
  }
};

export default tasksReducer;

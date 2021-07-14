import { SET_LISTS, SET_ONE_LIST, SET_ACTIVE_LIST } from '../actionTypes';

const initialState = {
  defaultLists: [
    { _id: '__DEFAULT_LIST_IMPORTANT__', label: 'Важно' },
    { _id: '__DEFAULT_LIST_TASKS__', label: 'Задачи' },
  ],
  customLists: null,
  activeListId: '__DEFAULT_LIST_TASKS__',
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTS: {
      return {
        ...state,
        customLists: [...action.payload],
      };
    }
    case SET_ONE_LIST: {
      return {
        ...state,
        customLists: [...state.customLists, action.payload],
      };
    }

    case SET_ACTIVE_LIST: {
      return {
        ...state,
        activeListId: `${action.payload}`,
      };
    }

    default: {
      return state;
    }
  }
};

export default listsReducer;

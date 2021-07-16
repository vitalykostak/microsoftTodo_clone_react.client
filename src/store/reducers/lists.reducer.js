import {
  SET_LISTS,
  SET_ONE_LIST,
  DELETE_ONE_LIST,
  SET_ACTIVE_LIST,
  REPLACE_ONE_LIST,
} from '../actionTypes';

import listHelper from '../../helpers/list-helper';

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

    case DELETE_ONE_LIST: {
      return {
        ...state,
        customLists: [
          ...listHelper.deleteOneList(state.customLists, action.payload),
        ],
      };
    }

    case REPLACE_ONE_LIST: {
      return {
        ...state,
        customLists: listHelper.findAndReplace(
          [...state.customLists],
          action.payload
        ),
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

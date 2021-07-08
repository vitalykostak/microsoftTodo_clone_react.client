import { SET_LISTS } from '../actionTypes';

const initialState = {
  allLists: null,
  activeList: '__DEFAULT_LIST_TASKS__',
};

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LISTS: {
      return {
        ...state,
        allLists: [...action.payload],
      };
    }

    default: {
      return state;
    }
  }
};

export default listsReducer;

import {
  SET_ACTIVE_DROPDOWN,
  UNSET_ACTIVE_DROPDOWN,
  SET_HIDDING_DROPDOWN,
  UNSET_HIDDING_DROPDOWN,
  UNSET_VISIBLE_MAIN_MENU,
  SET_VISIBLE_MAIN_MENU,
} from '../actionTypes';

const initialState = {
  profileDropDown: {
    isActive: false,
    isHidding: false,
  },
  mainMenuVisible: true,
};

function mainMenuReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ACTIVE_DROPDOWN: {
      return {
        ...state,
        profileDropDown: {
          ...state.profileDropDown,
          isActive: true,
        },
      };
    }
    case UNSET_ACTIVE_DROPDOWN: {
      return {
        ...state,
        profileDropDown: {
          ...state.profileDropDown,
          isActive: false,
        },
      };
    }
    case SET_HIDDING_DROPDOWN: {
      return {
        ...state,
        profileDropDown: {
          ...state.profileDropDown,
          isHidding: true,
        },
      };
    }
    case UNSET_HIDDING_DROPDOWN: {
      return {
        ...state,
        profileDropDown: {
          ...state.profileDropDown,
          isHidding: false,
        },
      };
    }

    case SET_VISIBLE_MAIN_MENU: {
      return {
        ...state,
        mainMenuVisible: true,
      };
    }

    case UNSET_VISIBLE_MAIN_MENU: {
      return {
        ...state,
        mainMenuVisible: false,
      };
    }
    default: {
      return state;
    }
  }
}

export default mainMenuReducer;

import {
  SET_FETCHING,
  UNSET_FETCHING,
  SET_NETWORK_ERROR,
  UNSET_NETWORK_ERROR,
  SET_SERVER_ERROR,
  UNSET_SERVER_ERROR,
} from '../actionTypes';

const initialState = {
  networkError: null,
  serverError: null,
  isFetching: false,
  existingFetch: null,
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FETCHING: {
      return {
        ...state,
        isFetching: true,
        existingFetch: action.payload,
      };
    }
    case UNSET_FETCHING: {
      return {
        ...state,
        isFetching: false,
        existingFetch: null,
      };
    }
    case SET_NETWORK_ERROR: {
      return {
        ...state,
        networkError: action.payload,
      };
    }
    case UNSET_NETWORK_ERROR: {
      return {
        ...state,
        networkError: false,
      };
    }
    case SET_SERVER_ERROR: {
      return {
        ...state,
        serverError: action.payload,
      };
    }
    case UNSET_SERVER_ERROR: {
      return {
        ...state,
        serverError: null,
      };
    }
    default: {
      return state;
    }
  }
}

export default appReducer;

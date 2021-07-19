import {
  SET_FIRSTNAME_HTTP_ERROR,
  SET_SURNAME_HTTP_ERROR,
  SET_USERNAME_HTTP_ERROR,
  SET_PASSWORD_HTTP_ERROR,
  SET_AUTH_ACTIVE_ACTION,
  SET_VISIBLE_REGISTER_FIELDS,
  UNSET_VISIBLE_REGISTER_FIELDS,
} from '../actionTypes';

const initialState = {
  firstNameField: {
    httpError: {
      login: null,
      registration: null,
    },
  },
  surnameField: {
    httpError: {
      login: null,
      registration: null,
    },
  },
  usernameField: {
    httpError: {
      login: null,
      registration: null,
    },
  },
  passwordField: {
    httpError: {
      login: null,
      registration: null,
    },
  },
  activeAction: 'login',
  visibleRegisterFields: false,
};

function authFormReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FIRSTNAME_HTTP_ERROR: {
      return {
        ...state,
        firstNameField: {
          ...state.firstNameField,
          httpError: { ...state.httpError, ...action.payload },
        },
      };
    }
    case SET_SURNAME_HTTP_ERROR: {
      return {
        ...state,
        surnameField: {
          ...state.surnameField,
          httpError: { ...state.httpError, ...action.payload },
        },
      };
    }
    case SET_USERNAME_HTTP_ERROR: {
      return {
        ...state,
        usernameField: {
          ...state.usernameField,
          httpError: { ...state.httpError, ...action.payload },
        },
      };
    }
    case SET_PASSWORD_HTTP_ERROR: {
      return {
        ...state,
        passwordField: {
          ...state.passwordField,
          httpError: { ...state.httpError, ...action.payload },
        },
      };
    }
    case SET_AUTH_ACTIVE_ACTION: {
      return {
        ...state,
        activeAction: action.payload,
      };
    }

    case SET_VISIBLE_REGISTER_FIELDS: {
      return {
        ...state,
        visibleRegisterFields: true,
      };
    }
    case UNSET_VISIBLE_REGISTER_FIELDS: {
      return {
        ...state,
        visibleRegisterFields: false,
      };
    }
    default:
      return state;
  }
}

export default authFormReducer;

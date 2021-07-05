import authHelper from '../../helpers/auth-helper';
import {
  SET_FIRSTNAME_FIELD,
  SET_SURNAME_FIELD,
  SET_USERNAME_FIELD,
  SET_PASSWORD_FIELD,
  SET_FIRSTNAME_VISITED,
  SET_SURNAME_VISITED,
  SET_USERNAME_VISITED,
  SET_PASSWORD_VISITED,
  SET_FIRSTNAME_HTTP_ERROR,
  SET_SURNAME_HTTP_ERROR,
  SET_USERNAME_HTTP_ERROR,
  SET_PASSWORD_HTTP_ERROR,
  SET_AUTH_ACTIVE_ACTION,
  SET_VISIBLE_REGISTER_FIELDS,
  UNSET_VISIBLE_REGISTER_FIELDS,
} from '../actionTypes';

const initalState = {
  firstNameField: {
    value: '',
    visited: false,
    error: 'Введите имя',
    httpError: {
      login: null,
      registration: null,
    },
  },
  surnameField: {
    value: '',
    visited: false,
    error: 'Введите фамилию',
    httpError: {
      login: null,
      registration: null,
    },
  },
  usernameField: {
    value: '',
    visited: false,
    error: 'Введите имя пользователя',
    httpError: {
      login: null,
      registration: null,
    },
  },
  passwordField: {
    value: '',
    visited: false,
    error: 'Введите пароль',
    httpError: {
      login: null,
      registration: null,
    },
  },
  activeAction: 'login',
  visibleRegisterFields: false,
};

function authFormReducer(state = initalState, action) {
  switch (action.type) {
    case SET_FIRSTNAME_FIELD: {
      return {
        ...state,
        firstNameField: {
          ...state.firstNameField,
          value: action.payload,
          error: authHelper.validateFirstname(action.payload),
          httpError: {
            login: null,
            registration: null,
          },
        },
      };
    }
    case SET_SURNAME_FIELD: {
      return {
        ...state,
        surnameField: {
          ...state.surnameField,
          value: action.payload,
          error: authHelper.validateSurname(action.payload),
          httpError: {
            login: null,
            registration: null,
          },
        },
      };
    }
    case SET_USERNAME_FIELD: {
      return {
        ...state,
        usernameField: {
          ...state.usernameField,
          value: action.payload,
          error: authHelper.validateUsername(action.payload),
          httpError: {
            login: null,
            registration: null,
          },
        },
      };
    }
    case SET_PASSWORD_FIELD: {
      return {
        ...state,
        passwordField: {
          ...state.passwordField,
          value: action.payload,
          error: authHelper.validatePassword(action.payload),
          httpError: {
            login: null,
            registration: null,
          },
        },
      };
    }
    case SET_FIRSTNAME_VISITED: {
      return {
        ...state,
        firstNameField: { ...state.firstNameField, visited: true },
      };
    }
    case SET_SURNAME_VISITED: {
      return {
        ...state,
        surnameField: { ...state.surnameField, visited: true },
      };
    }
    case SET_USERNAME_VISITED: {
      return {
        ...state,
        usernameField: { ...state.usernameField, visited: true },
      };
    }
    case SET_PASSWORD_VISITED: {
      return {
        ...state,
        passwordField: { ...state.passwordField, visited: true },
      };
    }
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

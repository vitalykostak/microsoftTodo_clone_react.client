import { SET_USER_INFO } from '../actionTypes';

const initialState = {
  firstName: null,
  surname: null,
  username: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      const { firstName, surname, username } = action.payload;
      return {
        firstName,
        surname,
        username,
      };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;

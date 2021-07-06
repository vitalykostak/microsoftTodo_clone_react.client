import {
  SET_ACTIVE_DROPDOWN,
  UNSET_ACTIVE_DROPDOWN,
  SET_HIDDING_DROPDOWN,
  UNSET_HIDDING_DROPDOWN,
} from '../actionTypes';

import authService from '../../services/auth-service';

export const setActiveDropDown = () => ({
  type: SET_ACTIVE_DROPDOWN,
});

export const unsetActiveDropDown = () => ({
  type: UNSET_ACTIVE_DROPDOWN,
});

export const setHiddingDropDown = () => ({
  type: SET_HIDDING_DROPDOWN,
});

export const unsetHiddingDropDown = () => ({
  type: UNSET_HIDDING_DROPDOWN,
});

// ===============================================

export const fetchLogout = () => dispatch => {
  return authService.logout(dispatch);
};

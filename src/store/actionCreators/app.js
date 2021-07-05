import {
  SET_FETCHING,
  UNSET_FETCHING,
  SET_NETWORK_ERROR,
  UNSET_NETWORK_ERROR,
  SET_SERVER_ERROR,
  UNSET_SERVER_ERROR,
} from '../actionTypes';

export const setFetching = (payload = null) => ({
  type: SET_FETCHING,
  payload,
});

export const unsetFetching = () => ({
  type: UNSET_FETCHING,
});

export const setNetworkError = payload => ({
  type: SET_NETWORK_ERROR,
  payload,
});

export const unsetNetworkError = () => ({
  type: UNSET_NETWORK_ERROR,
});

export const setServerError = payload => ({
  type: SET_SERVER_ERROR,
  payload,
});

export const unsetServerError = () => ({
  type: UNSET_SERVER_ERROR,
});

import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

import {
  setFetching,
  unsetFetching,
  setNetworkError,
  setServerError,
} from '../store/actionCreators/app';
import NetworkError from '../exceptions/network-exception';
import ServerError from '../exceptions/server-exception';

const useRequest = func => {
  const dispatch = useDispatch();

  const request = useCallback(async () => {
    try {
      dispatch(setFetching());
      await func(dispatch);
    } catch (e) {
      if (e instanceof NetworkError) {
        return dispatch(setNetworkError(e.message));
      } else if (e instanceof ServerError) {
        return dispatch(setServerError(`Status ${e.statusCode}: ${e.message}`));
      }
    } finally {
      return dispatch(unsetFetching());
    }
  }, [func, dispatch]);

  return request;
};

export default useRequest;

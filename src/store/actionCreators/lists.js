import { SET_LISTS } from '../actionTypes';
import listService from '../../services/list-service';

export const setLists = payload => ({
  type: SET_LISTS,
  payload,
});

// =============================================

export const fetchAllLists = () => dispatch => {
  return listService.getLists(dispatch);
};

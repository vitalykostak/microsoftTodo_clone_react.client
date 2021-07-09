import { SET_LISTS, SET_ACTIVE_LIST } from '../actionTypes';
import listService from '../../services/list-service';

export const setLists = payload => ({
  type: SET_LISTS,
  payload,
});

export const setActiveList = payload => ({
  type: SET_ACTIVE_LIST,
  payload,
});

// =============================================

export const fetchAllLists = () => dispatch => {
  return listService.getLists(dispatch);
};

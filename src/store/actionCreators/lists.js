import { SET_LISTS, SET_ONE_LIST, SET_ACTIVE_LIST } from '../actionTypes';
import listService from '../../services/list-service';

export const setLists = payload => ({
  type: SET_LISTS,
  payload,
});

export const setOneList = payload => ({
  type: SET_ONE_LIST,
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

export const fetchCreateList = label => dispatch => {
  return listService.create(dispatch, label);
};

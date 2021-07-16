import {
  SET_LISTS,
  SET_ONE_LIST,
  DELETE_ONE_LIST,
  SET_ACTIVE_LIST,
  REPLACE_ONE_LIST,
} from '../actionTypes';
import listService from '../../services/list-service';

export const setLists = payload => ({
  type: SET_LISTS,
  payload,
});

export const setOneList = payload => ({
  type: SET_ONE_LIST,
  payload,
});

export const deleteOneList = payload => ({
  type: DELETE_ONE_LIST,
  payload,
});

export const replaceOneList = payload => ({
  type: REPLACE_ONE_LIST,
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

export const fetchUpdateList = updateData => dispatch => {
  return listService.update(dispatch, updateData);
};

export const fetchDeleteList = listId => dispatch => {
  return listService.delete(dispatch, listId);
};

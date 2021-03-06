import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import useRequest from './useRequest';

import listHelper from '../helpers/list-helper';
import {
  fetchUpdateList,
  fetchDeleteList,
} from '../store/actionCreators/lists';

import { setVisibleMainMenu } from '../store/actionCreators/mainMenu';

const useTaskList = listId => {
  const dispatch = useDispatch();

  // TODO change state on Ref
  const [listLabel, setListLabel] = useState(null);
  const [newListLabelVal, setNewListLabelVal] = useState(null);
  const [listTasks, setListTasks] = useState([]);
  const [isDefaultList, setIsDefaultList] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  const { allTasks, customLists, defaultLists } = useSelector(state => ({
    allTasks: state.tasks.allTasks,
    customLists: state.lists.customLists,
    defaultLists: state.lists.defaultLists,
  }));

  useEffect(() => {
    setListTasks(listHelper.getTasksByListId(allTasks, listId));
  }, [allTasks, listId]);

  useEffect(() => {
    setIsDefaultList(listHelper.isDefaultList(listId));
    setListLabel(listHelper.getListLabel(listId, defaultLists, customLists));
    setNewListLabelVal(
      listHelper.getListLabel(listId, defaultLists, customLists)
    );
    setIsEditable(false);
  }, [listId, customLists, defaultLists]);

  const editListLabel = useCallback(() => setIsEditable(true), []);

  const changeNewListVal = useCallback(
    e => setNewListLabelVal(e.target.value),
    []
  );

  const confirmRenameListLabelReq = useRequest(
    fetchUpdateList({ listId, updateData: { label: newListLabelVal } })
  );
  const confirmRenameListLabel = useCallback(() => {
    try {
      if (newListLabelVal.trim().length === 0) {
        return setNewListLabelVal(listLabel);
      }
      if (newListLabelVal.trim() === listLabel) {
        return setNewListLabelVal(listLabel);
      }
      confirmRenameListLabelReq();
      setListLabel(newListLabelVal);
    } finally {
      setIsEditable(false);
    }
  }, [newListLabelVal, listLabel]);

  const deleteListReq = useRequest(fetchDeleteList(listId));

  const deleteList = () => deleteListReq();

  const showMainMenu = useCallback(
    () => dispatch(setVisibleMainMenu()),
    [dispatch]
  );

  return {
    listTasks,
    listLabel,
    isDefaultList,
    isEditable,
    editListLabel,
    changeNewListVal,
    newListLabelVal,
    confirmRenameListLabel,
    deleteList,
    showMainMenu,
  };
};

export default useTaskList;

import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect, useRef, useMemo } from 'react';

import useRequest from './useRequest';

import {
  setCreatingTask,
  unsetCreatingTask,
  setNewTaskValue,
  fetchAddNewTask,
} from '../store/actionCreators/tasks';
import listHelper from '../helpers/list-helper';

const useCreationTask = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const {
    activeListId,
    customLists,
    defaultLists,
    isCreatingTask,
    newTaskValue,
  } = useSelector(state => ({
    activeListId: state.lists.activeListId,
    customLists: state.lists.customLists,
    defaultLists: state.lists.defaultLists,
    isCreatingTask: state.tasks.creatingTask.isCreatingTask,
    newTaskValue: state.tasks.creatingTask.value,
  }));

  const currentListLabel = listHelper.getListLabel(
    activeListId,
    defaultLists,
    customLists
  );

  const enableCreationTask = useCallback(() => {
    if (isCreatingTask) return false;
    dispatch(setCreatingTask());
  }, [isCreatingTask, dispatch]);

  const disableCreationTask = useCallback(() => {
    if (!isCreatingTask) return false;
    dispatch(unsetCreatingTask());
  }, [isCreatingTask, dispatch]);

  const changeNewTaskValue = useCallback(
    e => {
      dispatch(setNewTaskValue(e.target.value));
    },
    [dispatch]
  );

  const newTaskObj = useMemo(() => {
    if (newTaskValue.trim().length === 0) return null;

    if (!listHelper.isDefaultList(activeListId)) {
      return {
        text: newTaskValue.trim(),
        listId: activeListId,
        isImportant: false,
      };
    }

    if (listHelper.isDefaultImportantList(activeListId)) {
      return {
        text: newTaskValue.trim(),
        isImportant: true,
      };
    }

    return {
      text: newTaskValue.trim(),
      isImportant: false,
    };
  }, [activeListId, newTaskValue]);

  const addNewTaskRequest = useRequest(fetchAddNewTask(newTaskObj));

  useEffect(() => {
    if (isCreatingTask) {
      inputRef.current.focus();
    }
  }, [isCreatingTask]);

  // Reset newTaskValue when changing acticeList
  useEffect(() => {
    dispatch(setNewTaskValue(''));
  }, [activeListId, dispatch]);

  return {
    activeListId,
    isCreatingTask,
    currentListLabel,
    enableCreationTask,
    disableCreationTask,
    changeNewTaskValue,
    addNewTaskRequest,
    newTaskValue,
    newTaskObj,
    inputRef,
  };
};

export default useCreationTask;

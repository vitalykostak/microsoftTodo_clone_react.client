import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect, useRef, useState } from 'react';

import useRequest from './useRequest';

import {
  // setCreatingTask,
  // unsetCreatingTask,
  // setNewTaskValue,
  fetchAddNewTask,
} from '../store/actionCreators/tasks';
import listHelper from '../helpers/list-helper';

const useCreationTask = () => {
  const [isCreatingTask, setIsCreatingTask] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState('');

  const inputRef = useRef();
  const newTaskObj = useRef(null);

  const { activeListId } = useSelector(state => ({
    activeListId: state.lists.activeListId,
  }));

  const enableCreationTask = useCallback(() => {
    if (isCreatingTask) return false;
    setIsCreatingTask(true);
  }, [isCreatingTask]);

  const disableCreationTask = useCallback(() => {
    if (!isCreatingTask) return false;
    setIsCreatingTask(false);
  }, [isCreatingTask]);

  const changeNewTaskValue = useCallback(e => {
    setNewTaskValue(e.target.value);
  }, []);

  useEffect(() => {
    if (newTaskValue.trim().length === 0) {
      return (newTaskObj.current = null);
    }

    if (!listHelper.isDefaultList(activeListId)) {
      return (newTaskObj.current = {
        text: newTaskValue.trim(),
        externalList: activeListId,
        isImportant: false,
      });
    }

    if (listHelper.isDefaultImportantList(activeListId)) {
      return (newTaskObj.current = {
        text: newTaskValue.trim(),
        isImportant: true,
      });
    }

    return (newTaskObj.current = {
      text: newTaskValue.trim(),
      isImportant: false,
    });
  }, [activeListId, newTaskValue]);

  const addNewTaskReq = useRequest(fetchAddNewTask(newTaskObj.current));
  const addNewTask = useCallback(() => {
    if (!newTaskObj.current) {
      return false;
    }
    addNewTaskReq();
    setNewTaskValue('');
  }, [newTaskObj.current]);

  useEffect(() => {
    if (isCreatingTask) {
      inputRef.current.focus();
    }
  }, [isCreatingTask]);

  // Reset newTaskValue when changing acticeList
  useEffect(() => {
    setNewTaskValue('');
  }, [activeListId]);

  return {
    activeListId,
    isCreatingTask,
    enableCreationTask,
    disableCreationTask,
    changeNewTaskValue,
    addNewTask,
    newTaskValue,
    newTaskObj,
    inputRef,
  };
};

export default useCreationTask;

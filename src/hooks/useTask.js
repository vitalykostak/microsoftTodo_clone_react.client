import { useCallback, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRequest from './useRequest';

import {
  fetchUpdateTask,
  setVisibeTaskDetails,
  setActiveTask,
} from '../store/actionCreators/tasks';

const useTask = task => {
  const dispatch = useDispatch();

  const [isRenameingTask, setIsRenameingTask] = useState(false);
  const [renameingValue, setRenameingValue] = useState('');

  const { isDisplayTaskDetails, activeTask } = useSelector(state => ({
    isDisplayTaskDetails: state.tasks.isDisplayTaskDetails,
    activeTask: state.tasks.activeTask,
  }));

  useEffect(() => {
    setRenameingValue(task.text);
    setIsRenameingTask(false);
  }, [task]);

  const renameTask = () => {
    setIsRenameingTask(true);
  };

  const changeRenameingValue = e => {
    setRenameingValue(e.target.value);
  };

  const confirmRenameTaskReq = useRequest(
    fetchUpdateTask({
      taskId: task._id,
      updateData: { text: renameingValue.trim() },
    })
  );

  const confirmRenameTask = () => {
    try {
      if (renameingValue.trim() === task.text) {
        return setRenameingValue(task.text);
      }
      if (renameingValue.trim().length === 0) {
        return setRenameingValue(task.text);
      }
      confirmRenameTaskReq();
    } finally {
      setIsRenameingTask(false);
    }
  };

  const isDone = task.isDone;
  const isImportant = task.isImportant;

  const toggleCompleteReq = useRequest(
    fetchUpdateTask({ taskId: task._id, updateData: { isDone: !isDone } })
  );

  const toggleImportantReq = useRequest(
    fetchUpdateTask({
      taskId: task._id,
      updateData: { isImportant: !isImportant },
    })
  );

  const toggleComplete = event => {
    event.stopPropagation();
    toggleCompleteReq();
  };

  const toggleImportant = event => {
    event.stopPropagation();
    toggleImportantReq();
  };

  const showTaskDetails = useCallback(() => {
    if (!isDisplayTaskDetails) {
      dispatch(setVisibeTaskDetails());
    }
    if (activeTask !== task._id) {
      dispatch(setActiveTask(task._id));
    }
  }, [isDisplayTaskDetails, activeTask]);

  return {
    changeRenameingValue,
    toggleComplete,
    toggleImportant,
    showTaskDetails,

    isRenameingTask,
    renameingValue,
    confirmRenameTask,
    renameTask,
  };
};

export default useTask;

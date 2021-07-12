import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useRequest from './useRequest';

import taskHelper from '../helpers/task-helper';
import {
  fetchUpdateTask,
  setVisibeTaskDetails,
  setActiveTask,
} from '../store/actionCreators/tasks';

const useTask = task => {
  const dispatch = useDispatch();

  const { isDisplayTaskDetails, activeTask } = useSelector(state => ({
    isDisplayTaskDetails: state.tasks.isDisplayTaskDetails,
    activeTask: state.tasks.activeTask,
  }));

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

  return { toggleComplete, toggleImportant, showTaskDetails };
};

export default useTask;

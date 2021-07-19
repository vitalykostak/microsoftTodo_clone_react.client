import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useMemo, useState, useEffect } from 'react';

import {
  unsetVisibeTaskDetails,
  unsetActiveTask,
  fetchUpdateTask,
  fetchDeleteTask,
} from '../store/actionCreators/tasks';

import listHelper from '../helpers/list-helper';
import taskHelper from '../helpers/task-helper';
import useRequest from './useRequest';

const useTaskDetails = () => {
  const dispatch = useDispatch();
  const [isHiddingTaskDetails, setIsHiddingTaskDetails] = useState(false);
  const [newNoteValue, setNewNoteValue] = useState('');
  const [date, setDate] = useState();

  const { activeTaskId, allTasks } = useSelector(state => ({
    activeTaskId: state.tasks.activeTask,
    allTasks: state.tasks.allTasks,
  }));

  const activeTask = useMemo(
    () => listHelper.findTask(allTasks, activeTaskId),
    [allTasks, activeTaskId]
  );

  useEffect(() => {
    setNewNoteValue(activeTask.note);
  }, [activeTask]);

  const confirmNoteValueReq = useRequest(
    fetchUpdateTask({
      taskId: activeTask._id,
      updateData: { note: newNoteValue },
    })
  );
  const deleteTaskReq = useRequest(fetchDeleteTask(activeTask._id));

  const editNoteValue = event => {
    setNewNoteValue(event.target.value);
  };

  const confirmNoteValue = () => {
    if (activeTask.note === newNoteValue) {
      return false;
    }
    confirmNoteValueReq();
  };

  const hideTaskDetails = useCallback(() => {
    setIsHiddingTaskDetails(true);
    setTimeout(() => {
      setIsHiddingTaskDetails(false);
      dispatch(unsetVisibeTaskDetails());
      dispatch(unsetActiveTask());
    }, 200);
  }, [dispatch]);

  const deleteTask = () => {
    dispatch(unsetActiveTask());
    dispatch(unsetVisibeTaskDetails());
    deleteTaskReq();
  };

  useEffect(() => {
    setDate(taskHelper.getHumanReadableDate(activeTask));
  }, [activeTask]);

  return {
    isHiddingTaskDetails,
    confirmNoteValue,
    hideTaskDetails,
    editNoteValue,
    newNoteValue,
    activeTask,
    deleteTask,
    date,
  };
};

export default useTaskDetails;

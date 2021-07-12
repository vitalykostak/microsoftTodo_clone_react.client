import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useMemo, useState, useEffect } from 'react';

import {
  unsetVisibeTaskDetails,
  unsetActiveTask,
  fetchUpdateTask,
} from '../store/actionCreators/tasks';

import listHelper from '../helpers/list-helper';
import useRequest from './useRequest';

const useTaskDetails = () => {
  const dispatch = useDispatch();
  const [isHiddingTaskDetails, setIsHiddingTaskDetails] = useState(false);

  const { activeTaskId, allTasks } = useSelector(state => ({
    activeTaskId: state.tasks.activeTask,
    allTasks: state.tasks.allTasks,
  }));

  const activeTask = useMemo(
    () => listHelper.findTask(allTasks, activeTaskId),
    [allTasks, activeTaskId]
  );

  const [newNoteValue, setNewNoteValue] = useState('');
  useEffect(() => {
    setNewNoteValue(activeTask.note);
  }, [activeTask]);

  const changeNoteValue = event => {
    setNewNoteValue(event.target.value);
  };

  const confirmNoteValueReq = useRequest(
    fetchUpdateTask({
      taskId: activeTask._id,
      updateData: { note: newNoteValue },
    })
  );

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

  return {
    activeTask,
    newNoteValue,
    changeNoteValue,
    confirmNoteValue,
    hideTaskDetails,
    isHiddingTaskDetails,
  };
};

export default useTaskDetails;

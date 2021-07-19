import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import listHelper from '../helpers/list-helper';
import { setActiveList } from '../store/actionCreators/lists';
import {
  unsetActiveTask,
  unsetVisibeTaskDetails,
} from '../store/actionCreators/tasks';
import { unsetVisibleMainMenu } from '../store/actionCreators/mainMenu';

const useList = listId => {
  const [uncompletedTasks, setUncompletedTasks] = useState(0);
  const dispatch = useDispatch();
  const allTasks = useSelector(state => state.tasks.allTasks);

  useEffect(() => {
    const listTasks = listHelper.getTasksByListId(allTasks, listId);
    const uncompletedTasks = listHelper.calculateUncompletedTasks(listTasks);
    setUncompletedTasks(uncompletedTasks);
  }, [allTasks, listId]);

  const activeList = useCallback(() => {
    dispatch(unsetActiveTask());
    dispatch(unsetVisibeTaskDetails());
    dispatch(setActiveList(listId));
    dispatch(unsetVisibleMainMenu());
  }, [dispatch, listId]);

  return { uncompletedTasks, activeList };
};

export default useList;

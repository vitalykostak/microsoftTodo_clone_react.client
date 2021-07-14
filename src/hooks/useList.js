import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import listHelper from '../helpers/list-helper';
import { setActiveList } from '../store/actionCreators/lists';

const useList = listId => {
  const [uncompletedTasks, setUncompletedTasks] = useState(0);
  const dispatch = useDispatch();
  const allTasks = useSelector(state => state.tasks.allTasks);

  useEffect(() => {
    const listTasks = listHelper.getTasksByListId(allTasks, listId);
    const uncompletedTasks = listHelper.calculateUncompletedTasks(listTasks);
    setUncompletedTasks(uncompletedTasks);
  }, [allTasks]);

  const activeList = useCallback(() => {
    dispatch(setActiveList(listId));
  }, [dispatch]);

  return { uncompletedTasks, activeList };
};

export default useList;

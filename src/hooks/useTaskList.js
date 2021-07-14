import { useMemo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import listHelper from '../helpers/list-helper';

const useTaskList = () => {
  const [listTasks, setListTasks] = useState([]);

  const { activeListId, allTasks, customLists, defaultLists } = useSelector(
    state => ({
      activeListId: state.lists.activeListId,
      allTasks: state.tasks.allTasks,
      customLists: state.lists.customLists,
      defaultLists: state.lists.defaultLists,
    })
  );

  // const listTasks = listHelper.getTasksByListId(allTasks, activeListId);

  // const uncompletedTasks = useMemo(() => {
  //   return listHelper.calculateUncompletedTasks(listTasks);
  // }, [allTasks]);

  useEffect(() => {
    setListTasks(listHelper.getTasksByListId(allTasks, activeListId));
  }, [allTasks, activeListId]);

  const listLabel = listHelper.getListLabel(
    activeListId,
    defaultLists,
    customLists
  );

  return { activeListId, listTasks, listLabel };
};

export default useTaskList;

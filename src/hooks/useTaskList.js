import { useSelector } from 'react-redux';
import listHelper from '../helpers/list-helper';

const useTaskList = () => {
  const { activeListId, allTasks, customLists, defaultLists } = useSelector(
    state => ({
      activeListId: state.lists.activeListId,
      allTasks: state.tasks.allTasks,
      customLists: state.lists.customLists,
      defaultLists: state.lists.defaultLists,
    })
  );

  const listTasks = listHelper.getTasksByListId(allTasks, activeListId);

  const uncompletedTasks = listHelper.calculateUncompletedTasks(
    allTasks,
    activeListId
  );

  const listLabel = listHelper.getListLabel(
    activeListId,
    defaultLists,
    customLists
  );

  return { activeListId, listTasks, uncompletedTasks, listLabel };
};

export default useTaskList;

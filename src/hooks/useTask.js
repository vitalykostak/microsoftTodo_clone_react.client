import useRequest from './useRequest';

import taskHelper from '../helpers/task-helper';
import { fetchUpdateTask } from '../store/actionCreators/tasks';

const useTask = task => {
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

  const toggleComplete = () => {
    toggleCompleteReq();
  };

  const toggleImportant = () => {
    toggleImportantReq();
  };

  return { toggleComplete, toggleImportant };
};

export default useTask;

import React from 'react';
import { useSelector } from 'react-redux';

import { fetchAllTasks } from '../../store/actionCreators/tasks';
import { fetchAllLists } from '../../store/actionCreators/lists';
import { fetchUserInfo } from '../../store/actionCreators/user';
import useRequest from '../../hooks/useRequest';

import AppPreloader from '../Shared/AppPreloader';
import TaskDetails from './TaskDetails';
import MainMenu from './MainMenu';
import TaskList from './TaskList';

import './App.scss';

const Todo = React.memo(() => {
  const { user, tasks, lists, isDisplayTaskDetails } = useSelector(state => ({
    user: state.user,
    tasks: state.tasks,
    isDisplayTaskDetails: state.tasks.isDisplayTaskDetails,
    lists: state.lists,
  }));

  const getUserInfo = useRequest(fetchUserInfo());
  const getAllTasks = useRequest(fetchAllTasks());
  const getAllLists = useRequest(fetchAllLists());

  React.useEffect(() => {
    getUserInfo();
    getAllTasks();
    getAllLists();
  }, []);

  const isReadyInitialData = !!(
    user.firstName &&
    user.surname &&
    user.username &&
    tasks.allTasks &&
    lists.customLists
  );

  if (!isReadyInitialData) {
    return <AppPreloader />;
  }

  return (
    <main className='app'>
      <MainMenu />
      <TaskList listId={lists.activeListId} />
      {isDisplayTaskDetails && <TaskDetails />}
    </main>
  );
});

export default Todo;

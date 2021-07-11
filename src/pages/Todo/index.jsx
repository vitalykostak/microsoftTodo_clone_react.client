import React from 'react';
import { useSelector } from 'react-redux';

import { fetchAllTasks } from '../../store/actionCreators/tasks';
import { fetchAllLists } from '../../store/actionCreators/lists';
import { fetchUserInfo } from '../../store/actionCreators/user';
import useRequest from '../../hooks/useRequest';

import AppPreloader from '../Shared/AppPreloader';
import MainMenu from './MainMenu';
import TaskList from './TaskList';

import './App.scss';

const Todo = React.memo(() => {
  const { user, tasks, lists } = useSelector(state => ({
    user: state.user,
    tasks: state.tasks,
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
      <TaskList />
      <div className='task-details task-details--close'>
        <header className='task task-details__task'>
          <input className='task__checkbox' type='checkbox' id='im4' />
          <label className='task__checkbox-label' htmlFor='im4'></label>

          <p className='task__task-essence'>Задача без названия</p>
          <button className='task__important-button'>
            <svg
              className='task__important-icon task__important-icon--true'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
            >
              <title>star</title>
              <path d='M16 23l-9 6 4-10-9-6h10l4-10 4 10h10l-9 6 4 10z'></path>
            </svg>
          </button>
        </header>
        <div className='add-note task-details__add-note'>
          <textarea
            className='add-note__input'
            placeholder='Добавить заметку'
          ></textarea>
        </div>
        <footer className='task-details__management'>
          <div className='task-details__disable'>
            <svg
              className='task-details__disable-arrow'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
            >
              <title>Закрыть подробное представление</title>
              <path d='M7.406 15.422l-1.406-1.406 6-6 6 6-1.406 1.406-4.594-4.594z'></path>
            </svg>
          </div>
          <div className='task-details__date'>Создано вт, 21 июля</div>
          <div className='task-details__delete-task'>
            <svg
              className='task-details__delete-icon'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
            >
              <title>Удалить задачу</title>
              <path d='M4 10v20c0 1.1 0.9 2 2 2h18c1.1 0 2-0.9 2-2v-20h-22zM10 28h-2v-14h2v14zM14 28h-2v-14h2v14zM18 28h-2v-14h2v14zM22 28h-2v-14h2v14z'></path>
              <path d='M26.5 4h-6.5v-2.5c0-0.825-0.675-1.5-1.5-1.5h-7c-0.825 0-1.5 0.675-1.5 1.5v2.5h-6.5c-0.825 0-1.5 0.675-1.5 1.5v2.5h26v-2.5c0-0.825-0.675-1.5-1.5-1.5zM18 4h-6v-1.975h6v1.975z'></path>
            </svg>
          </div>
        </footer>
      </div>
    </main>
  );
});

export default Todo;

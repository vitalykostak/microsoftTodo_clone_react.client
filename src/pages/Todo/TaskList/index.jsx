import React from 'react';
import useTaskList from '../../../hooks/useTaskList';

import CreationTask from './CreationTask';
import Task from '../../Shared/Task';

import ArrowSVG from '../../Shared/SVG/ArrowSVG';

const TaskList = React.memo(() => {
  const { listTasks, listLabel } = useTaskList();

  return (
    <article className='list'>
      <header className='list__header'>
        <div className='list__to-menu'>
          <ArrowSVG className='list__to-menu-icon' />
        </div>
        <h1 className='list__list-label'>{listLabel}</h1>
      </header>
      <div className='list__tasks'>
        {listTasks.map(task => (
          <Task key={task._id} displayAdditional={true} task={task} />
        ))}
        {/* 

        <div className='task task--with-note list__task'>
          <input className='task__checkbox' type='checkbox' id='im1' />
          <label className='task__checkbox-label' htmlFor='im1'></label>

          <div className='task__wrapper-task-essence'>
            <p className='task__task-essence'>Задача без названия</p>
            <div className='task__additional-info'>
              <svg
                className='task__note-icon'
                version='1.1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'
              >
                <title>note</title>
                <path d='M6 11v15.001c0 0.56 0.451 0.999 1.007 0.999h13.993v-4.994c0-1.119 0.895-2.006 1.998-2.006h4.002v-9h-21zM6 10h21v-2.993c0-0.557-0.447-1.007-0.999-1.007h-19.003c-0.56 0-0.999 0.447-0.999 0.999v3.001zM21.5 28h-14.5c-1.105 0-2-0.902-2-2.001v-18.998c0-1.105 0.902-2.001 2.001-2.001h18.998c1.105 0 2.001 0.894 2.001 1.994v14.006l-6 7h-0.5zM22 26.5l4.7-5.5h-3.703c-0.546 0-0.997 0.452-0.997 1.009v4.491z'></path>
              </svg>
              <span className='task__is-note'>Заметка</span>
            </div>
          </div>
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
        </div> */}
      </div>
      <CreationTask />
    </article>
  );
});

export default TaskList;

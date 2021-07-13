import React from 'react';
import classNames from 'classnames';

import useTaskDetails from '../../../hooks/useTaskDetails';

import Task from '../../Shared/Task';

import './TaskDetails.scss';

const TaskDetails = React.memo(() => {
  const {
    activeTask,
    hideTaskDetails,
    isHiddingTaskDetails,
    newNoteValue,
    editNoteValue,
    confirmNoteValue,
    deleteTask,
    date,
  } = useTaskDetails();

  return (
    <div
      className={classNames('task-details', {
        'task-details--close': isHiddingTaskDetails,
      })}
    >
      <Task isDisplayAdditional={false} task={activeTask} type='taskDetails' />
      <div className='add-note task-details__add-note'>
        <textarea
          className='add-note__input'
          placeholder='Добавить заметку'
          value={newNoteValue}
          onChange={editNoteValue}
          onBlur={confirmNoteValue}
        ></textarea>
      </div>
      <footer className='task-details__management'>
        <div className='task-details__disable' onClick={hideTaskDetails}>
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
        <div className='task-details__date'>{date}</div>
        <div className='task-details__delete-task' onClick={deleteTask}>
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
  );
});

export default TaskDetails;

import React from 'react';
import classNames from 'classnames';

import useTaskDetails from '../../../hooks/useTaskDetails';

import Task from '../../Shared/Task';
import ArrowSVG from '../../Shared/SVG/ArrowSVG';
import DeleteSVG from '../../Shared/SVG/DeleteSVG';

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
          <ArrowSVG className='task-details__disable-arrow' />
        </div>
        <div className='task-details__date'>{date}</div>
        <div className='task-details__delete-task' onClick={deleteTask}>
          <DeleteSVG className='task-details__delete-icon' />
        </div>
      </footer>
    </div>
  );
});

export default TaskDetails;

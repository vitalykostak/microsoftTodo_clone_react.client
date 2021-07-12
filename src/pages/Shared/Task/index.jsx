import React from 'react';
import classNames from 'classnames';

import useTask from '../../../hooks/useTask';

import Button from '../Button';
import FilledStarSVG from '../SVG/FilledStarSVG';
import NotFilledStarSVG from '../SVG/NotFilledStarSVG';
import NoteSVG from '../SVG/NoteSVG';

import './Task.scss';

const Task = React.memo(({ displayAdditional, task, type }) => {
  const { toggleComplete, toggleImportant, showTaskDetails } = useTask(task);

  const button = React.useMemo(
    () => (
      <Button className='task__important-button' onClick={toggleImportant}>
        {task.isImportant ? (
          <FilledStarSVG className='task__important-icon task__important-icon--true' />
        ) : (
          <NotFilledStarSVG className='task__important-icon task__important-icon--false' />
        )}
      </Button>
    ),
    [task.isImportant]
  );

  return (
    // <div className='task list__task' onClick={showTaskDetails}>
    <div
      className={classNames('task', {
        list__task: type === 'listItem',
        'task-details__task': type === 'taskDetails',
      })}
      onClick={showTaskDetails}
    >
      <div onClick={toggleComplete}>
        <input
          className='task__checkbox'
          type='checkbox'
          id={task._id}
          checked={task.isDone}
          readOnly
        />
        <label className='task__checkbox-label' htmlFor={task._id}></label>
      </div>
      <div className='task__wrapper-task-essence'>
        <p
          className={classNames('task__task-essence', {
            'task__task-essence--completed': task.isDone,
          })}
        >
          {task.text}
        </p>
        {displayAdditional && task.note.length !== 0 && (
          <div className='task__additional-info'>
            <NoteSVG className='task__note-icon' />
            <span className='task__is-note'>Заметка</span>
          </div>
        )}
      </div>
      {button}
    </div>
  );
});

export default Task;

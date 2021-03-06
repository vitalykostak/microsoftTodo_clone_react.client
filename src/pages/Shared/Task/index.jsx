import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

import useTask from '../../../hooks/useTask';

import FilledStarSVG from '../SVG/FilledStarSVG';
import NotFilledStarSVG from '../SVG/NotFilledStarSVG';
import NoteSVG from '../SVG/NoteSVG';
import CheckArrowSVG from '../SVG/CheckArrowSVG';

import './Task.scss';

const Task = React.memo(({ isDisplayAdditional, task, type }) => {
  const {
    changeRenameingValue,
    toggleComplete,
    toggleImportant,
    showTaskDetails,
    isRenameingTask,
    renameingValue,
    confirmRenameTask,
    renameTask,
  } = useTask(task);

  const textBlock =
    type === 'taskDetails' && isRenameingTask ? (
      <textarea
        className='task__task-essence task__task-essence--edit-field'
        value={renameingValue}
        onChange={changeRenameingValue}
        onBlur={confirmRenameTask}
      ></textarea>
    ) : (
      <p
        onClick={renameTask}
        className={classNames('task__task-essence', {
          'task__task-essence--completed': task.isDone,
          'task__task-essence--editable': type === 'taskDetails',
        })}
      >
        {task.text}
      </p>
    );

  return (
    <div
      className={classNames('task', {
        list__task: type === 'listItem',
        'task-details__task': type === 'taskDetails',
      })}
      onClick={showTaskDetails}
    >
      <div className='task__checkbox-wrapper' onClick={toggleComplete}>
        <input
          className='task__checkbox'
          type='checkbox'
          id={task._id}
          checked={task.isDone}
          readOnly
        />
        <label className='task__checkbox-label' htmlFor={task._id}>
          {task.isDone && (
            <CheckArrowSVG className='task__checkbox-checkmark' />
          )}
        </label>
      </div>
      <div className='task__wrapper-task-essence'>
        {textBlock}
        {isDisplayAdditional && task.note.length !== 0 && (
          <div className='task__additional-info'>
            <NoteSVG className='task__note-icon' />
            <span className='task__is-note'>??????????????</span>
          </div>
        )}
      </div>

      <button className='task__important-button' onClick={toggleImportant}>
        {task.isImportant ? (
          <FilledStarSVG className='task__important-icon task__important-icon--true' />
        ) : (
          <NotFilledStarSVG className='task__important-icon task__important-icon--false' />
        )}
      </button>
    </div>
  );
});

Task.propTypes = {
  isDisplayAdditional: propTypes.bool,
  type: propTypes.oneOf(['listItem', 'taskDetails']),
  task: propTypes.shape({
    _id: propTypes.string,
    externalList: propTypes.string,
    taskOwnerId: propTypes.string,
    note: propTypes.string,
    text: propTypes.string,
    isImportant: propTypes.bool,
    isDone: propTypes.bool,
  }),
};

export default Task;

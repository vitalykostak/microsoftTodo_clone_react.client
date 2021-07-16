import React from 'react';
import propTypes from 'prop-types';
import classNames from 'classnames';

import useTaskList from '../../../hooks/useTaskList';

import CreationTask from './CreationTask';
import Task from '../../Shared/Task';

import ArrowSVG from '../../Shared/SVG/ArrowSVG';

import './TaskList.scss';

const TaskList = React.memo(({ listId }) => {
  const {
    listTasks,
    listLabel,
    isDefaultList,
    isEditable,
    editListLabel,
    changeNewListVal,
    newListLabelVal,
    confirmRenameListLabel,
  } = useTaskList(listId);

  const labelElem = isEditable ? (
    <input
      className='list__list-label list__list-label--input'
      type='text'
      value={newListLabelVal}
      onChange={changeNewListVal}
      onBlur={confirmRenameListLabel}
      autoFocus
    />
  ) : (
    <h1
      className={classNames('list__list-label', {
        'list__list-label--edit-possible': !isDefaultList,
      })}
      onClick={!isDefaultList ? editListLabel : undefined}
    >
      {listLabel}
    </h1>
  );

  return (
    <article className='list'>
      <header className='list__header'>
        <div className='list__to-menu'>
          <ArrowSVG className='list__to-menu-icon' />
        </div>
        {labelElem}
      </header>
      <div className='list__tasks'>
        {listTasks.map(task => (
          <Task
            key={task._id}
            isDisplayAdditional={true}
            task={task}
            type='listItem'
          />
        ))}
      </div>
      <CreationTask />
    </article>
  );
});

TaskList.propTypes = {
  listId: propTypes.string.isRequired,
};

export default TaskList;

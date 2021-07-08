import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

import TasksListSVG from '../../Shared/SVG/TasksListSVG';

function DefaultListTasks() {
  const { allTasks, activeList } = useSelector(state => ({
    allTasks: state.tasks.allTasks,
    activeList: state.lists.activeList,
  }));

  return (
    <div
      className={classNames('tasks-essence__essence-item', {
        'tasks-essence__essence-item--active':
          activeList === '__DEFAULT_LIST_TASKS__',
      })}
    >
      <div className='tasks-essence__the-tasks-item container-menu'>
        <TasksListSVG classList='tasks-essence__icon tasks-essence__icon-tasks' />
        <span className='tasks-essence__essence-label'>Задачи</span>
        <span className='tasks-essence__task-count'>12</span>
      </div>
    </div>
  );
}

export default DefaultListTasks;

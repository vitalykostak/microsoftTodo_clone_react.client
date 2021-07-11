import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveList } from '../../../store/actionCreators/lists';
import listHelper from '../../../helpers/list-helper';
import FilledStarSVG from '../../Shared/SVG/FilledStarSVG';
import TasksListSVG from '../../Shared/SVG/TasksListSVG';

const DefaultList = React.memo(({ id, children }) => {
  const dispatch = useDispatch();
  const { allTasks, activeListId } = useSelector(state => ({
    allTasks: state.tasks.allTasks,
    activeListId: state.lists.activeListId,
  }));

  const uncompletedTasks = React.useMemo(() => {
    const tasks = listHelper.getTasksByListId(allTasks, id);
    const completedTasks = listHelper.sortCompletedTask(tasks);
    return tasks.length - completedTasks.length;
  }, [allTasks]);

  const icon = React.useMemo(() => {
    switch (id) {
      case '__DEFAULT_LIST_TASKS__': {
        return (
          <TasksListSVG className='tasks-essence__icon tasks-essence__icon-tasks' />
        );
      }
      case '__DEFAULT_LIST_IMPORTANT__': {
        return (
          <FilledStarSVG className='tasks-essence__icon tasks-essence__icon-important' />
        );
      }
    }
  }, [id]);

  const onClick = React.useCallback(() => {
    if (activeListId === id) return false;
    dispatch(setActiveList(id));
  }, [activeListId, dispatch, id]);

  return (
    <div
      onClick={onClick}
      className={classNames('tasks-essence__essence-item', {
        'tasks-essence__essence-item--active': activeListId === id,
      })}
    >
      <div
        className={classNames('tasks-essence__item', {
          'tasks-essence__item--tasks': id === '__DEFAULT_LIST_TASKS__',
          'tasks-essence__item--important': id === '__DEFAULT_LIST_IMPORTANT__',
        })}
      >
        {icon}
        <span className='tasks-essence__essence-label'>{children}</span>
        <span className='tasks-essence__task-count'>{uncompletedTasks}</span>
      </div>
    </div>
  );
});

DefaultList.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default DefaultList;

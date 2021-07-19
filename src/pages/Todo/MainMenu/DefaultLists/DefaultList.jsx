import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import useList from '../../../../hooks/useList';

import FilledStarSVG from '../../../Shared/SVG/FilledStarSVG';
import TasksListSVG from '../../../Shared/SVG/TasksListSVG';

const DefaultList = React.memo(({ listId, children, isActiveList }) => {
  const { uncompletedTasks, activeList } = useList(listId);

  const icon = React.useMemo(() => {
    switch (listId) {
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
  }, [listId]);

  return (
    <div
      onClick={activeList}
      className={classNames('tasks-essence__essence-item', {
        'tasks-essence__essence-item--active': isActiveList,
      })}
    >
      <div
        className={classNames('tasks-essence__item', {
          'tasks-essence__item--tasks': listId === '__DEFAULT_LIST_TASKS__',
          'tasks-essence__item--important':
            listId === '__DEFAULT_LIST_IMPORTANT__',
        })}
      >
        {icon}
        <span className='tasks-essence__essence-label'>{children}</span>
        {uncompletedTasks > 0 && (
          <span className='tasks-essence__task-count'>{uncompletedTasks}</span>
        )}
      </div>
    </div>
  );
});

DefaultList.propTypes = {
  listId: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  isActiveList: PropTypes.bool.isRequired,
};

export default DefaultList;

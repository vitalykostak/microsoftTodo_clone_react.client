import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import useList from '../../../../hooks/useList';

import ListSVG from '../../../Shared/SVG/ListSVG';

const List = React.memo(({ children, listId, isActiveList }) => {
  const { uncompletedTasks, activeList } = useList(listId);
  return (
    <div
      className={classNames('user-lists__list', {
        'user-lists__list--active': isActiveList,
      })}
      onClick={() => {
        activeList();
      }}
    >
      <ListSVG className='user-lists__list-icon' />
      <span className='user-lists__list-label'>{children}</span>
      {uncompletedTasks > 0 && (
        <span className='tasks-essence__task-count'>{uncompletedTasks}</span>
      )}
    </div>
  );
});

List.propTypes = {
  children: PropTypes.string.isRequired,
  listId: PropTypes.string.isRequired,
  isActiveList: PropTypes.bool.isRequired,
};

export default List;

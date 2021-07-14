import React from 'react';
import useTaskList from '../../../hooks/useTaskList';

import CreationTask from './CreationTask';
import Task from '../../Shared/Task';

import ArrowSVG from '../../Shared/SVG/ArrowSVG';

const TaskList = React.memo(() => {
  const { listTasks, listLabel } = useTaskList();
  console.log(listTasks);

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

export default TaskList;

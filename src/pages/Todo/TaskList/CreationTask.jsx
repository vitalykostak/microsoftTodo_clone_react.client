import React from 'react';

import useCreationTask from '../../../hooks/useCreationTask';

import CircleSVG from '../../Shared/SVG/CircleSVG';
import PlusSVG from '../../Shared/SVG/PlusSVG';

const CreationTask = React.memo(() => {
  const {
    isCreatingTask,
    currentListLabel,
    enableCreationTask,
    disableCreationTask,
    changeNewTaskValue,
    addNewTaskRequest,
    newTaskValue,
    newTaskObj,
    inputRef,
  } = useCreationTask();

  const addNewTask = () => {
    if (!newTaskObj) return false;
    addNewTaskRequest();
  };

  const icon = React.useMemo(() => {
    return newTaskObj || isCreatingTask ? (
      <div className='new-task__icon' onClick={addNewTask}>
        <CircleSVG className='new-task__icon-circle' />
      </div>
    ) : (
      <div className='new-task__icon' onClick={enableCreationTask}>
        <PlusSVG className='new-task__icon-plus' />
      </div>
    );
  }, [newTaskObj, isCreatingTask]);

  return (
    <footer className='new-task list__new-task'>
      {icon}
      <input
        className='new-task__input'
        onChange={changeNewTaskValue}
        onFocus={enableCreationTask}
        onBlur={disableCreationTask}
        value={newTaskValue}
        type='text'
        placeholder='Добавить задачу'
        title={`Добавить задачу в "${currentListLabel}"`}
        ref={inputRef}
      />
    </footer>
  );
});

export default CreationTask;

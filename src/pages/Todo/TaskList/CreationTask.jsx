import React from 'react';

import useCreationTask from '../../../hooks/useCreationTask';

import CircleSVG from '../../Shared/SVG/CircleSVG';
import PlusSVG from '../../Shared/SVG/PlusSVG';
import Button from '../../Shared/Button';

const CreationTask = React.memo(() => {
  const {
    isCreatingTask,
    enableCreationTask,
    disableCreationTask,
    changeNewTaskValue,
    addNewTask,
    newTaskValue,
    newTaskObj,
    inputRef,
  } = useCreationTask();

  const icon = React.useMemo(() => {
    return newTaskObj || isCreatingTask ? (
      <Button className='new-task__icon' onClick={addNewTask}>
        <CircleSVG className='new-task__icon-circle' />
      </Button>
    ) : (
      <Button className='new-task__icon' onClick={enableCreationTask}>
        <PlusSVG className='new-task__icon-plus' />
      </Button>
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
        ref={inputRef}
      />
    </footer>
  );
});

export default CreationTask;

import React from 'react';

import CircleSVG from '../../Shared/SVG/CircleSVG';
import PlusSVG from '../../Shared/SVG/PlusSVG';

function NewTask() {
  return (
    <footer className='new-task list__new-task'>
      <div className='new-task__icon'>
        <PlusSVG className='new-task__icon-plus' />
        <CircleSVG className='new-task__icon-circle' />
      </div>
      <input
        className='new-task__input'
        type='text'
        placeholder='Добавить задачу'
      />
    </footer>
  );
}

export default NewTask;

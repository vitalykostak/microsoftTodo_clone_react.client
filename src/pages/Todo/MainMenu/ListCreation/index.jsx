import React from 'react';

import useCreationList from '../../../../hooks/useCreationList';

import './ListCreation.scss';

// import AddProjectSVG from '../../../Shared/SVG/AddProjectSVG';

function ListCreation() {
  const {
    createTask,
    isCreationList,
    confirmCreationList,
    newListValue,
    changeNewListValue,
  } = useCreationList();

  const elem = isCreationList ? (
    <input
      className='add-task-object__input-add-list'
      type='text'
      value={newListValue}
      onChange={changeNewListValue}
      onBlur={confirmCreationList}
      autoFocus
    />
  ) : (
    <button className='add-task-object__button-add-list' onClick={createTask}>
      Cоздать список
    </button>
  );
  return (
    <div className='add-task-object main-menu__add-task-object'>
      <div className='add-task-object__add-list-object'>{elem}</div>
      {/* <div className='add-task-object__add-project-object'>
        <button className='add-task-object__button-add-project'>
          <AddProjectSVG className='add-task-object__add-project-icon' />
        </button>
      </div> */}
    </div>
  );
}

export default ListCreation;

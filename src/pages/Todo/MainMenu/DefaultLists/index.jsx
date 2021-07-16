import React from 'react';
import { useSelector } from 'react-redux';

import DefaultList from './DefaultList';

function DefaultLists() {
  const { defaultLists, activeListId } = useSelector(state => ({
    defaultLists: state.lists.defaultLists,
    activeListId: state.lists.activeListId,
  }));

  const defaultListElems = defaultLists.map(el => (
    <DefaultList
      key={el._id}
      listId={el._id}
      isActiveList={activeListId === el._id}
    >
      {el.label}
    </DefaultList>
  ));
  return (
    <div className='tasks-essence main-menu__tasks-essence'>
      {defaultListElems}
    </div>
  );
}

export default DefaultLists;

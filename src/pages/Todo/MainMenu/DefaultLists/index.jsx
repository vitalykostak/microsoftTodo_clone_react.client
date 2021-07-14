import React from 'react';
import { useSelector } from 'react-redux';

import DefaultList from './DefaultList';

function DefaultLists() {
  const defaultLists = useSelector(state => state.lists.defaultLists);

  const defaultListElems = defaultLists.map(el => (
    <DefaultList key={el.id} id={el.id}>
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

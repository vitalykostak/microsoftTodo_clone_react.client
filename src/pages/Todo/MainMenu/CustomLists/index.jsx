import React from 'react';
import { useSelector } from 'react-redux';
import List from './List';

const CustomLists = React.memo(() => {
  const { customLists, activeListId } = useSelector(state => ({
    customLists: state.lists.customLists,
    activeListId: state.lists.activeListId,
  }));

  const lists = customLists.map(list => (
    <List
      key={list._id}
      listId={list._id}
      isActiveList={activeListId === list._id}
    >
      {list.label}
    </List>
  ));

  return <div className='user-lists'>{lists}</div>;
});

export default CustomLists;

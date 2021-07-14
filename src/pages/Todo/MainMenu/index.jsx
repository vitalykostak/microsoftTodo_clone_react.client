import React from 'react';
import { useSelector } from 'react-redux';

import Profile from './Profile';
import DefaultLists from './DefaultLists';
import CustomLists from './CustomLists';
import ListCreation from './ListCreation';

import './MainMenu.scss';

const MainMenu = React.memo(() => {
  return (
    <nav className='main-menu main-menu--non-priority-display'>
      <h3 className='main-menu__app-name container-menu'>To Do</h3>
      <Profile />
      <DefaultLists />
      <CustomLists />
      <ListCreation />
    </nav>
  );
});

export default MainMenu;

import React from 'react';
import classNames from 'classnames';
import propTypes from 'prop-types';

import Profile from './Profile';
import DefaultLists from './DefaultLists';
import CustomLists from './CustomLists';
import ListCreation from './ListCreation';

import './MainMenu.scss';

const MainMenu = React.memo(({ mainMenuVisible }) => {
  return (
    <nav
      className={classNames('main-menu', {
        'main-menu--non-priority-display': !mainMenuVisible,
      })}
    >
      <h3 className='main-menu__app-name container-menu'>To Do</h3>
      <Profile />
      <DefaultLists />
      <CustomLists />
      <ListCreation />
    </nav>
  );
});

MainMenu.propTypes = {
  mainMenuVisible: propTypes.bool.isRequired,
};

export default MainMenu;

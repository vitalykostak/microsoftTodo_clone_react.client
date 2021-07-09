import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import React from 'react';

import { setActiveDropDown } from '../../../store/actionCreators/mainMenu';

import ArrowsVerticalSVG from '../../Shared/SVG/ArrowsVerticalSVG';
import ProfileDropDown from './ProfileDropDown';
import UserSVG from '../../Shared/SVG/UserSVG';

const Profile = React.memo(() => {
  const dispatch = useDispatch();
  const { mainMenu, user } = useSelector(state => ({
    mainMenu: state.mainMenu,
    user: state.user,
  }));

  const openDropDown = () => {
    dispatch(setActiveDropDown());
  };

  return (
    <div
      onClick={openDropDown}
      className={classNames('main-menu__profile', {
        'main-menu__profile--open': mainMenu.profileDropDown.isActive,
      })}
    >
      <UserSVG className='main-menu__user-photo' />
      <div className='main-menu__personal-data container-menu'>
        <p className='main-menu__full-name'>{`${user.firstName} ${user.surname}`}</p>
        <p className='main-menu__username'>{`${user.username}`}</p>
      </div>
      <ArrowsVerticalSVG className='main-menu__profile-arrows' />
      {mainMenu.profileDropDown.isActive && <ProfileDropDown />}
    </div>
  );
});

export default Profile;

import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import React from 'react';

import { setActiveDropDown } from '../../../store/actionCreators/main-menu';

import ArrowsVerticalSVG from '../../Shared/SVG/ArrowsVerticalSVG';
import ProfileDropDown from './ProfileDropDown';
import UserSVG from '../../Shared/SVG/UserSVG';

function Profile() {
  const dispatch = useDispatch();
  const { profileDropDown } = useSelector(state => state.mainMenu);

  const openDropDown = () => {
    dispatch(setActiveDropDown());
  };

  return (
    <div
      onClick={openDropDown}
      className={classNames('main-menu__profile', {
        'main-menu__profile--open': profileDropDown.isActive,
      })}
    >
      <UserSVG classList='main-menu__user-photo' />
      <div className='main-menu__personal-data container-menu'>
        <p className='main-menu__full-name'>Віталій Костак</p>
        <p className='main-menu__username'>kostak</p>
      </div>
      <ArrowsVerticalSVG classList='main-menu__profile-arrows' />
      {profileDropDown.isActive && <ProfileDropDown />}
    </div>
  );
}

export default Profile;

import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import React from 'react';

import {
  unsetActiveDropDown,
  setHiddingDropDown,
  unsetHiddingDropDown,
} from '../../../store/actionCreators/main-menu';
import { fetchLogout } from '../../../store/actionCreators/main-menu';
import useRequest from '../../../hooks/useRequest';

import DoorSVG from '../../Shared/SVG/DoorSVG';

import './ProfileDropDown.scss';

function ProfileDropDown() {
  const dispatch = useDispatch();
  const { profileDropDown } = useSelector(state => state.mainMenu);

  const closeDropDown = React.useCallback(
    e => {
      const isClickOnDropDown = e.target.closest('.profile-dropdown');
      if (isClickOnDropDown) {
        return false;
      }
      dispatch(setHiddingDropDown());
      setTimeout(() => {
        dispatch(unsetHiddingDropDown());
        dispatch(unsetActiveDropDown());
      }, 150);
    },
    [dispatch]
  );

  React.useEffect(() => {
    window.addEventListener('click', closeDropDown);
    return () => {
      window.removeEventListener('click', closeDropDown);
    };
  }, [closeDropDown]);

  const logout = useRequest(fetchLogout());

  return (
    <div
      className={classNames('main-menu__profile-dropdown', 'profile-dropdown', {
        'profile-dropdown--open': !profileDropDown.isHidding,
        'profile-dropdown--close': profileDropDown.isHidding,
      })}
    >
      <div className='profile-dropdown__item' onClick={logout}>
        <DoorSVG classList='profile-dropdown__item-icon' />
        <p className='profile-dropdown__item-label'>Выйти</p>
      </div>
    </div>
  );
}

export default ProfileDropDown;

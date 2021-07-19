import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import {
  setAuthActiveAction,
  setVisibleRegisterFields,
  unsetVisibleRegisterFields,
} from '../../../store/actionCreators/authForm';

import UserPlusSVG from '../../Shared/SVG/UserPlusSVG';
import DoorSVG from '../../Shared/SVG/DoorSVG';

function AuthSwitch() {
  const dispatch = useDispatch();

  const { activeAction } = useSelector(state => state.authForm);

  const switchToLogin = e => {
    e.preventDefault();
    activeAction !== 'login' && dispatch(unsetVisibleRegisterFields());
    setTimeout(() => {
      dispatch(setAuthActiveAction('login'));
    }, 200);
  };

  const switchToRegistration = e => {
    e.preventDefault();
    activeAction !== 'registration' && dispatch(setVisibleRegisterFields());
    dispatch(setAuthActiveAction('registration'));
  };
  return (
    <div className='auth__switch auth-item'>
      <button
        className={classNames('auth__switch-btn', {
          'auth__switch-btn--active': activeAction === 'login',
        })}
        onClick={switchToLogin}
      >
        <DoorSVG className='auth__switch-icon' />
      </button>
      <button
        className={classNames('auth__switch-btn', {
          'auth__switch-btn--active': activeAction === 'registration',
        })}
        onClick={switchToRegistration}
      >
        <UserPlusSVG className='auth__switch-icon' />
      </button>
    </div>
  );
}

export default AuthSwitch;

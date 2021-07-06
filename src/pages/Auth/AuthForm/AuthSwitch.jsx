import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setAuthActionWithVisibleFields,
  setAuthActionWithoutVisibleFields,
} from '../../../store/actionCreators/authForm';

import UserPlusSVG from '../../Shared/SVG/UserPlusSVG';
import DoorSVG from '../../Shared/SVG/DoorSVG';
import Button from '../../Shared/Button';

function AuthSwitch() {
  const dispatch = useDispatch();

  const { activeAction } = useSelector(state => state.authForm);

  const switchToLogin = e => {
    e.preventDefault();
    activeAction !== 'login' &&
      dispatch(setAuthActionWithoutVisibleFields('login'));
  };

  const switchToRegistration = e => {
    e.preventDefault();
    activeAction !== 'registration' &&
      dispatch(setAuthActionWithVisibleFields('registration'));
  };
  return (
    <div className='auth__switch auth-item'>
      <Button
        classList={`auth__switch-btn ${
          activeAction === 'login' && 'auth__switch-btn--active'
        } `}
        onClick={switchToLogin}
      >
        <DoorSVG classList='auth__switch-icon' />
      </Button>
      <Button
        classList={`auth__switch-btn ${
          activeAction === 'registration' && 'auth__switch-btn--active'
        } `}
        onClick={switchToRegistration}
      >
        <UserPlusSVG classList='auth__switch-icon' />
      </Button>
    </div>
  );
}

export default AuthSwitch;

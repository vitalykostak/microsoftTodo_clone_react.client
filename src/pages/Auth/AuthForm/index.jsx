import React from 'react';

import { useSelector } from 'react-redux';

import {
  fetchRegistration,
  fetchLogin,
} from '../../../store/actionCreators/authForm';
import useAuthField from '../../../hooks/useAuthField';
import useRequest from '../../../hooks/useRequest';

import UserPlusSVG from '../../Shared/SVG/UserPlusSVG';
import DoorSVG from '../../Shared/SVG/DoorSVG';
import AuthButton from './AuthButton';
import AuthField from './AuthField';
import AuthSwitch from './AuthSwitch';

import './Auth.scss';

const AuthForm = () => {
  const {
    usernameField,
    passwordField,
    isFetching,
    activeAction,
    visibleRegisterFields,
    firstNameField,
    surnameField,
  } = useSelector(state => ({
    firstNameField: state.authForm.firstNameField,
    surnameField: state.authForm.surnameField,
    usernameField: state.authForm.usernameField,
    passwordField: state.authForm.passwordField,
    isFetching: state.app.isFetching,
    activeAction: state.authForm.activeAction,
    visibleRegisterFields: state.authForm.visibleRegisterFields,
  }));
  const handlersFirstNameField = useAuthField('firstName');
  const handlersSurnameField = useAuthField('surname');
  const handlersUsernameField = useAuthField('username');
  const handlersPasswordField = useAuthField('password');
  const register = useRequest(
    fetchRegistration(
      handlersFirstNameField.value,
      handlersSurnameField.value,
      handlersUsernameField.value,
      handlersPasswordField.value
    )
  );

  const login = useRequest(
    fetchLogin(handlersUsernameField.value, handlersPasswordField.value)
  );

  const loginRenderIcon = () => <DoorSVG className='auth__button-icon' />;

  const registerRenderIcon = () => (
    <UserPlusSVG className='auth__button-icon' />
  );

  const isDisabledLogin =
    !!usernameField.httpError.login ||
    !!usernameField.error ||
    !!passwordField.httpError.login ||
    !!passwordField.error ||
    isFetching;

  const isDisabledRegistration =
    !!firstNameField.error ||
    !!surnameField.error ||
    !!firstNameField.httpError.registration ||
    !!surnameField.httpError.registration ||
    !!usernameField.httpError.registration ||
    !!usernameField.error ||
    !!passwordField.httpError.registration ||
    !!passwordField.error ||
    isFetching;

  return (
    <form className='auth__form'>
      <AuthSwitch />
      {activeAction === 'registration' && (
        <AuthField
          type={'text'}
          animation={visibleRegisterFields ? 'show' : 'hide'}
          onFocus={handlersFirstNameField.completeVisit}
          onChange={handlersFirstNameField.handleInput}
          activeAction={activeAction}
          {...firstNameField}
          {...handlersFirstNameField}
        />
      )}
      {activeAction === 'registration' && (
        <AuthField
          type={'text'}
          animation={visibleRegisterFields ? 'show' : 'hide'}
          onFocus={handlersSurnameField.completeVisit}
          onChange={handlersSurnameField.handleInput}
          activeAction={activeAction}
          {...surnameField}
          {...handlersSurnameField}
        />
      )}
      <AuthField
        type={'text'}
        onFocus={handlersUsernameField.completeVisit}
        onChange={handlersUsernameField.handleInput}
        activeAction={activeAction}
        {...usernameField}
        {...handlersUsernameField}
      />
      <AuthField
        type={'password'}
        onFocus={handlersPasswordField.completeVisit}
        onChange={handlersPasswordField.handleInput}
        activeAction={activeAction}
        {...passwordField}
        {...handlersPasswordField}
      />
      <div className='auth__wrapper-buttons'>
        {activeAction === 'login' && (
          <AuthButton
            onClick={login}
            disabled={isDisabledLogin}
            icon={loginRenderIcon}
          >
            Войти
          </AuthButton>
        )}
        {activeAction === 'registration' && (
          <AuthButton
            onClick={register}
            disabled={isDisabledRegistration}
            icon={registerRenderIcon}
          >
            Регистрация
          </AuthButton>
        )}
      </div>
    </form>
  );
};

export default AuthForm;

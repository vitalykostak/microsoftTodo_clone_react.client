import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  setFirstNameVisit,
  setFirstNameValue,
  setSurnameVisit,
  setSurnameValue,
  setUsernameVisit,
  setUsernameValue,
  setPasswordVisit,
  setPasswordValue,
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
  const dispatch = useDispatch();
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

  const handlersFirstNameField = useAuthField(
    setFirstNameVisit,
    setFirstNameValue,
    { visited: firstNameField.visited, value: firstNameField.value }
  );
  const handlersSurnameField = useAuthField(setSurnameVisit, setSurnameValue, {
    visited: surnameField.visited,
    value: surnameField.value,
  });
  const handlersUsernameField = useAuthField(
    setUsernameVisit,
    setUsernameValue,
    { visited: usernameField.visited, value: usernameField.value }
  );
  const handlersPasswordField = useAuthField(
    setPasswordVisit,
    setPasswordValue,
    { visited: passwordField.visited, value: passwordField.value }
  );

  const register = useRequest(
    fetchRegistration(
      firstNameField.value,
      surnameField.value,
      usernameField.value,
      passwordField.value
    )
  );

  const login = useRequest(
    fetchLogin(usernameField.value, passwordField.value)
  );

  const loginRenderIcon = () => <DoorSVG classList='auth__button-icon' />;

  const registerRenderIcon = () => (
    <UserPlusSVG classList='auth__button-icon' />
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
    !!usernameField.httpError.login ||
    !!usernameField.error ||
    !!passwordField.httpError.login ||
    !!passwordField.error ||
    isFetching;

  return (
    <form className='auth__form'>
      <AuthSwitch />
      {activeAction === 'registration' && (
        <AuthField
          type={'text'}
          placeholder={'Имя'}
          animation={visibleRegisterFields ? 'show' : 'hide'}
          onFocus={handlersFirstNameField.completeVisit}
          onChange={handlersFirstNameField.handleInput}
          activeAction={activeAction}
          {...firstNameField}
        />
      )}
      {activeAction === 'registration' && (
        <AuthField
          type={'text'}
          placeholder={'Фамилия'}
          animation={visibleRegisterFields ? 'show' : 'hide'}
          onFocus={handlersSurnameField.completeVisit}
          onChange={handlersSurnameField.handleInput}
          activeAction={activeAction}
          {...surnameField}
        />
      )}
      <AuthField
        type={'text'}
        placeholder={'Имя пользователя'}
        onFocus={handlersUsernameField.completeVisit}
        onChange={handlersUsernameField.handleInput}
        activeAction={activeAction}
        {...usernameField}
      />
      <AuthField
        type={'password'}
        placeholder={'Пароль'}
        onFocus={handlersPasswordField.completeVisit}
        onChange={handlersPasswordField.handleInput}
        activeAction={activeAction}
        {...passwordField}
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

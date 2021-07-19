import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import authHelper from '../helpers/auth-helper';
import {
  setFirstNameHTTPError,
  setSurnameHTTPError,
  setUsernameHTTPError,
  setPasswordHTTPError,
} from '../store/actionCreators/authForm';
function useAuthField(type) {
  const typeDesc = useRef({
    firstName: {
      placeholder: 'Имя',
      valueValidator: authHelper.validateFirstName,
      httpErrorSetter: setFirstNameHTTPError,
    },
    surname: {
      placeholder: 'Фамилия',
      valueValidator: authHelper.validateSurname,
      httpErrorSetter: setSurnameHTTPError,
    },
    password: {
      placeholder: 'Пароль',
      valueValidator: authHelper.validatePassword,
      httpErrorSetter: setPasswordHTTPError,
    },
    username: {
      placeholder: 'Имя пользователя',
      valueValidator: authHelper.validateUsername,
      httpErrorSetter: setUsernameHTTPError,
    },
  });

  const dispatch = useDispatch();
  const [visited, setVisited] = useState(false);
  const [value, setValue] = useState('');
  const [error, setError] = useState(typeDesc.current[type].placeholder);

  const completeVisit = () => {
    if (visited) return visited;
    setVisited(true);
  };

  const handleInput = e => {
    const normalisedValue = e.target.value.trim();
    if (normalisedValue === value) return normalisedValue;
    setValue(normalisedValue);
    setError(typeDesc.current[type].valueValidator(normalisedValue));
    dispatch(
      typeDesc.current[type].httpErrorSetter({
        login: null,
        registration: null,
      })
    );
  };

  return {
    placeholder: typeDesc.current[type].placeholder,
    visited,
    value,
    error,
    completeVisit,
    handleInput,
  };
}

export default useAuthField;

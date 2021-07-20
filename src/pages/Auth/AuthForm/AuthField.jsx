import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const AuthField = React.memo(
  ({
    onChange,
    onFocus,
    type,
    placeholder,
    value,
    visited,
    error,
    httpError,
    activeAction,
    animation,
  }) => {
    const httpErrorByActiveAction = activeAction && httpError[activeAction];
    return (
      <div
        className={classNames(
          'auth__field',
          'auth-item',
          {
            'auth__field--hide': animation === 'hide',
          },
          {
            'auth__field--show': animation === 'show',
          },
          {
            'auth__field--invalid':
              visited && (error || !!httpErrorByActiveAction),
          },
          {
            'auth__field--valid':
              visited && (!error || !!httpErrorByActiveAction),
          }
        )}
        data-message={error || httpErrorByActiveAction || placeholder}
      >
        <input
          className='auth__field-input'
          type={type}
          placeholder={placeholder}
          value={value}
          onFocus={onFocus}
          onChange={onChange}
        />
      </div>
    );
  }
);

AuthField.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  visited: PropTypes.bool,
  error: PropTypes.string,
  httpError: PropTypes.object,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  activeAction: PropTypes.string,
  animation: PropTypes.string,
};

export default AuthField;

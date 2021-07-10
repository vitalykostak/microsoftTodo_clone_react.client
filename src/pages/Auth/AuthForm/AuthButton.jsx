import PropTypes from 'prop-types';
import React from 'react';

import Button from '../../Shared/Button';

const AuthButton = React.memo(({ onClick, disabled, icon, children }) => {
  return (
    <div className='auth__wrapper-btn auth-item'>
      <Button
        className='auth__button'
        onClick={e => {
          e.preventDefault();
          onClick();
        }}
        disabled={disabled}
      >
        {icon()}
        {children}
      </Button>
    </div>
  );
});

AuthButton.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.func,
  children: PropTypes.string,
};

export default AuthButton;

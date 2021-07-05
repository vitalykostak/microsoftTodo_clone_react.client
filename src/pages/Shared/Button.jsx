import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ classList, onClick, children, disabled, ...attrs }) => {
  return (
    <button
      className={classList}
      onClick={onClick}
      disabled={!!disabled}
      {...attrs}
    >
      {children}
    </button>
  );
};
Button.propTypes = {
  classList: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};
Button.defaultProps = {
  classList: '',
  onClick: () => {},
  children: 'Default Button',
  disabled: false,
};

export default Button;

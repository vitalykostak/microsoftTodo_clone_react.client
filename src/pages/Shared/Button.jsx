import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, children, disabled, ...attrs }) => {
  return (
    <button onClick={onClick} disabled={!!disabled} {...attrs}>
      {children}
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  disabled: PropTypes.bool,
};

export default Button;

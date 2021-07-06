import React from 'react';

const StarSVG = ({ classList, ...attrs }) => {
  return (
    <svg
      {...attrs}
      className={classList}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
    >
      <path d='M16 23l-9 6 4-10-9-6h10l4-10 4 10h10l-9 6 4 10z'></path>
    </svg>
  );
};

export default StarSVG;

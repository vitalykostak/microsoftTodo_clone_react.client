import React from 'react';

const DoorSVG = ({ classList, ...atrs }) => {
  return (
    <svg
      {...atrs}
      className={classList}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
    >
      <path d='M12 16h-10v-4h10v-4l6 6-6 6zM32 0v26l-12 6v-6h-12v-8h2v6h10v-18l8-4h-18v8h-2v-10z'></path>
    </svg>
  );
};

export default DoorSVG;

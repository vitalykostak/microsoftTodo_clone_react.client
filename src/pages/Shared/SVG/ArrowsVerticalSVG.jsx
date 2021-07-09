import React from 'react';

function ArrowsVerticalSVG({ ...atrs }) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...atrs}
      viewBox='0 0 12 32'
    >
      <path d='M8 20v6h4l-6 6-6-6h4v-6zM4 12v-6h-4l6-6 6 6h-4v6z'></path>
    </svg>
  );
}

export default ArrowsVerticalSVG;

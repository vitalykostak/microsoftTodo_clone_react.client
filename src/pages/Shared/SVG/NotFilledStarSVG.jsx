import React from 'react';

function NotFilledStarSVG({ ...atrs }) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...atrs}
      viewBox='0 0 32 32'
    >
      <path d='M16 23l9 6-4-10 9-6h-10l-4-10-4 10h-10l9 6-4 10 9-6zM16 21.753l-6.8 4.547 3.2-7.7-7.2-4.6h7.5l3.3-8.5 3.3 8.5h7.5l-7.2 4.6 3.2 7.7-6.8-4.547z'></path>
    </svg>
  );
}

export default NotFilledStarSVG;

import React from 'react';

function ArrowSVG({ classList, ...atrs }) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...atrs}
      className={classList}
      viewBox='0 0 24 24'
    >
      <path d='M7.406 15.422l-1.406-1.406 6-6 6 6-1.406 1.406-4.594-4.594z'></path>
    </svg>
  );
}

export default ArrowSVG;

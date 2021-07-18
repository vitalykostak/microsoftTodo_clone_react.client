import React from 'react';

function CheckArrowSVG({ ...atrs }) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...atrs}
      viewBox='0 0 32 32'
    >
      <path d='M31.706 7.133l-2.839-2.839c-0.393-0.393-1.026-0.393-1.419 0l-14.515 15.324-8.32-8.324c-0.397-0.397-1.041-0.397-1.438 0l-2.876 2.878c-0.397 0.396-0.397 1.040 0 1.438l11.833 12.108c0.229 0.23 0.54 0.309 0.839 0.27 0.309 0.046 0.631-0.032 0.868-0.27l17.867-19.165c0.392-0.392 0.392-1.028 0-1.42z'></path>
    </svg>
  );
}

export default CheckArrowSVG;

import React from 'react';

function AddProjectSVG({ classList, ...atrs }) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      {...atrs}
      className={classList}
      viewBox='0 0 20 20'
    >
      <path d='M16 2h-12c-1.1 0-2 0.9-2 2v12c0 1.1 0.9 2 2 2h12c1.1 0 2-0.9 2-2v-12c0-1.1-0.9-2-2-2zM15 11h-4v4h-2v-4h-4v-2h4v-4h2v4h4v2z'></path>
    </svg>
  );
}

export default AddProjectSVG;

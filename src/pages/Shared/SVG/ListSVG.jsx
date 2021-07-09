import React from 'react';

const ListSVG = ({ ...attrs }) => {
  return (
    <svg
      {...attrs}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
    >
      <path d='M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z'></path>
    </svg>
  );
};

export default ListSVG;

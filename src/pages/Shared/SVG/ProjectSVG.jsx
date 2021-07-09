import React from 'react';

const ProjectSVG = ({ ...attrs }) => {
  return (
    <svg
      {...attrs}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
    >
      <path d='M28 0h-24c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h24c2.2 0 4-1.8 4-4v-24c0-2.2-1.8-4-4-4zM28 28h-24v-24h24v24z'></path>
    </svg>
  );
};

export default ProjectSVG;

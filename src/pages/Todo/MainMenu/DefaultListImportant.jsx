import React from 'react';

import StarSVG from '../../Shared/SVG/StarSVG';

function DefaultListImportant() {
  return (
    <div className='tasks-essence__essence-item'>
      <div className='tasks-essence__the-important-item container-menu'>
        <StarSVG classList='tasks-essence__icon tasks-essence__icon-important' />
        <span className='tasks-essence__essence-label'>Важно</span>
        <span className='tasks-essence__task-count'>1</span>
      </div>
    </div>
  );
}

export default DefaultListImportant;

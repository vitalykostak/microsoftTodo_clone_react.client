import React from 'react';

function CloudError({ classList, ...atrs }) {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      {...atrs}
      className={classList}
    >
      <path d='M21.462 22h2.539c2.761 0 4.999-2.244 4.999-5 0-2.096-1.287-3.892-3.117-4.634v0c-0.523-2.493-2.734-4.366-5.383-4.366-0.863 0-1.679 0.199-2.406 0.553-1.203-2.121-3.481-3.553-6.094-3.553-3.866 0-7 3.134-7 7 0 0.138 0.004 0.275 0.012 0.412v0c-1.772 0.77-3.012 2.538-3.012 4.588 0 2.761 2.232 5 4.999 5h2.539l5.962-10 5.962 10zM15.5 14l6.5 11h-13l6.5-11zM15 18v3h1v-3h-1zM15 22v1h1v-1h-1z'></path>
    </svg>
  );
}

export default CloudError;

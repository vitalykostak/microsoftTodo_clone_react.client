import React from 'react';
import { useSelector } from 'react-redux';

import CloudErrorSVG from '../SVG/CloudError';

import './AppPreloader.scss';

function AppPreloader() {
  const { networkError, serverError } = useSelector(state => state.app);

  const errorMsg = networkError || serverError;

  return (
    <div className='preloader'>
      {errorMsg ? (
        <>
          <CloudErrorSVG className='preloader__error-icon' />
          <p className='preloader__error-text'>{errorMsg}</p>
        </>
      ) : (
        <p className='preloader__loading-text'>ToDo</p>
      )}
    </div>
  );
}

export default AppPreloader;

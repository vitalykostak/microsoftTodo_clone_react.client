import React from 'react';
import { useSelector } from 'react-redux';

function AppPreloader() {
  const { networkError, serverError } = useSelector(state => state.app);

  if (networkError) {
    return <main className='app'>{networkError}</main>;
  }
  if (serverError) {
    return <main className='app'>{serverError}</main>;
  }

  return <main className='app'>Загрузка</main>;
}

export default AppPreloader;

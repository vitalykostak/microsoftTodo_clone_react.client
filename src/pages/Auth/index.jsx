import { useSelector } from 'react-redux';
import React from 'react';

import AuthForm from './AuthForm';
import FetchingErrorBanner from '../Shared/FetchingErrorBanner';

const Auth = () => {
  const { networkError, serverError } = useSelector(state => state.app);
  return (
    <main className='auth'>
      {networkError && (
        <FetchingErrorBanner type={'networkError'}>
          {networkError}
        </FetchingErrorBanner>
      )}
      {serverError && (
        <FetchingErrorBanner type={'serverError'}>
          {serverError}
        </FetchingErrorBanner>
      )}
      <AuthForm />
    </main>
  );
};

export default Auth;

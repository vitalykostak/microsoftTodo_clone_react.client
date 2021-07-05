import React from 'react';
import { useSelector } from 'react-redux';

import Auth from './pages/Auth';

function App() {
  const authentication = useSelector(state => state.authentication);
  if (!authentication) {
    return <Auth />;
  }

  return <p>Авторизован</p>;
}

export default App;

import React from 'react';
import { useSelector } from 'react-redux';

import Auth from './pages/Auth';
import Todo from './pages/Todo';

function App() {
  const authentication = useSelector(state => state.authentication);
  if (!authentication) {
    return <Auth />;
  }

  return <Todo />;
}

export default App;

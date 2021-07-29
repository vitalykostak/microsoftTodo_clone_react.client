import React from 'react';
import { useSelector } from 'react-redux';

import Auth from './pages/Auth';
import Todo from './pages/Todo';

function App() {
  const rootElement = document.getElementById('root');
  window.addEventListener('load', () => {
    rootElement.style.height = `${Math.floor(window.innerHeight)}px`;
  });

  window.addEventListener('resize', () => {
    rootElement.style.height = `${Math.floor(window.innerHeight)}px`;
  });

  const authentication = useSelector(state => state.authentication);
  if (!authentication) {
    return <Auth />;
  }

  return <Todo />;
}

export default App;

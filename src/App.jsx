import React from 'react';
import { useSelector } from 'react-redux';

import Auth from './pages/Auth';
import Todo from './pages/Todo';

function App() {
  const rootElement = document.getElementById('root');
  
  React.useEffect(() => {
   const isMobile =
     /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
       navigator.userAgent
     );
   if (isMobile) {
     const normalisePageHeight = () =>
       (rootElement.style.height = `${Math.floor(window.innerHeight)}px`);

     window.addEventListener('load', normalisePageHeight);
     window.addEventListener('resize', normalisePageHeight);

     return () => {
       window.removeEventListener('load', normalisePageHeight);
       window.removeEventListener('resize', normalisePageHeight);
     };
   }
  });

  const authentication = useSelector(state => state.authentication);
  if (!authentication) {
    return <Auth />;
  }

  return <Todo />;
}

export default App;

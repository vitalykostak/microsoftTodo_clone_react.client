import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import React from 'react';
import store from './store/store';

import App from './App.jsx';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById('root')
);

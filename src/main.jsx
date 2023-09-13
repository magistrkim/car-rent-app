import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { Global } from '@emotion/react';
import { GlobalStyles } from './styles/GlobalStyles.js';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/car-rent-app">
      <Global styles={GlobalStyles} />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

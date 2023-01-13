import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import './scss/index.scss';
import Gnb from './pages/gnb';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Gnb />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

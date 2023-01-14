import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import './scss/index.scss';
import Gnb from './pages/gnb';
import { worker } from './mocks/browser';
import { RecoilRoot } from 'recoil';

if (import.meta.env.DEV) {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Gnb />
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import App from "./App";
import Register from "./Register";

const root = ReactDOM.createRoot(document.getElementById('root'));
const path = window.location.pathname;
root.render(
  <React.StrictMode>
      {path === '/register' ? <Register/> :null}
        {path === '/' ? <App/> :null}

  </React.StrictMode>
);

reportWebVitals();

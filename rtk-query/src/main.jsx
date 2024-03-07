import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { ApiProvider } from '@reduxjs/toolkit/query/react';

import { todoApi } from './api.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={todoApi}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);

// Archivo: index.js
import React from 'react';
import ReactDOM from 'react-dom';
import RootApp from './App.jsx';
import './index.css';

// eslint-disable-next-line react/no-deprecated
ReactDOM.render(
  <React.StrictMode>
    <RootApp />
  </React.StrictMode>,
  document.getElementById('root')
);

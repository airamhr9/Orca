/**
 * React renderer.
 */
// Import the styles here to process them with webpack
import '_public/style.css';

import React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../App/App'

ReactDOM.render(
  <div className="app">
    <App/>
  </div>,
  document.getElementById('app'),
);

import React from 'react';
import App from './App';
import { render } from 'react-dom';

import './index.scss';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
   
          <App />
      
  </React.StrictMode>,
  rootElement
);

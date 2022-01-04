import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CheckLoginContextProvider} from "./context/Check"

ReactDOM.render(
  <React.StrictMode>
    <CheckLoginContextProvider>
    <App />
    </CheckLoginContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from "react-modal";
import { BrowserRouter } from 'react-router-dom';

import App from './App';

Modal.setAppElement("#root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



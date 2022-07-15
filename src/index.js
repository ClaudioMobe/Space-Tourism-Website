import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import {BrowserRouter} from 'react-router-dom';

WebFont.load({
  google: {
    families: ['Bellefair:400','Barlow:400', 'Barlow Condensed:400,700']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
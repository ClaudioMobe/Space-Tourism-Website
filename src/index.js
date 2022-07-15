import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import WebFont from 'webfontloader';
import {BrowserRouter} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import favicon from './assets/favicon-32x32.png';

WebFont.load({
  google: {
    families: ['Bellefair:400','Barlow:400', 'Barlow Condensed:400,700']
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Space Tourism</title>
        <link rel="shortcut icon" href={favicon} type='image/x-icon'/>
      </Helmet>
      <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      </React.StrictMode>
    </>
  );
}

root.render(<Index/>);
import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './BaitapLayOutComponent/Header';
import Body from './BaitapLayOutComponent/Body';
import Content from './BaitapLayOutComponent/Content';
import Footer from './BaitapLayOutComponent/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
  <Header/>
  <Body/>
  <Content/>
  <Footer/>
  </React.StrictMode>
);


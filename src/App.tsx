import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/css/globalStyle';
import Navbar from './components/navbar';
import Helmet from 'react-helmet'


import Routes from './utils/routes/routes';


function App() {
  return (
          <BrowserRouter >
            <Helmet title="World Countries"/>
            <Navbar />
            <GlobalStyle />
            <Routes  />
            </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './assets/css/globalStyle';
import Navbar from './components/navbar';


import Routes from './utils/routes/routes';


function App() {
  return (
          <BrowserRouter >
            <Navbar />
            <GlobalStyle />
            <Routes  />
            </BrowserRouter>
  );
}

export default App;

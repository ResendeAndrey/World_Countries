import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { ThemeContext, ThemeContextProvider } from './context/theme';
;

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextProvider>    
      <ThemeContext.Consumer>
        {theme => (
          
          <ThemeProvider theme={theme}>
            {console.log(theme)}
            <App />
          </ThemeProvider>
    )}
    </ThemeContext.Consumer>  
  </ThemeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



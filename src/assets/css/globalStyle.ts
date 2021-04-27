import {createGlobalStyle} from 'styled-components';
import * as colors from './colors'
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
body {
  background-color: ${(props: any) => props.theme.theme.colors.background}
}
body, input, button {
  font: 500 1rem Roboto, sans-serif;
  color: ${colors.gray800};
}
input, button, a {
  cursor: pointer;
}
input {
  padding: 0 1rem;
}
button:hover, a:hover {
  filter: brightness(0.55);
}

a {
  text-decoration: none;
}
h1, h2, h3, h4, h5, h6, a, span{
  color: ${(props:any) => props.theme.theme.colors.color};

  @media only screen and (max-width: 800px) {
      h1 {
        font-size: 1rem;
      }
    }
` 


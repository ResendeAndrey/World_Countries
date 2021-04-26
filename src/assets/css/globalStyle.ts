import styled, {createGlobalStyle} from 'styled-components';
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
  color: ${colors.gray800};
}

` 


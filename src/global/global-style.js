import { createGlobalStyle } from 'styled-components';

export const GlobalStyle =  createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
          
}
*:before,
*:after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}
a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}
button,
._btn {
  cursor: pointer;
}
ul li {
  list-style: none;
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: 'Kanit', sans-serif;
  color: #000000;
}
div,
button,
a {
}
`;

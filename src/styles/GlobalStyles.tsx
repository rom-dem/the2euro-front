import { createGlobalStyle } from "styled-components";
import "../../node_modules/@fontsource/merriweather/400.css";
import "../../node_modules/@fontsource/nunito-sans/400.css";

const GlobalStyles = createGlobalStyle`
*, 
::before,
::after {
  box-sizing: border-box
}

body {
  margin: 0px;
  font-family: "Nunito Sans";
  color: #303030
}

ul, 
ol {
  list-style: none;
  padding: 0;
}

a,
a:active,
a:visited {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  font-size: inherit;
  background-color: #303030;
  color: #fff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

input {
  font-family: inherit;
  font-size: 1.125rem;
  background-color: transparent;
  border: none;
  padding: 0;
}


.cointainer {
  margin: 20px 
}`;

export default GlobalStyles;

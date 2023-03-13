import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css";

const GlobalStyles = createGlobalStyle`
*, 
::before,
::after {
  box-sizing: border-box
}

body {
  margin: 0px;
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
  border: none;
  cursor: pointer;
}

input {
  font-family: inherit;
  background-color: transparent;
  border: none;
  padding: 0;
}


.cointainer {
  margin: 20px;
}

h1, h2, h3, h4 {
  margin: 0;
}

`;

export default GlobalStyles;

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
  font-family: ${(props) => props.theme.fonts.text};
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
  background-color: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.palette.white};
  border-radius: ${(props) => props.theme.inputs.borderRadiusLarge};
  border: none;
  cursor: pointer;
}

.cointainer {
  margin: 20px 
}`;

export default GlobalStyles;

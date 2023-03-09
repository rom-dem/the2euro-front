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
  color: ${(props) => props.theme.colour.primary}
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
  background-color: ${(props) => props.theme.colour.primary};
  color: ${(props) => props.theme.colour.white};
  border-radius: ${(props) => props.theme.border.borderRadiusLarge};
  border: none;
  cursor: pointer;
}

input {
  font-family: inherit;
  font-size: ${(props) => props.theme.fonts.textFontSizeM};
  background-color: transparent;
  border: none;
  padding: 0;
}


.cointainer {
  margin: 20px 
}`;

export default GlobalStyles;

import { DefaultTheme } from "styled-components";
import "../../node_modules/@fontsource/nunito-sans/400.css";
import "../../node_modules/@fontsource/nunito-sans/700.css";
import "../../node_modules/@fontsource/merriweather/400.css";

export const theme: DefaultTheme = {
  colour: {
    primary: "#303030",
    secondary: "#242424",
    white: "#fff",
    gray: "#f5f5f5",
    success: "#55b938",
    error: "#d65745",
  },
  fonts: {
    title: "Merriweather",
    titleFontSizeS: "1.25rem",
    titleFontSizeM: "1.5rem",
    titleFontSizeXL: "2.25rem",
    text: "Nunito Sans",
    textFontSizeS: "1rem",
    textFontSizeM: "1.125rem",
    textFontSizeL: "1.5rem",
    textFontSizeXL: "1.875rem",
  },
  border: {
    borderRadiusSmall: "4px",
    borderRadiusLarge: "8px",
  },
};

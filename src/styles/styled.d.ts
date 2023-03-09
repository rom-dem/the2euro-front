import "styled-components";

declare module "styled-components" {}
export interface DefaultTheme {
  palette: {
    primary: string;
    secondary: string;
    white: string;
    gray: string;
    success: string;
    error: string;
  };
  fonts: {
    title: string;
    titleFontSizeNormal: string;
    titleFontSizeMid: string;
    titleFontSizeBig: string;
    text: string;
    textFontSizeNormal: string;
    textFontSizeMid: string;
    textFontSizeBig: string;
  };
  inputs: {
    borderRadiusSmall: string;
    borderRadiusLarge: string;
  };
}

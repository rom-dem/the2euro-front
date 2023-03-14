import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colour: {
      primary: string;
      secondary: string;
      white: string;
      gray: string;
      success: string;
      error: string;
    };
    fonts: {
      title: string;
      titleFontSizeS: string;
      titleFontSizeM: string;
      titleFontSizeXL: string;
      text: string;
      textFontSizeS: string;
      textFontSizeM: string;
      textFontSizeL: string;
      textFontSizeXL: string;
      textFontSizeXXL: string;
    };
    border: {
      borderRadiusSmall: string;
      borderRadiusLarge: string;
    };
  }
}

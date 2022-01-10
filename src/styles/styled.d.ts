import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      seconday: string;
      tertiary: string;
      accent: string;
      black: string;
      white: string;
      danger: string;
      success: string;
      gray: string;
      grayLight: string;
      paragraph: string;
    };

    fontFamily: {
      regular: string;
      medium: string;
      thin: string;
      light: string;
      bold: string;
      semiBold: string;
    };

    fontLineHeight: {
      large: number;
      medium: number;
      small: number;
    };

    fontWeight: {
      regular: string;
      bold: string;
    };

    fontSizes: {
      tiny: string;
      small: string;
      medium: string;
      large: string;
      big: string;
      extraBig: string;
    };

    spacing: {
      small: number;
      great: number;
      tall: number;
      venti: number;
    };
  }
}

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      seconday: string;
      tertiary: string;
      black: string;
      white: string;
      danger: string;
      success: string;
      gray: string;
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
    };

    spacing: {
      great: number;
      tall: number;
      venti: number;
    };
  }
}

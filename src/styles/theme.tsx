import React from 'react';

import {ThemeProvider, DefaultTheme} from 'styled-components/native';

import colors from './colors';
import {fontFamily, fontLineHeight, fontWeight, fontSizes} from './typography';
import spacing from './spacing';

export const theme: DefaultTheme = {
  colors,
  fontSizes,
  spacing,
  fontFamily,
  fontLineHeight,
  fontWeight,
};

interface Props {
  children: React.ReactNode;
}

export const Theme = ({children}: Props): JSX.Element => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;

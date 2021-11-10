import React from 'react';
import {render, RenderAPI, RenderOptions} from '@testing-library/react-native';

import {theme} from 'styles/theme';
import {ThemeProvider} from 'styled-components/native';

interface Props {
  children: JSX.Element;
}

const AllTheProviders = ({children}: Props) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  ui: React.ReactElement<any>,
  options?: RenderOptions,
): RenderAPI => render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};

/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {render, RenderAPI, RenderOptions} from '@testing-library/react-native';
import {Database} from '@nozbe/watermelondb';
import LokiJSAdapter, {
  LokiAdapterOptions,
} from '@nozbe/watermelondb/adapters/lokijs';

import {theme} from 'styles/theme';
import {ThemeProvider} from 'styled-components/native';

import {NavigationContainer} from '@react-navigation/native';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';

interface Props {
  children: JSX.Element;
}

import {schema, migrations, modelClasses} from 'database';

const AllTheProviders = ({children}: Props) => {
  const adapterConfig: LokiAdapterOptions = {
    schema,
    migrations,
    useWebWorker: false,
    useIncrementalIndexedDB: true,
    extraLokiOptions: {
      autosave: false,
    },
  };
  const adapter = new LokiJSAdapter(adapterConfig);
  const database = new Database({
    adapter,
    modelClasses,
  });

  return (
    <DatabaseProvider database={database}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </DatabaseProvider>
  );
};

const customRender = (
  ui: React.ReactElement<any>,
  options?: RenderOptions,
): RenderAPI => render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};

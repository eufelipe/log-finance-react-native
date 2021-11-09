import React, {Suspense} from 'react';

import Routes from 'routes';
import Theme from 'styles/theme';

import 'locales';
import {ActivityIndicator} from 'react-native';

const App = () => {
  return (
    <Theme>
      <Suspense fallback={<ActivityIndicator />}>
        <Routes />
      </Suspense>
    </Theme>
  );
};

export default App;

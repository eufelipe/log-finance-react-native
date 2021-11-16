import React, {Suspense} from 'react';

import Routes from 'routes';
import Theme from 'styles/theme';

import {ActivityIndicator} from 'react-native';
import 'locales';

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

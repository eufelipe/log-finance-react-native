import React, {Fragment, Suspense} from 'react';

import Routes from 'routes';

import 'locales';
import {ActivityIndicator} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<ActivityIndicator />}>
        <Routes />
      </Suspense>
    </Fragment>
  );
};

export default App;

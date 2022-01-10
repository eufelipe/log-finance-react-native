import React, {Suspense, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import Routes from 'routes';
import Theme from 'styles/theme';

import {getDatabase, runSeeds} from 'services/database';

import 'locales';

const App = () => {
  const database = getDatabase();

  useEffect(() => runSeeds(), []);

  return (
    <DatabaseProvider database={database}>
      <Theme>
        <Suspense fallback={<ActivityIndicator />}>
          <Routes />
        </Suspense>
      </Theme>
    </DatabaseProvider>
  );
};

export default App;

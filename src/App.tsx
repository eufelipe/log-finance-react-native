import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Icon name="rocket" size={48} color="#900" />
    </View>
  );
};

export default App;

import React from 'react';
import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'red', fontSize: 32, fontFamily: 'Poppins-Regular'}}>
        Log Finance
      </Text>
      <Icon name="rocket" size={48} color="#900" />
    </View>
  );
};

export default App;

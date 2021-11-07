import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from 'screens/Home';
import DetailsScreen from 'screens/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{headerShown: false}}
          />
        </RootStack.Group>

        <RootStack.Group screenOptions={{presentation: 'modal'}}>
          <RootStack.Screen
            name="Details"
            component={DetailsScreen}
            options={{headerShown: false}}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

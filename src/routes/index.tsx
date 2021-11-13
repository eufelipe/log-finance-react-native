import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {AddEntryStack, SettingsStack} from './StacksRoute';
import TabsRoute from './TabsRoute';

export type RootStackParamList = {
  Tabs: undefined;
  AddEntryStack: undefined;
  SettingsStack: {screen: 'Settings'};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group>
          <RootStack.Screen
            name="Tabs"
            component={TabsRoute}
            options={{headerShown: false}}
          />
        </RootStack.Group>

        <RootStack.Group screenOptions={{presentation: 'modal'}}>
          <RootStack.Screen
            name="AddEntryStack"
            component={AddEntryStack}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name="SettingsStack"
            component={SettingsStack}
            options={{headerShown: false}}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

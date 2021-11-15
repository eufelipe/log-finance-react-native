import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AddEntryScreen from 'screens/AddEntry';
import SettingsScreen from 'screens/Settings';

export type RootStackParamList = {
  Settings: undefined;
  AddEntry: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const AddEntryStack = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="AddEntry"
        component={AddEntryScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};
export const SettingsStack = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};
import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'routes';

import AddEntryScreen from 'screens/AddEntry';
import SettingsScreen from 'screens/Settings';
import CategoriesScreen from 'screens/Categories';

export type StackParamList = {
  Settings: undefined;
  AddEntry: undefined;
  Categories: undefined;
};

export type CategoriesNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'CategoriesStack'>,
  StackNavigationProp<RootStackParamList>
>;

export type AddEntryNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'AddEntryStack'>,
  StackNavigationProp<RootStackParamList>
>;

const RootStack = createNativeStackNavigator<StackParamList>();

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
export const CategoriesStack = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};

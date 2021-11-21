import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'routes';

import AddEntryScreen from 'screens/AddEntry';
import SettingsScreen from 'screens/Settings';
import LanguageScreen from 'screens/Language';
import CategoriesScreen from 'screens/Categories';
import {Entry} from 'models';

export type StackParamList = {
  AddEntry: {entry?: Entry};
  AddEntryStack: {screen: 'AddEntry'; params: {entry?: Entry}};
  Categories: undefined;
  CategoriesStack: undefined;
  Settings: undefined;
  SettingsStack: undefined;
  Language: undefined;
  LanguageStack: undefined;
};

export type CategoriesNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'CategoriesStack'>,
  StackNavigationProp<RootStackParamList>
>;

export type AddEntryNavigationProp = CompositeNavigationProp<
  StackNavigationProp<StackParamList, 'AddEntryStack'>,
  StackNavigationProp<StackParamList>
>;

export type SettingsNavigationProp = CompositeNavigationProp<
  StackNavigationProp<RootStackParamList, 'SettingsStack'>,
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

export const LanguageStack = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Language"
        component={LanguageScreen}
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

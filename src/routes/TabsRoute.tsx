import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from 'screens/Home';
import ReportsScreen from 'screens/Reports';
import {AddEntryStack} from './StacksRoute';
import {BottomTabs} from './components';
import {useTranslation} from 'react-i18next';

export const TAB_KEY_HOME = 'Home';
export const TAB_KEY_ADD_ENTRY = 'Add';
export const TAB_KEY_REPORTS = 'Reports';

export type RootStackParamList = {
  Home: undefined;
  Add: undefined;
  Reports: undefined;
};

const RootTab = createBottomTabNavigator();

const TabsRoute = (): JSX.Element => {
  const {t} = useTranslation('tabs');

  return (
    <RootTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomTabs {...props} />}
    >
      <RootTab.Screen
        name={TAB_KEY_HOME}
        component={HomeScreen}
        options={{
          tabBarLabel: t('home-label'),
          tabBarAccessibilityLabel: t('home-accessibility-label'),
        }}
      />
      <RootTab.Screen
        name={TAB_KEY_ADD_ENTRY}
        component={AddEntryStack}
        options={{
          tabBarLabel: t('add-label'),
          tabBarAccessibilityLabel: t('add-accessibility-label'),
        }}
      />
      <RootTab.Screen
        name={TAB_KEY_REPORTS}
        component={ReportsScreen}
        options={{
          tabBarLabel: t('reports-label'),
          tabBarAccessibilityLabel: t('reports-accessibility-label'),
        }}
      />
    </RootTab.Navigator>
  );
};

export default TabsRoute;

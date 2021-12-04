import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from 'react-i18next';

import {AddEntryStack} from './StacksRoute';
import {BottomTabs} from './components';
import {IEntry} from 'interfaces';

import HomeScreen from 'screens/Home';
import HistoricScreen from 'screens/Historic';
import ReportsScreen from 'screens/Reports';
import BudgetScreen from 'screens/Budget';

export const TAB_KEY_HOME = 'Home';
export const TAB_KEY_HISTORIC = 'Historic';
export const TAB_KEY_ADD_ENTRY = 'Add';
export const TAB_KEY_BUDGET = 'Budget';
export const TAB_KEY_REPORTS = 'Reports';

export type RootStackParamList = {
  Home: undefined;
  Add: {entry?: IEntry};
  Reports: undefined;
  Historic: undefined;
  Budget: undefined;
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
        name={TAB_KEY_HISTORIC}
        component={HistoricScreen}
        options={{
          tabBarLabel: t('historic-label'),
          tabBarAccessibilityLabel: t('historic-accessibility-label'),
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
      <RootTab.Screen
        name={TAB_KEY_BUDGET}
        component={BudgetScreen}
        options={{
          tabBarLabel: t('budget-label'),
          tabBarAccessibilityLabel: t('budget-accessibility-label'),
        }}
      />
    </RootTab.Navigator>
  );
};

export default TabsRoute;

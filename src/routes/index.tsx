import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EntryContext} from 'hooks';
import {
  AddEntryStack,
  LanguageStack,
  CategoriesStack,
  CurrencyStack,
  AddBudgetStack,
} from './StacksRoute';

import TabsRoute from './TabsRoute';
import {useTranslation} from 'react-i18next';
import SettingsScreen from 'screens/Settings';
import {Colors} from 'styles/layout';
import {BudgetProvider} from 'contexts';

export type RootStackParamList = {
  Tabs: undefined;
  AddEntryStack: undefined;
  AddBudgetStack: undefined;
  CategoriesStack: undefined;
  SettingsStack: undefined;
  Settings: undefined;
  LanguageStack: {screen: 'Language'};
  CurrencyStack: {screen: 'Currency'};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Routes = (): JSX.Element => {
  const {t} = useTranslation('routes');
  return (
    <NavigationContainer>
      <EntryContext>
        <BudgetProvider>
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
                name="CategoriesStack"
                component={CategoriesStack}
                options={{headerShown: false}}
              />

              <RootStack.Screen
                name="AddBudgetStack"
                component={AddBudgetStack}
                options={{headerShown: false}}
              />
            </RootStack.Group>

            <RootStack.Group screenOptions={{presentation: 'modal'}}>
              <RootStack.Screen
                name="LanguageStack"
                component={LanguageStack}
                options={{headerShown: false}}
              />

              <RootStack.Screen
                name="CurrencyStack"
                component={CurrencyStack}
                options={{headerShown: false}}
              />
            </RootStack.Group>

            <RootStack.Group>
              <RootStack.Screen
                name="Settings"
                options={{
                  title: t('title-settings'),
                  headerStyle: {
                    backgroundColor: Colors.primary,
                  },
                  headerTintColor: Colors.white,
                }}
                component={SettingsScreen}
              />
            </RootStack.Group>
          </RootStack.Navigator>
        </BudgetProvider>
      </EntryContext>
    </NavigationContainer>
  );
};

export default Routes;

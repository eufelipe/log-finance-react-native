import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EntryContext} from 'hooks';
import {AddEntryStack, SettingsStack, CategoriesStack} from './StacksRoute';
import TabsRoute from './TabsRoute';
import {useTranslation} from 'react-i18next';

export type RootStackParamList = {
  Tabs: undefined;
  AddEntryStack: undefined;
  CategoriesStack: undefined;
  SettingsStack: {screen: 'Settings'};
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Routes = (): JSX.Element => {
  const {t} = useTranslation('routes');
  return (
    <NavigationContainer>
      <EntryContext>
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
          </RootStack.Group>

          <RootStack.Group>
            <RootStack.Screen
              name="SettingsStack"
              options={{
                title: t('title-settings'),
              }}
              component={SettingsStack}
            />
          </RootStack.Group>
        </RootStack.Navigator>
      </EntryContext>
    </NavigationContainer>
  );
};

export default Routes;

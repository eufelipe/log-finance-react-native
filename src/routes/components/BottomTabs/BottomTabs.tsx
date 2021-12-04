import React from 'react';
import {
  NavigationHelpers,
  ParamListBase,
  StackActions,
  TabNavigationState,
} from '@react-navigation/native';

import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import {TAB_KEY_ADD_ENTRY} from 'routes/TabsRoute';
import TabIcon from '../TabIcon';
import {Container, Button, Label} from './styles';

interface Props {
  showTitle?: boolean;
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const BottomTabs = ({
  showTitle = false,
  state,
  descriptors,
  navigation,
}: Props): JSX.Element => {
  return (
    <Container showTitle={showTitle}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const {tabBarLabel, title} = options;

        const routeName = route.name;
        const routeKey = route.key;

        const tabTitle = title ?? routeName;
        const label = tabBarLabel ?? tabTitle;

        const isFocused = state.index === index;

        const isMenuAddEntry = routeName === TAB_KEY_ADD_ENTRY;

        const onPress = () => {
          if (isMenuAddEntry) {
            navigation.navigate('AddEntryStack', {
              screen: 'AddEntry',
            });
            return;
          }

          const event = navigation.emit({
            type: 'tabPress',
            target: routeKey,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(routeName);
          } else {
            const currentRoute = state.routes.find(
              route => route.name === state.routeNames[index],
            );
            if (currentRoute?.state) {
              navigation.dispatch(StackActions.popToTop());
            }
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: routeKey,
          });
        };

        return (
          <Button
            disableActiveOpacity={isMenuAddEntry}
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <TabIcon route={routeName} focused={isFocused} />
            {showTitle && !isMenuAddEntry && (
              <Label isFocused={isFocused}>{label}</Label>
            )}
          </Button>
        );
      })}
    </Container>
  );
};

export default BottomTabs;

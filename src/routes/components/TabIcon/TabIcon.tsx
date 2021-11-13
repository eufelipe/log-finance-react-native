import React from 'react';

import {
  TAB_KEY_HOME,
  TAB_KEY_ADD_ENTRY,
  TAB_KEY_REPORTS,
} from 'routes/TabsRoute';

import Colors from 'styles/colors';

import {Icon, AddButtonContainer} from './styles';

interface Props {
  route: string;
  focused?: boolean;
}

const TabIcon = ({route, focused}: Props): JSX.Element => {
  const icons = {
    [`${TAB_KEY_HOME}`]: 'home',
    [`${TAB_KEY_ADD_ENTRY}`]: 'add',
    [`${TAB_KEY_REPORTS}`]: 'assessment',
  };

  const icon = icons[route] ?? 'crop-square';

  if (route === TAB_KEY_ADD_ENTRY) {
    return (
      <AddButtonContainer>
        <Icon name={icon} color={Colors.white} />
      </AddButtonContainer>
    );
  }

  return <Icon name={icon} color={focused ? Colors.white : Colors.gray} />;
};

export default TabIcon;

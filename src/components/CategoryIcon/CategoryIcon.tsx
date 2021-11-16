import React from 'react';
import icons from './icons';

interface Props {
  name?: string;
  contained?: boolean;
}

import {IconItem, Contained} from './styles';

const CategoryIcon = ({
  name = 'others',
  contained = false,
}: Props): JSX.Element => {
  const iconOption = name in icons ? icons[name] : icons.others;

  if (contained) {
    return (
      <Contained color={iconOption.contained} large>
        <IconItem name={iconOption.name} color={iconOption.color} />
      </Contained>
    );
  }

  return <IconItem name={iconOption.name} />;
};

export default CategoryIcon;

import React from 'react';
import icons from './icons';

interface Props {
  name?: string;
}

import {IconItem} from './styles';

const CategoryIcon = ({name = 'others'}: Props): JSX.Element => {
  const iconOption = name in icons ? icons[name] : icons.others;

  return <IconItem name={iconOption.name} />;
};

export default CategoryIcon;

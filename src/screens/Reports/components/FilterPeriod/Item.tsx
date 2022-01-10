import React from 'react';
import {useTranslation} from 'react-i18next';
import {FilterPeriodItem} from './data';

import {Touchable, Label} from './styles';

interface ItemProps {
  item: FilterPeriodItem;
  active?: boolean;
  onPress: (item: FilterPeriodItem) => void;
}

const Item = ({item, onPress}: ItemProps): JSX.Element => {
  const {t} = useTranslation('reports');

  return (
    <Touchable onPress={() => onPress(item)}>
      <Label active={!!item.active}>{t(item.id)}</Label>
    </Touchable>
  );
};

export default Item;

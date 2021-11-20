import React, {useCallback} from 'react';

import {FlatList} from './styles';
import Item, {SettingItemProps} from './Item';

interface Props {
  items: SettingItemProps[];
}

const SettingList = ({items}: Props): JSX.Element => {
  const ListKeyExtractor = useCallback(item => item.id, []);
  const renderItem = useCallback(({item}) => <Item {...item} />, []);
  return (
    <FlatList
      testID="settings-list"
      data={items}
      renderItem={renderItem}
      keyExtractor={ListKeyExtractor}
    />
  );
};

export default SettingList;

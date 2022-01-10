import React, {useCallback} from 'react';

import {FlatList} from './styles';
import Item from './Item';

export interface ListItemProps {
  id: number;
  title: string;
  subtitle?: string;
  selected?: string;
  icon?: string;
  onPress: () => void;
}

interface Props {
  items: ListItemProps[];
}

const List = ({items}: Props): JSX.Element => {
  const ListKeyExtractor = useCallback(item => item.id, []);
  const renderItem = useCallback(({item}) => <Item {...item} />, []);

  return (
    <FlatList
      testID="list-items"
      data={items}
      removeClippedSubviews={false}
      renderItem={renderItem}
      keyExtractor={ListKeyExtractor}
    />
  );
};

export default List;

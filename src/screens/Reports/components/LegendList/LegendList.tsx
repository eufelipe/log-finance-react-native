import React, {useCallback} from 'react';

import {FlatList} from './styles';
import Item from './LegendItem';
import {ReportItem} from 'services/reports';

interface Props {
  items: ReportItem[];
}

const LegendList = ({items}: Props): JSX.Element => {
  const ListKeyExtractor = useCallback(item => item.id, []);
  const renderItem = useCallback(({item}) => <Item {...item} />, []);

  return (
    <FlatList
      testID="legend-list-items"
      numColumns={2}
      data={items}
      renderItem={renderItem}
      keyExtractor={ListKeyExtractor}
    />
  );
};

export default LegendList;

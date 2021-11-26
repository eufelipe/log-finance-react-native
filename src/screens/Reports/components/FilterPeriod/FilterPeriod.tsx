import React, {useCallback, useState} from 'react';

import Item from './Item';

import {Container, FlatList} from './styles';

import DATA, {FilterPeriodItem} from './data';

interface Props {
  onChangeFilter: (filterPeriod: FilterPeriodItem) => void;
}

const FilterPeriod = ({onChangeFilter}: Props): JSX.Element => {
  const [first] = DATA;

  const [data, setData] = useState(DATA ?? []);

  const [, setFilterPeriodSelected] = useState<FilterPeriodItem>(first);

  const listKeyExtractor = useCallback(item => item.id, []);

  const onPress = useCallback(
    (filterPeriod: FilterPeriodItem) => {
      setFilterPeriodSelected(filterPeriod);

      const merge = data.map(item =>
        item.id === filterPeriod.id
          ? {...filterPeriod, active: true}
          : {...item, active: false},
      );

      setData(merge);
      onChangeFilter(filterPeriod);
    },
    [data, onChangeFilter],
  );

  const renderItem = useCallback(
    ({item}) => <Item item={item} onPress={onPress} />,
    [onPress],
  );

  return (
    <Container>
      <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
        keyExtractor={listKeyExtractor}
      />
    </Container>
  );
};

export default FilterPeriod;

import React, {useCallback} from 'react';
import {IEntry} from 'interfaces';

import {FlatList} from './styles';
import EntryItem from 'components/EntryItem';

interface Props {
  entries: IEntry[];
}

const EntriesList = ({entries}: Props): JSX.Element => {
  const onPressEntry = () => {
    // TODO: implement action
  };

  const ListKeyExtractor = useCallback(item => item.id, []);

  const renderItem = useCallback(
    ({item}) => <EntryItem entry={item} onPressEntry={onPressEntry} />,
    [],
  );

  return (
    <FlatList
      testID="entries-list"
      data={entries}
      renderItem={renderItem}
      keyExtractor={ListKeyExtractor}
    />
  );
};

export default EntriesList;

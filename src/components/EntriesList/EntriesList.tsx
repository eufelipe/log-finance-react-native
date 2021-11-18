import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';

import {IEntry} from 'interfaces';

import EntryItem from 'components/EntryItem';
import {AddEntryNavigationProp} from 'routes/StacksRoute';

import {useEntry} from 'hooks/useEntry';
import {FlatList} from './styles';
interface Props {
  entries: IEntry[];
}

const EntriesList = ({entries}: Props): JSX.Element => {
  const navigation = useNavigation<AddEntryNavigationProp>();
  const {removeEntry} = useEntry();

  const onPressEntry = useCallback(
    (entry?: IEntry) => {
      navigation.navigate('AddEntryStack', {
        screen: 'AddEntry',
        params: {entry},
      });
    },
    [navigation],
  );

  const onPressRemoveEntry = useCallback(
    (entry: IEntry) => {
      removeEntry(entry);
    },
    [removeEntry],
  );

  const ListKeyExtractor = useCallback(item => item.id, []);

  const renderItem = useCallback(
    ({item}) => (
      <EntryItem
        entry={item}
        onPressEntry={() => onPressEntry(item)}
        onPressRemoveEntry={onPressRemoveEntry}
      />
    ),
    [onPressRemoveEntry, onPressEntry],
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

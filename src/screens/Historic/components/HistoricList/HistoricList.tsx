import React, {useCallback} from 'react';

import {SectionList} from './styles';
import Item from './HistoricItem';

import {HistoricSection} from 'screens/Historic/HistoricScreen';

import HistoricHeader from './HistoricHeader';
import {SectionListData} from 'react-native';

interface Props {
  historic: HistoricSection[];
}

const HistoricList = ({historic = []}: Props): JSX.Element => {
  const listKeyExtractor = useCallback(item => item.id, []);
  const renderItem = useCallback(({item}) => <Item entry={item} />, []);

  const renderSectionHeader = ({
    section,
  }: {
    section: SectionListData<HistoricSection>;
  }): JSX.Element | null => <HistoricHeader title={section.title} />;

  return (
    <SectionList<React.ElementType>
      testID="historic-list-items"
      sections={historic}
      keyExtractor={listKeyExtractor}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default HistoricList;

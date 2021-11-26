import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {PieChart} from 'react-native-gifted-charts';
import {useTranslation} from 'react-i18next';
import {sumBy} from 'lodash';

import {Currency} from 'components';
import ReportsService, {ReportItem, GetValuesByPeriod} from 'services/reports';

import {Colors} from 'styles/layout';

import LegendList from './components/LegendList';

import ListEmpty from './components/ListEmpty';
import {EntryType} from 'interfaces/IEntry';
import FilterPeriod from './components/FilterPeriod';
import DATA, {FilterPeriodItem} from './components/FilterPeriod/data';

import {
  Container,
  Header,
  Title,
  Balance,
  ContainerButtons,
  Touchable,
  Label,
} from './styles';

const ReportsScreen = (): JSX.Element => {
  const [data, setData] = useState<ReportItem[]>([]);
  const [entryType, setEntryType] = useState<EntryType>('expense');

  const [today] = DATA;

  const periodDefault: GetValuesByPeriod = {
    entryType,
    start: today.interval.start,
    end: today.interval.end,
  };

  const [period, setPeriod] = useState<GetValuesByPeriod>(periodDefault);

  const [showEmptyEntries, setShowEmptyEntries] = useState(false);

  const {t} = useTranslation('reports');

  const loadData = useCallback(async () => {
    const values = await ReportsService.getValuesByPeriod(period);
    setData(values);
  }, [period]);

  const loadTotalEntries = useCallback(async () => {
    const countEntries = await ReportsService.getTotalEntries();
    setShowEmptyEntries(countEntries === 0);
  }, []);

  const isExpense = entryType === 'expense';
  const isEarning = entryType === 'earning';

  const onChangeFilter = (filterPeriod: FilterPeriodItem) => {
    const {start, end} = filterPeriod.interval;
    setPeriod({
      entryType,
      start,
      end,
    });
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [loadData]),
  );

  useFocusEffect(
    useCallback(() => {
      loadTotalEntries();
    }, [loadTotalEntries]),
  );

  if (showEmptyEntries) {
    return <ListEmpty />;
  }

  const isEmpty = !data.length;

  return (
    <Container>
      <Header>
        <Title>{t('title')}</Title>

        <FilterPeriod onChangeFilter={onChangeFilter} />

        <PieChart
          radius={120}
          data={isEmpty ? [{value: 0.1, color: Colors.tertiary}] : data}
          donut
          innerCircleColor={Colors.white}
          strokeWidth={0}
          innerRadius={80}
          centerLabelComponent={() => {
            return (
              <Currency
                value={sumBy(data, 'value')}
                render={text => <Balance>{text}</Balance>}
              />
            );
          }}
        />

        <ContainerButtons>
          <Touchable onPress={() => setEntryType('expense')}>
            <Label active={isExpense}>{t('expense')}</Label>
          </Touchable>
          <Touchable onPress={() => setEntryType('earning')}>
            <Label active={isEarning}>{t('earning')}</Label>
          </Touchable>
        </ContainerButtons>
      </Header>

      <LegendList items={data} />
    </Container>
  );
};

export default ReportsScreen;

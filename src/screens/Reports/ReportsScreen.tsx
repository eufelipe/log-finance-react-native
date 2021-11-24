import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {PieChart} from 'react-native-gifted-charts';
import {useTranslation} from 'react-i18next';
import {sumBy} from 'lodash';

import {Currency} from 'components';
import ReportsService, {ReportItem} from 'services/reports';

import {Colors} from 'styles/layout';
import LegendList from './components/LegendList';

import {
  Container,
  Header,
  Title,
  Balance,
  ContainerButtons,
  Touchable,
  Label,
} from './styles';
import ListEmpty from './components/ListEmpty';
import {EntryType} from 'interfaces/IEntry';
import colors from 'styles/colors';

const ReportsScreen = (): JSX.Element => {
  const [data, setData] = useState<ReportItem[]>([]);
  const [entryType, setEntryType] = useState<EntryType>('expense');

  // TODO: implementar periodos Hoje, essa semana, 15 dias, este mes, etc
  // const [period, setPeriod] = useState<string[]>([today]);

  const [showEmptyEntries, setShowEmptyEntries] = useState(false);

  const {t} = useTranslation('reports');

  const loadData = useCallback(async () => {
    const values = await ReportsService.getValuesByPeriod({
      entryType,
      start: new Date(),
      end: new Date(),
    });
    setData(values);
  }, [entryType]);

  const loadTotalEntries = useCallback(async () => {
    const countEntries = await ReportsService.getTotalEntries();
    setShowEmptyEntries(countEntries === 0);
  }, []);

  const isExpense = entryType === 'expense';
  const isEarning = entryType === 'earning';

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
        <Title>
          {t('title')} {entryType}
        </Title>

        <PieChart
          radius={120}
          data={isEmpty ? [{value: 0.1, color: colors.tertiary}] : data}
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

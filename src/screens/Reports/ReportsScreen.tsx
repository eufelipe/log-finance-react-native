import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {PieChart} from 'react-native-gifted-charts';
import {useTranslation} from 'react-i18next';
import {sumBy} from 'lodash';

import {Currency} from 'components';
import ReportsService, {ReportItem} from 'services/reports';

import {Colors} from 'styles/layout';
import LegendList from './components/LegendList';

import {Container, Header, Title, Balance} from './styles';
import ListEmpty from './components/ListEmpty';

const ReportsScreen = (): JSX.Element => {
  const [data, setData] = useState<ReportItem[]>([]);

  const {t} = useTranslation('reports');

  const loadData = useCallback(async () => {
    const values = await ReportsService.getValues();
    setData(values);
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [loadData]),
  );

  if (!data.length) {
    return <ListEmpty />;
  }

  return (
    <Container>
      <Header>
        <Title>{t('title')}</Title>

        <PieChart
          radius={120}
          data={data}
          donut
          strokeColor={Colors.white}
          strokeWidth={4}
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
      </Header>

      <LegendList items={data} />
    </Container>
  );
};

export default ReportsScreen;

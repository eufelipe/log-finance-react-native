import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {startOfMonth, endOfMonth, format, addMonths} from 'date-fns';

import {Entry} from 'models';
import {EntryRepository} from 'repositories';
import {getCurrentLocale} from 'services/language';

import HistoricList from './components/HistoricList';
import {getDate} from 'utils/dates';

import {
  Container,
  PeriodNavigation,
  Header,
  Title,
  Touchable,
  Label,
  LeftIcon,
  RightIcon,
  Loader,
} from './styles';
import {orderBy} from 'lodash';
import ListEmpty from './components/ListEmpty'; 

export interface HistoricSection {
  title: string;
  data: Entry[];
}

interface Dictionary {
  [index: string]: Entry[];
}

const HistoricScreen = (): JSX.Element => {
  const [historic, setHistoric] = useState<HistoricSection[]>([]);
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [empty, setEmpty] = useState(false);

  const {t} = useTranslation('historic');

  const locale = getCurrentLocale();

  const parseEntriesForSectionList = (items: Entry[]): HistoricSection[] => {
    const groups: Dictionary = {};
    items.forEach(entry => {
      const date = getDate(entry.dateAt);
      if (date in groups) {
        groups[date].push(entry);
      } else {
        groups[date] = new Array(entry);
      }
    });

    return Object.keys(groups).map(date => {
      return {
        title: date,
        data: groups[date],
      };
    });
  };

  const loadData = useCallback(async () => {
    const start = startOfMonth(date);
    const end = endOfMonth(date);
    setLoading(true);

  EntryRepository.getEntriesByPeriodObserve(
      start,
      end,
    ).subscribe({
      next: items => {
        setLoading(false);
        const sectionItems = parseEntriesForSectionList(items);
        const ordered = orderBy(sectionItems, ['title'], ['desc']);
  
        setEmpty(!ordered.length);
        setHistoric(ordered);
      },
      complete: () => { 
        setLoading(false);
        setEmpty(true)
      }
     
    });
  }, [date]);

  const currentMonth = () => {
    setDate(new Date());
  };

  const nextMonth = () => {
    setDate(addMonths(date, 1));
  };

  const previousMonth = () => {
    setDate(addMonths(date, -1));
  };

  useFocusEffect(
    useCallback(() => {
      loadData(); 
    }, [loadData]),
  );

  return (
    <Container>
      <Header>
        <Title>{t('title')}</Title>

        <PeriodNavigation>
          <Touchable onPress={previousMonth}>
            <LeftIcon />
          </Touchable>

          <Touchable onPress={currentMonth}>
            <Label>{format(date, 'LLLL', {locale})} </Label>
          </Touchable>

          <Touchable onPress={nextMonth}>
            <RightIcon />
          </Touchable>
        </PeriodNavigation>
      </Header>

      {empty && <ListEmpty />}

      {!!loading && <Loader />}
      <HistoricList historic={historic} />
    </Container>
  );
};

export default HistoricScreen;

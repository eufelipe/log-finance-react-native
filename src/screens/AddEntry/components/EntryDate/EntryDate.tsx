import React from 'react';
import {useTranslation} from 'react-i18next';
import {isToday, format} from 'date-fns';

import Row from '../Row';

import {Label, Title} from './styles';

const EntryDate = (): JSX.Element => {
  const {t} = useTranslation('add');

  const date = new Date();
  const today = isToday(date);

  const formattedDate = format(
    date,
    `'${today ? t('today') + ', ' : t('day')}' dd '${t('of')}' MMMM', ${t(
      'at',
    )} ' HH:mm'h'`,
  );

  return (
    <Row icon="event">
      <Label>{t('date')}</Label>
      <Title>{formattedDate}</Title>
    </Row>
  );
};

export default EntryDate;

import {parseISO, format, isYesterday, isTomorrow} from 'date-fns';
import {isToday} from 'date-fns/esm';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {DATE_FORMAT_BR} from 'utils/dates';

import {Headering} from './styles';

interface HistoricHeaderProps {
  title: string;
}

const HistoricHeader = ({title}: HistoricHeaderProps): JSX.Element => {
  const {t} = useTranslation('historic');

  const date = parseISO(title);

  const today = isToday(date);
  const yerterday = isYesterday(date);
  const tomorow = isTomorrow(date);

  let prefix = 'EEEE';

  if (today) prefix = `'${t('today')}'`;
  else if (yerterday) prefix = `'${t('yerterday')}'`;
  else if (tomorow) prefix = `'${t('tomorow')}'`;

  const formated = format(date, `${prefix}, ${DATE_FORMAT_BR}`);

  return <Headering>{formated}</Headering>;
};

export default HistoricHeader;

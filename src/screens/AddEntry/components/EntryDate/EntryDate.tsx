import React, {useEffect, useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useTranslation} from 'react-i18next';
import {isToday, format} from 'date-fns';

import {useEntry} from 'hooks/useEntry';
import Row from '../Row';

import {Label, Title, Touchable} from './styles';
import {DATE_FORMAT_ISO, parseStringToDate} from 'utils/dates';

const EntryDate = (): JSX.Element => {
  const {t} = useTranslation('add');
  const {date, setDate} = useEntry();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (dateSelected: Date) => {
    setDate(format(dateSelected, DATE_FORMAT_ISO));
    hideDatePicker();
  };

  const prefix = `${isToday(dateTime) ? t('today') + ', ' : t('day')}`;
  const formattedDate = format(
    dateTime,
    `'${prefix}' dd '${t('of')}' MMMM', ${t('at')} ' HH:mm'h'`,
  );

  useEffect(() => {
    if (date) {
      setDateTime(parseStringToDate(date));
    }
  }, [date]);

  return (
    <>
      <Touchable onPress={showDatePicker}>
        <Row icon="event">
          <Label>{t('date')}</Label>
          <Title>{formattedDate}</Title>
        </Row>
      </Touchable>
      <DateTimePickerModal
        date={dateTime}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default EntryDate;

import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {isToday, format} from 'date-fns';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import Row from '../Row';

import {Label, Title, Touchable} from './styles';
import {useEntry} from 'hooks/useEntry';

const EntryDate = (): JSX.Element => {
  const {t} = useTranslation('add');
  const {date = new Date(), setDate} = useEntry();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (dateSelected: Date) => {
    setDate(dateSelected);
    hideDatePicker();
  };

  const today = isToday(date);

  const formattedDate = format(
    date,
    `'${today ? t('today') + ', ' : t('day')}' dd '${t('of')}' MMMM', ${t(
      'at',
    )} ' HH:mm'h'`,
  );

  return (
    <>
      <Touchable onPress={showDatePicker}>
        <Row icon="event">
          <Label>{t('date')}</Label>
          <Title>{formattedDate}</Title>
        </Row>
      </Touchable>
      <DateTimePickerModal
        date={date}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default EntryDate;

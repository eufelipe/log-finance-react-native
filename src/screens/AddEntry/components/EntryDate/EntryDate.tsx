import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useTranslation} from 'react-i18next';
import {isToday, format} from 'date-fns';

import {useEntry} from 'hooks/useEntry';
import Row from '../Row';

import {Label, Title, Touchable} from './styles';

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

  const prefix = `${isToday(date) ? t('today') + ', ' : t('day')}`;
  const formattedDate = format(
    date,
    `'${prefix}' dd '${t('of')}' MMMM', ${t('at')} ' HH:mm'h'`,
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

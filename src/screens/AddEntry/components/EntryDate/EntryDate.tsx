import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {useTranslation} from 'react-i18next';
import {isToday, format} from 'date-fns';

import {useEntry} from 'hooks/useEntry';
import {Row} from 'components';

import {Label, Title, Touchable} from './styles';

const EntryDate = (): JSX.Element => {
  const {t} = useTranslation('add');
  const {dateAt = new Date(), setDateAt} = useEntry();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (dateSelected: Date) => {
    setDateAt(dateSelected);
    hideDatePicker();
  };

  const prefix = `${isToday(dateAt) ? t('today') + ', ' : t('day')}`;
  const formatPattern = `'${prefix}' dd '${t('of')}' MMMM', ${t(
    'at',
  )} ' HH:mm'h'`;

  const formattedDate = format(dateAt, formatPattern);

  return (
    <>
      <Touchable onPress={showDatePicker}>
        <Row icon="event">
          <Label>{t('date')}</Label>
          <Title>{formattedDate}</Title>
        </Row>
      </Touchable>
      <DateTimePickerModal
        date={dateAt}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
};

export default EntryDate;

import React from 'react';

import {useTranslation} from 'react-i18next';
import {useEntry} from 'hooks/useEntry';
import {Container, Touchable, Label, LineActive} from './styles';

const MenuEntryType = (): JSX.Element => {
  const {entryType, setEntryType} = useEntry();

  const {t} = useTranslation('add');

  const isExpense = entryType === 'expense';
  const isEarning = entryType === 'earning';

  return (
    <Container>
      <Touchable onPress={() => setEntryType('expense')}>
        <Label active={isExpense}>{t('expense')}</Label>

        <LineActive active={isExpense} />
      </Touchable>
      <Touchable onPress={() => setEntryType('earning')}>
        <Label active={isEarning}>{t('earning')}</Label>
        <LineActive active={isEarning} />
      </Touchable>
    </Container>
  );
};

export default MenuEntryType;

import React, {useCallback, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {SettingsNavigationProp} from 'routes/StacksRoute';
import {useTranslation} from 'react-i18next';

import {Currency} from 'components';
import {Entry} from 'models';

import {
  Container,
  Content,
  Title,
  Description,
  SettingTouchable,
  SettingIcon,
} from './styles';

interface HeaderProps {
  entries?: Entry[];
}

const Header = ({entries = []}: HeaderProps): JSX.Element => {
  const navigation = useNavigation<SettingsNavigationProp>();
  const {t} = useTranslation('home');
  const [balance, setBalance] = useState(0);

  const handleSettings = () => navigation.navigate('Settings');

  const calculateCurrentBalance = useCallback((): void => {
    const sumValues = entries.reduce((previousEntry, currentEntry) => {
      let value = currentEntry.value;
      if (currentEntry.type === 'expense') {
        value = Math.abs(value) * -1;
      }
      return previousEntry + value;
    }, 0);

    setBalance(sumValues);
  }, [entries]);

  useFocusEffect(
    useCallback(() => {
      calculateCurrentBalance();
    }, [calculateCurrentBalance]),
  );

  return (
    <Container>
      <Content>
        <Description>{t('balance')}</Description>
        <Currency value={balance} render={value => <Title>{value}</Title>} />
      </Content>
      <SettingTouchable onPress={handleSettings}>
        <SettingIcon />
      </SettingTouchable>
    </Container>
  );
};

export default Header;

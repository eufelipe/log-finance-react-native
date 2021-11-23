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
import {useEntry} from 'hooks/useEntry';

interface HeaderProps {
  entries?: Entry[];
}

const Header = ({entries = []}: HeaderProps): JSX.Element => {
  const navigation = useNavigation<SettingsNavigationProp>();
  const {t} = useTranslation('home');
  const [balance, setBalance] = useState(0);

  const {calculateCurrentBalance} = useEntry();

  const handleSettings = () => navigation.navigate('Settings');

  useFocusEffect(
    useCallback(() => {
      const sumValues = calculateCurrentBalance(entries);
      setBalance(sumValues);
    }, [calculateCurrentBalance, entries]),
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

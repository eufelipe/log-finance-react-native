import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container} from './styles';
import {useTranslation} from 'react-i18next';
import SettingList from './components/SettingList';

const SettingsScreen = (): JSX.Element => {
  const navigation = useNavigation();

  const {t} = useTranslation('settings');

  const menu = [
    {
      id: 1,
      title: t('language'),
      selected: t('pt-BR'),
      icon: 'language',
      onPress: () => {},
    },
    {
      id: 2,
      title: t('currency'),
      selected: 'BRL',
      icon: 'attach-money',
      onPress: () => {},
    },
  ];

  return (
    <Container>
      <SettingList items={menu} />
    </Container>
  );
};

export default SettingsScreen;

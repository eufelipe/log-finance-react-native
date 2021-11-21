import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container} from './styles';
import {useTranslation} from 'react-i18next';

import List, {ListItemProps} from 'components/List';

const SettingsScreen = (): JSX.Element => {
  const navigation = useNavigation();

  const {t} = useTranslation('settings');

  const menu: ListItemProps[] = [
    {
      id: 1,
      title: t('language'),
      selected: t('pt-BR'),
      icon: 'language',
      onPress: () => navigation.navigate('LanguageStack'),
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
      <List items={menu} />
    </Container>
  );
};

export default SettingsScreen;

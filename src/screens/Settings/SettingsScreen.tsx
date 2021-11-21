import React, {useCallback, useState, useMemo} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {Container} from './styles';
import {useTranslation} from 'react-i18next';

import List, {ListItemProps} from 'components/List';

const SettingsScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const [title, setTitle] = useState();
  const {t, i18n} = useTranslation('settings');

  const menu: ListItemProps[] = useMemo(() => {
    return [
      {
        id: 1,
        title: t('language'),
        selected: i18n.language,
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
  }, [i18n.language, navigation, t]);

  const loadTitle = useCallback((): void => {
    setTitle(t('title-settings'));
    navigation.setOptions({title});
  }, [title, navigation, t]);

  useFocusEffect(
    useCallback(() => {
      loadTitle();
    }, [loadTitle]),
  );

  return (
    <Container>
      <List items={menu} />
    </Container>
  );
};

export default SettingsScreen;

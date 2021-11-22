import React, {useCallback, useState, useMemo} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

import {Container} from './styles';
import {useTranslation} from 'react-i18next';

import List, {ListItemProps} from 'components/List';
import CurrencyService from 'services/currency';

const SettingsScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const [title, setTitle] = useState();
  const [currentCurrency, setCurrentCurrency] = useState<string>();
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
        selected: currentCurrency,
        icon: 'attach-money',
        onPress: () => navigation.navigate('CurrencyStack'),
      },
    ];
  }, [i18n.language, navigation, currentCurrency, t]);

  const loadTitle = useCallback((): void => {
    setTitle(t('title-settings'));
    navigation.setOptions({title});
  }, [title, navigation, t]);

  const loadCurrentCurrency = useCallback(async () => {
    const currentStored = await CurrencyService.getCurrency();
    if (currentStored) setCurrentCurrency(currentStored);
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTitle();
    }, [loadTitle]),
  );
  useFocusEffect(
    useCallback(() => {
      loadCurrentCurrency();
    }, [loadCurrentCurrency]),
  );

  return (
    <Container>
      <List items={menu} />
    </Container>
  );
};

export default SettingsScreen;

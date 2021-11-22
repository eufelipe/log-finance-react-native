import React, {useCallback, useMemo, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Container} from './styles';
import {useTranslation} from 'react-i18next';

import List, {ListItemProps} from 'components/List';
import {Toolbar} from 'components';

import {filter, sortBy} from 'lodash';

import currencies, {CurrencyItem} from './currencies';
import CurrencyService from 'services/currency';
import {sanitizeString} from 'utils/strings';

const CurrencyScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');
  const [currentCurrency, setCurrentCurrency] = useState<string>();
  const [filteredCurrencies, setFilteredCurrencies] = useState<ListItemProps[]>(
    [],
  );

  const {t} = useTranslation('currencies');

  const changeCurrency = useCallback(
    async (currency: CurrencyItem) => {
      await CurrencyService.saveCurrency(currency.code);

      navigation.goBack();
    },
    [navigation],
  );

  const loadCurrentCurrency = useCallback(async () => {
    const currentStored = await CurrencyService.getCurrency();
    if (currentStored) setCurrentCurrency(currentStored);
  }, []);

  const currencyItems: ListItemProps[] = useMemo(() => {
    const items = currencies.map((currency, index) => ({
      id: index + 1,
      title: currency.name,
      subtitle: currency.code,
      selected: currentCurrency === currency.code ? t('active') : undefined,
      icon: 'chevron-right',
      onPress: () => changeCurrency(currency),
    }));

    const ordered = sortBy(items, 'selected');
    return ordered;
  }, [changeCurrency, currentCurrency, t]);

  const handleSearch = (term: string) => {
    const formattedQuery = sanitizeString(term);
    const filtered = filter(currencyItems, ({title, subtitle}) => {
      return (
        sanitizeString(title).includes(formattedQuery) ||
        (!!subtitle && sanitizeString(subtitle).includes(formattedQuery))
      );
    });
    setFilteredCurrencies(filtered);
    setQuery(term);
  };

  useEffect(() => {
    loadCurrentCurrency();
  }, [loadCurrentCurrency]);

  useEffect(() => {
    if (!query) {
      setFilteredCurrencies(currencyItems);
    }
  }, [query, currencyItems]);

  return (
    <Container>
      <Toolbar title={t('title')} query={query} onChangeText={handleSearch} />
      <List items={filteredCurrencies} />
    </Container>
  );
};

export default CurrencyScreen;

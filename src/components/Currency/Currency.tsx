import React, {useCallback, useState} from 'react';
import NumberFormat from 'react-number-format';
import {Text} from 'styles/layout';
import CurrencyService, {DEFAULT_CURRENCY} from 'services/currency';
import {useTranslation} from 'react-i18next';
import {DEFAULT_LANGUAGE} from 'services/language';
import {useFocusEffect} from '@react-navigation/native';

interface Props {
  value: number;
  decimalScale?: number;
  render?: (text: string) => React.ReactNode | string;
}

export function currencyFormatter(
  value: number,
  currency?: string,
  language?: string,
): string {
  let output = 0;
  if (Number(value)) {
    output = value;
  }

  const currentCurrency = currency ?? DEFAULT_CURRENCY;
  const currentLanguage = language ?? DEFAULT_LANGUAGE;

  const optionsNumber = {
    style: 'currency',
    currency: currentCurrency,
  };

  const amount = new Intl.NumberFormat(currentLanguage, optionsNumber).format(
    output / 100,
  );

  return `${amount}`;
}

const Currency = ({value, decimalScale = 2, render}: Props): JSX.Element => {
  const [currentCurrency, setCurrentCurrency] = useState<string>();
  const {i18n} = useTranslation();

  const loadCurrentCurrency = useCallback(async () => {
    const currentStored = await CurrencyService.getCurrency();
    if (currentStored) setCurrentCurrency(currentStored);
  }, []);

  const renderItem = (text: string) => {
    if (render) {
      return render(text);
    }
    return <Text>{text}</Text>;
  };

  const format = currencyFormatter(value, currentCurrency, i18n.language);

  useFocusEffect(
    useCallback(() => {
      loadCurrentCurrency();
    }, [loadCurrentCurrency]),
  );

  return (
    <NumberFormat
      fixedDecimalScale
      format={format}
      displayType="text"
      value={value}
      decimalScale={decimalScale}
      renderText={renderItem}
    />
  );
};

export default Currency;

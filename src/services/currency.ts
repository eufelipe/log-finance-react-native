import storage from './storage';

export const KEY_APP_CURRENCY = '@app-currency';

export const DEFAULT_CURRENCY = 'BRL';

export const saveCurrency = async (value: string): Promise<void> => {
  return storage.setItem(KEY_APP_CURRENCY, value);
};

export const getCurrency = async (): Promise<string | null> => {
  return storage.getItem(KEY_APP_CURRENCY);
};

export default {
  saveCurrency,
  getCurrency,
};

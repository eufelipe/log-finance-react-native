import {NativeModules} from 'react-native';

import i18next, {LanguageDetectorAsyncModule} from 'i18next';
import storage from './storage'; 

import {ptBR, enUS} from 'date-fns/locale';

import pt_br from 'locales/translations/pt_BR.json';
import en_us from 'locales/translations/en_US.json';
import {Locale} from 'date-fns';

export const KEY_APP_LANGUAGE = '@app-language';
export const LANG_PT_BR = 'pt-BR';
export const LANG_EN_US = 'en-US';

export const resources = {
  [LANG_PT_BR]: pt_br,
  [LANG_EN_US]: en_us,
};

export const DEFAULT_LANGUAGE = LANG_PT_BR;

const getSystemLocale = (): string => {
  let locale = undefined;
  if (
    NativeModules.SettingsManager &&
    NativeModules.SettingsManager.settings &&
    NativeModules.SettingsManager.settings.AppleLanguages
  ) {
    locale = NativeModules.SettingsManager.settings.AppleLanguages[0];
  } else if (NativeModules.I18nManager) {
    locale = NativeModules.I18nManager.localeIdentifier;
  }

  if (typeof locale === 'undefined') {
    return DEFAULT_LANGUAGE;
  }
  return locale.replace('_', '-');
};

export const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: async (
    callback: (lng: string | readonly string[] | undefined) => void,
  ) => {
    const storageLanguage = await getLanguage();
    if (storageLanguage) {
      return callback(storageLanguage);
    }

    return callback(getSystemLocale());
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init: () => {},
  cacheUserLanguage: async language => {
    await saveLanguage(language);
  },
};

export const getCurrentLocale = (): Locale => {
  const locale = i18next.language === LANG_PT_BR ? ptBR : enUS;

  return locale;
};

export const saveLanguage = async (value: string): Promise<void> => {
  if (![LANG_PT_BR, LANG_PT_BR].includes(value)) {
    return;
  }

  return storage.setItem(KEY_APP_LANGUAGE, value);
};

export const getLanguage = async (): Promise<string | null> => {
  return storage.getItem(KEY_APP_LANGUAGE);
};

export default {
  saveLanguage,
  getLanguage,
};

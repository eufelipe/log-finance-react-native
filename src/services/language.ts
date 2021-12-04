import {NativeModules} from 'react-native';

import {LanguageDetectorAsyncModule} from 'i18next';
import storage from './storage';
import {isAndroid} from 'styles/mixins';

import {ptBR, enUS} from 'date-fns/locale';

import pt_br from 'locales/translations/pt_BR.json';
import en_us from 'locales/translations/en_US.json';
import i18n from 'locales';
import {Locale} from 'date-fns';

export const KEY_APP_LANGUAGE = '@app-language';
export const LANG_PT_BR = 'pt-BR';
export const LANG_EN_US = 'en-US';

export const resources = {
  [LANG_PT_BR]: pt_br,
  [LANG_EN_US]: en_us,
};

export const DEFAULT_LANGUAGE = LANG_PT_BR;

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

    let deviceLanguage = null;
    if (isAndroid) {
      deviceLanguage = `${NativeModules.I18Manager.localeIdentifier}`;
    } else {
      const currentLocale = NativeModules.SettingsManager.settings.AppleLocale;
      const currentLocales = NativeModules.SettingsManager.settings.AppleLanguages; // fix iOS 13 
      deviceLanguage = currentLocale ?? currentLocales[0];
    }
 
    deviceLanguage = deviceLanguage.replace('_', '-');


    if(!deviceLanguage) {
      deviceLanguage = DEFAULT_LANGUAGE
    }

    return callback(deviceLanguage);
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init: () => {},
  cacheUserLanguage: async language => {
    await saveLanguage(language);
  },
};

export const getCurrentLocale = (): Locale => {
  const locale = i18n.language === LANG_PT_BR ? ptBR : enUS;

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

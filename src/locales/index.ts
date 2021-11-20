import {NativeModules, Platform} from 'react-native';
import i18n, {LanguageDetectorAsyncModule} from 'i18next';
import {initReactI18next} from 'react-i18next';

import pt_br from './translations/pt_BR.json';
import en_us from './translations/en_US.json';

const resources = {
  ['pt-BR']: pt_br,
  ['en-US']: en_us,
};

const DEFAULT_LANGUAGE = 'pt-BR';

const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  detect: async (
    callback: (lng: string | readonly string[] | undefined) => void,
  ) => {
    let deviceLanguage = null;
    if (Platform.OS === 'android') {
      deviceLanguage = `${NativeModules.I18Manager.localeIdentifier}`;
    } else {
      deviceLanguage = NativeModules.SettingsManager.settings.AppleLocale;
    }

    deviceLanguage = deviceLanguage.replace('_', '-');

    return callback(deviceLanguage);
  },
  // TODO: implementar obter language default e tratar mudança
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  cacheUserLanguage: () => {},
};

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

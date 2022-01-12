import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {DEFAULT_LANGUAGE, languageDetector, resources} from 'services/language';

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: DEFAULT_LANGUAGE,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

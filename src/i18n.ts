// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import global_en from './locales/en/en.json'
import global_ru from './locales/ru/ru.json'

i18n.use(Backend).use(initReactI18next).init({
  fallbackLng: 'ru',
  debug: true,
  resources:{
    en:{
      global: global_en,
    },
    ru:{
        global: global_ru,
    }
  },
  interpolation: {
    escapeValue: false, // Если вы используете React, вы можете отключить экранирование
  },
});

export default i18n;

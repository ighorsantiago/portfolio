import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ptBr from './ptBr.json';
import en from './en.json';

i18n.use(initReactI18next).init({
    lng: "en",
    fallbackLng: "en",
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: en,
        pt: ptBr
    }
});

export default i18n;

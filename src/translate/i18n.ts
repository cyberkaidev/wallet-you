import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';
import EN_US from './locales/en-us.json';
import PT_BR from './locales/pt-br.json';
import DE_CH from './locales/de-ch.json';
import ES_AR from './locales/es-ar.json';

i18n.use(initReactI18next).init({
	lng: getLocales()[0].languageCode,
	compatibilityJSON: 'v3',
	fallbackLng: 'en',
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: EN_US,
		pt: PT_BR,
		de: DE_CH,
		es: ES_AR,
	},
});

export default i18n;

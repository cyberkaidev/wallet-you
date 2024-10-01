import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import DE_CH from "~/data/jsons/de-ch.json";
import EN_US from "~/data/jsons/en-us.json";
import ES_AR from "~/data/jsons/es-ar.json";
import PT_BR from "~/data/jsons/pt-br.json";

import { expoLocalityCodes } from "./expoLocalityCodes";

i18n.use(initReactI18next).init({
	lng: expoLocalityCodes().languageCode ?? "en",
	compatibilityJSON: "v3",
	fallbackLng: "en",
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

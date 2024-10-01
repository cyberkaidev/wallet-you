import { LocalityCodes } from "~/shared/LocalityCodes";

import { storageKeys } from "../constants/storageKeys";
import { useAppSettings } from "../stores/useAppSettings";
import { localityCodes } from "../utils/localityCodes";
import { localStorage } from "../utils/localStorage";

export async function initializeAppSettings() {
	const { setCurrency, setLanguage, setIsTablet } = useAppSettings.getState();
	setIsTablet();

	const { currencyCode, languageCode } = localityCodes();

	const currencyStorage = await localStorage().getItem({ key: storageKeys.currency });
	const languageStorage = await localStorage().getItem({ key: storageKeys.language });

	if (currencyStorage) {
		setCurrency(currencyStorage as LocalityCodes["currencyCode"]);
	} else {
		switch (currencyCode) {
			case "BRL":
			case "USD":
			case "AUD":
			case "CAD":
			case "EUR":
			case "GBP":
				setCurrency(currencyCode.toLocaleLowerCase() as LocalityCodes["currencyCode"]);
				break;
			default:
				setCurrency("usd");
				break;
		}
	}

	if (languageStorage) {
		setLanguage(languageStorage as LocalityCodes["languageCode"]);
	} else {
		switch (languageCode) {
			case "de":
				setLanguage("de-ch");
				break;
			case "en":
				setLanguage("en-us");
				break;
			case "es":
				setLanguage("es-ar");
				break;
			case "pt":
				setLanguage("pt-br");
				break;
			default:
				setLanguage("en-us");
				break;
		}
	}
}

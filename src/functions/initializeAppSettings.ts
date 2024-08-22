import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLocales } from "expo-localization";

import { storageKeys } from "@/helpers/storageKeys";
import { useAppSettings } from "@/stores/useAppSettings";
import { UseAppSettingsProps } from "@/types/UseAppSettingsType";

export async function initializeAppSettings() {
	const { setCurrency, setLanguage, setIsTablet } = useAppSettings.getState();
	setIsTablet();

	const currencyCode = getLocales()[0].currencyCode;
	const languageCode = getLocales()[0].languageCode;

	const currencyStorage = await AsyncStorage.getItem(storageKeys.currency);
	const languageStorage = await AsyncStorage.getItem(storageKeys.language);

	if (currencyStorage) {
		setCurrency(currencyStorage as UseAppSettingsProps["currency"]);
	} else {
		switch (currencyCode) {
			case "BRL":
			case "USD":
			case "AUD":
			case "CAD":
			case "EUR":
			case "GBP":
				setCurrency(currencyCode.toLocaleLowerCase() as UseAppSettingsProps["currency"]);
				break;
			default:
				setCurrency("usd");
				break;
		}
	}

	if (languageStorage) {
		setLanguage(languageStorage as UseAppSettingsProps["language"]);
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

import AsyncStorage from '@react-native-async-storage/async-storage';
import { storageKeys } from '@src/helpers';
import { useAppSettings } from '@src/stores';
import { UseAppSettingsProps } from '@src/stores/use-app-settings/types';
import { getLocales } from 'expo-localization';

export async function initializeAppSettings() {
	const { setCurrency, setLanguage } = useAppSettings.getState();
	const currencyCode = getLocales()[0].currencyCode;
	const languageCode = getLocales()[0].languageCode;

	const currencyStorage = await AsyncStorage.getItem(storageKeys.currency);
	const languageStorage = await AsyncStorage.getItem(storageKeys.language);

	if (currencyStorage) {
		setCurrency(currencyStorage as UseAppSettingsProps['currency']);
	} else {
		switch (currencyCode) {
			case 'BRL':
			case 'USD':
			case 'AUD':
			case 'CAD':
			case 'EUR':
			case 'GBP':
				setCurrency(currencyCode.toLocaleLowerCase() as UseAppSettingsProps['currency']);
				break;
			default:
				setCurrency('usd');
				break;
		}
	}

	if (languageStorage) {
		setLanguage(languageStorage as UseAppSettingsProps['language']);
	} else {
		switch (languageCode) {
			case 'de':
				setLanguage('de-ch');
				break;
			case 'en':
				setLanguage('en-us');
				break;
			case 'es':
				setLanguage('es-ar');
				break;
			case 'pt':
				setLanguage('pt-br');
				break;
			default:
				setLanguage('en-us');
				break;
		}
	}
}

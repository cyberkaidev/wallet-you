import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from 'i18next';
import { create } from 'zustand';

import { storageKeys } from '@/helpers';

import { UseAppSettingsProps } from './types';

export const useAppSettings = create<UseAppSettingsProps>(set => ({
	currency: 'usd',
	language: 'en-us',
	setCurrency: param => {
		set({ currency: param });
		AsyncStorage.setItem(storageKeys.currency, param);
	},
	setLanguage: param => {
		set({ language: param });
		AsyncStorage.setItem(storageKeys.language, param);
		i18n.changeLanguage(param);
	},
}));

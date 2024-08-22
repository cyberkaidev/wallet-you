import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Device from "expo-device";
import i18n from "i18next";
import { create } from "zustand";

import { storageKeys } from "@/helpers/storageKeys";
import { UseAppSettingsProps } from "@/types/UseAppSettingsType";

export const useAppSettings = create<UseAppSettingsProps>(set => ({
	currency: "usd",
	language: "en-us",
	isTablet: null,
	setCurrency: param => {
		set({ currency: param });
		AsyncStorage.setItem(storageKeys.currency, param);
	},
	setLanguage: param => {
		set({ language: param });
		AsyncStorage.setItem(storageKeys.language, param);
		i18n.changeLanguage(param);
	},
	setIsTablet: async () => {
		const deviceType = await Device.getDeviceTypeAsync();
		const isTablet = Device.DeviceType[deviceType] == "TABLET";
		set({ isTablet: isTablet });
	},
}));

import { create } from "zustand";

import { i18next } from "~/infra/internationalization/i18next";
import { LocalityCodes } from "~/shared/LocalityCodes";

import { storageKeys } from "../constants/storageKeys";
import { deviceCharacteristics } from "../utils/deviceCharacteristics";
import { localStorage } from "../utils/localStorage";

type DataProps = {
	currency: LocalityCodes["currencyCode"];
	language: LocalityCodes["languageCode"];
	isTablet: boolean | null;
};

type Props = DataProps & {
	setCurrency: (arg: LocalityCodes["currencyCode"]) => void;
	setLanguage: (arg: LocalityCodes["languageCode"]) => void;
	setIsTablet: () => void;
};

export const useAppSettings = create<Props>(set => ({
	currency: "usd",
	language: "en-us",
	isTablet: null,
	setCurrency: item => {
		set({ currency: item });
		localStorage().setItem({ key: storageKeys.currency, item: item });
	},
	setLanguage: item => {
		set({ language: item });
		localStorage().setItem({ key: storageKeys.language, item: item });
		i18next().changeLanguage(item);
	},
	setIsTablet: async () => {
		const { deviceType } = deviceCharacteristics();
		const response = await deviceType();
		set({ isTablet: response == "TABLET" });
	},
}));

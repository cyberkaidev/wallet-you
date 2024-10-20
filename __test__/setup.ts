import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import mockSafeAreaContext from "react-native-safe-area-context/jest/mock";

import DE_CH from "../src/data/jsons/de-ch.json";
import EN_US from "../src/data/jsons/en-us.json";
import ES_AR from "../src/data/jsons/es-ar.json";
import PT_BR from "../src/data/jsons/pt-br.json";

jest.mock("react-native-safe-area-context", () => mockSafeAreaContext);

jest.mock("react-native-reanimated", () => require("react-native-reanimated/mock"));

jest.mock("~/application/hooks/useFormatCurrency", () => {
	return {
		useFormatCurrency: () => "$100.00",
	};
});

jest.mock("~/application/hooks/useFormatDate", () => {
	return {
		useFormatDate: () => ({
			date: "12/12/2023",
			time: "12:00 PM",
			dateAndTime: "12/12/2023 12:00 PM",
		}),
	};
});

jest.mock("~/application/stores/usePriceHistoryBitcoin", () => {
	return {
		usePriceHistoryBitcoin: () => ({
			fetchBitcoinHistoricalPrice: jest.fn(),
			status: "success",
			data: [
				{
					timestamp: 1625945400000,
					value: 33875.25,
				},
				{
					timestamp: 1625946300000,
					value: 33845.25,
				},
				{
					timestamp: 1625947200000,
					value: 33910.25,
				},
			],
		}),
	};
});

jest.mock("~/application/stores/useUser", () => {
	return {
		useUser: () => ({
			cleanUserData: jest.fn(),
			data: [
				{
					chain: "Bitcoin Main",
					blockNumber: 12345,
					hash: "00000",
					transactionType: "incoming",
					transactionIndex: 12345,
					tokenAddress: "010203",
					tokenId: "0x00000",
					amount: "1",
					timestamp: 1625946300000,
					address: "010203040506070809",
				},
			],
			status: "success",
		}),
	};
});

jest.mock("~/application/stores/useAppSettings", () => {
	return {
		useAppSettings: Object.assign(
			() => {
				return { currency: "usd" };
			},
			{
				getState: () => {
					return { currency: "usd" };
				},
			},
		),
	};
});

jest.mock("~/application/stores/useBitcoinPrices", () => {
	return {
		useBitcoinPrices: () => ({
			data: {
				current_price: {
					usd: 100.0,
				},
			},
		}),
	};
});

export const mockedAlertModalActions = {
	onCancel: jest.fn(),
	onConfirm: jest.fn(),
	showAlert: jest.fn(),
	hideAlert: jest.fn(),
};

jest.mock("~/application/stores/useAlertModal", () => {
	return {
		useAlertModal: () => ({
			visible: true,
			title: "Hello World",
			...mockedAlertModalActions,
		}),
	};
});

export const mockedNavigation = {
	navigate: jest.fn(),
	goBack: jest.fn(),
};

jest.mock("@react-navigation/native", () => {
	return {
		useNavigation: () => ({ ...mockedNavigation }),
	};
});

jest.mock("@react-native-async-storage/async-storage", () =>
	require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

jest.mock("moti/skeleton", () => ({ Skeleton: () => "Skeleton" }));

i18n.use(initReactI18next).init({
	lng: "en",
	resources: {
		en: EN_US,
		pt: PT_BR,
		de: DE_CH,
		es: ES_AR,
	},
	fallbackLng: "en",
	debug: false,
});

export default i18n;

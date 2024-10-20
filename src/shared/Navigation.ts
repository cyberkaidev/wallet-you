import { RouteProp } from "@react-navigation/native";

import { TransactionModel } from "~/data/models/BitcoinRepositoryModel";

export type RootStackParamListProps = {
	RegisterKeyPage: undefined;
	LocalAuthPage: undefined;
	HomePage: undefined;
	ChartPage: undefined;
	TransactionPage: {
		data: TransactionModel;
	};
	SettingsPage: undefined;
	LanguagePage: undefined;
	CurrencyPage: undefined;
	TermsPage: undefined;
	NoInternetPage: undefined;
};

export type UseRouteType<T extends keyof RootStackParamListProps> = RouteProp<
	RootStackParamListProps,
	T
>;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamListProps {}
	}
}

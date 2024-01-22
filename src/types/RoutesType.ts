import { AddressTransaction } from '@tatumio/tatum';

export type RootStackParamListProps = {
	RegisterKeyPage: undefined;
	LocalAuthPage: undefined;
	HomePage: undefined;
	BitcoinDataPage: undefined;
	TransactionPage: {
		data: AddressTransaction;
	};
	SettingsPage: undefined;
	PublicKeyPage: undefined;
	LanguagePage: undefined;
	CurrencyPage: undefined;
	TermsPage: undefined;
	SupportUsPage: undefined;
	LinksPage: undefined;
};

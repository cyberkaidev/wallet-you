import { expoLocalityCodes } from "~/infra/internationalization/expoLocalityCodes";

export function localityCodes() {
	const locales = expoLocalityCodes();

	return {
		languageCode: locales.languageCode,
		currencyCode: locales.currencyCode,
	};
}

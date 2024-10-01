import { getLocales, Locale } from "expo-localization";

export function expoLocalityCodes(): Locale {
	const codes = getLocales()[0];

	return codes;
}

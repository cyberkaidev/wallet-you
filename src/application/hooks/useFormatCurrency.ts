import currencyJS from "currency.js";

import { useAppSettings } from "../stores/useAppSettings";

type UseFormatCurrency = string;

export function useFormatCurrency(value?: number): UseFormatCurrency {
	const { currency } = useAppSettings.getState();

	if (!value && value !== 0) return "...";
	const isZero = value === 0 ? 0 : value;

	switch (currency) {
		case "eur":
			return currencyJS(isZero, {
				separator: ",",
				decimal: ".",
				symbol: "€",
				precision: 2,
			}).format();
		case "brl":
			return currencyJS(isZero, {
				separator: ".",
				decimal: ",",
				symbol: "R$",
				precision: 2,
			}).format();
		default:
			return currencyJS(isZero, {
				separator: ",",
				decimal: ".",
				symbol: "$",
				precision: 2,
			}).format();
	}
}

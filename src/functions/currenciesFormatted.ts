import { useFormatCurrency } from '@/hooks/useFormatCurrency';
import { CurrenciesFormattedProps } from '@/types/CurrenciesFormattedType';

export function currenciesFormatted({ data, currency }: CurrenciesFormattedProps) {
	return {
		currentCurrency: useFormatCurrency(data?.current_price[currency]),
		lowPrice24hCurrency: useFormatCurrency(data?.low_24h[currency]),
		highPrice24hCurrency: useFormatCurrency(data?.high_24h[currency]),
		priceChange24hCurrency: useFormatCurrency(data?.price_change_24h_in_currency[currency]),
	};
}

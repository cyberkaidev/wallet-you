import { useFormatCurrency } from '@/hooks';

import { CurrenciesFormattedProps } from './types';

export function currenciesFormatted({ data, currency }: CurrenciesFormattedProps) {
	return {
		currentCurrency: useFormatCurrency(data?.current_price[currency]),
		marketCapCurrency: useFormatCurrency(data?.market_cap[currency]),
		marketCapChange24hCurrency: useFormatCurrency(
			data?.market_cap_change_24h_in_currency[currency],
		),
		totalVolumeCurrency: useFormatCurrency(data?.total_volume[currency]),
		lowPrice24hCurrency: useFormatCurrency(data?.low_24h[currency]),
		highPrice24hCurrency: useFormatCurrency(data?.high_24h[currency]),
		priceChange24hCurrency: useFormatCurrency(data?.price_change_24h_in_currency[currency]),
	};
}

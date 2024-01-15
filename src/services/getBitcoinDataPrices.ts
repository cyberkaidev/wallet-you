import axios from 'axios';

import { ResponseData } from '@/types/GetBitcoinDataPricesType';

export async function getBitcoinDataPrices() {
	try {
		const { data }: ResponseData = await axios.get(
			'https://api.coingecko.com/api/v3/coins/bitcoin',
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		return {
			current_price: data.market_data.current_price,
			high_24h: data.market_data.high_24h,
			low_24h: data.market_data.low_24h,
			market_cap: data.market_data.market_cap,
			market_cap_change_24h_in_currency: data.market_data.market_cap_change_24h_in_currency,
			price_change_24h_in_currency: data.market_data.price_change_24h_in_currency,
			price_change_percentage_1h_in_currency:
				data.market_data.price_change_percentage_1h_in_currency,
			total_volume: data.market_data.total_volume,
		};
	} catch (err) {
		throw new Error('error-get-bitcoin-data-prices');
	}
}

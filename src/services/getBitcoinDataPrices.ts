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
			price_change_24h_in_currency: data.market_data.price_change_24h_in_currency,
		};
	} catch (err) {
		throw new Error('error-get-bitcoin-data-prices');
	}
}

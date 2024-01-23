import axios from 'axios';

import { ResponseData } from '@/types/GetBitcoinHistoricalPriceType';

export async function getBitcoinHistoricalPrice() {
	try {
		const { data }: ResponseData = await axios.get(
			'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=2',
			{
				headers: {
					'Content-Type': 'application/json',
				},
			},
		);

		const dataFormated = data.prices.map(item => ({
			date: new Date(item[0]),
			value: item[1],
		}));

		return dataFormated ?? [];
	} catch (err) {
		throw new Error('error get-bitcoin-historical-price');
	}
}

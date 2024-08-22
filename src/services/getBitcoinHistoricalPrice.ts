import axios from "axios";

import { ResponseData } from "@/types/GetBitcoinHistoricalPriceType";

export async function getBitcoinHistoricalPrice() {
	try {
		const { data }: ResponseData = await axios.get(
			"https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1",
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		if (data.prices.length === 0) throw new Error("error get-bitcoin-historical-price");

		return data.prices.slice(-20).map(item => ({
			date: new Date(item[0]),
			value: item[1],
		}));
	} catch (_) {
		throw new Error("error get-bitcoin-historical-price");
	}
}

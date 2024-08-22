import axios from "axios";

import { ResponseData } from "@/types/GetBitcoinDataPricesType";

export async function getBitcoinDataPrices() {
	try {
		const { data }: ResponseData = await axios.get(
			"https://api.coingecko.com/api/v3/coins/bitcoin",
			{
				headers: {
					"Content-Type": "application/json",
				},
			},
		);

		return data.market_data.current_price;
	} catch (_) {
		throw new Error("error-get-bitcoin-data-prices");
	}
}

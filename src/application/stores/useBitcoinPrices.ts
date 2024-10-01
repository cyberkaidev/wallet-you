import { create } from "zustand";

import { PricesModel } from "~/data/models/BitcoinRepositoryModel";

import { getPricesBitcoin } from "../api/getPricesBitcoin";

type DataProps = {
	currentPrice: PricesModel["market_data"]["current_price"] | null;
	status: "success" | "failed" | null;
};

type Props = DataProps & {
	fetchBitcoinDataPrices: () => Promise<void>;
};

export const useBitcoinPrices = create<Props>(set => ({
	currentPrice: null,
	status: null,
	fetchBitcoinDataPrices: async () => {
		const { body, statusCode } = await getPricesBitcoin();

		if (!body || statusCode !== 200) return set({ status: "failed" });
		set({ currentPrice: body, status: "success" });
	},
}));

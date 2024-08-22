import { create } from "zustand";

import { getBitcoinDataPrices } from "@/services/getBitcoinDataPrices";
import { UseBitcoinDataPricesProps } from "@/types/UseBitcoinDataPricesType";

export const useBitcoinDataPrices = create<UseBitcoinDataPricesProps>(set => ({
	currentPrice: null,
	status: null,
	fetchBitcoinDataPrices: async () => {
		try {
			const response = await getBitcoinDataPrices();
			set({ currentPrice: response, status: "success" });
		} catch (error) {
			set({ status: "failed" });
		}
	},
}));

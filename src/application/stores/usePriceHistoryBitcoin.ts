import { create } from "zustand";

import { getPriceHistoryBitcoin } from "../api/getPriceHistoryBitcoin";

interface DataProps {
	data: {
		date: Date;
		value: number;
	}[];
	status: "loading" | "success" | "failed" | null;
}

export type Props = DataProps & {
	fetchBitcoinHistoricalPrice: () => Promise<void>;
};

export const usePriceHistoryBitcoin = create<Props>(set => ({
	data: [],
	status: null,
	fetchBitcoinHistoricalPrice: async () => {
		try {
			const response = await getPriceHistoryBitcoin();
			set({ data: response, status: "success" });
		} catch (error) {
			set({ status: "failed" });
		}
	},
}));

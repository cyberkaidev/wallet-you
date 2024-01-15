import { create } from 'zustand';

import { getBitcoinDataPrices } from '@/services/getBitcoinDataPrices';
import { UseBitcoinDataPricesProps } from '@/types/UseBitcoinDataPricesType';

export const useBitcoinDataPrices = create<UseBitcoinDataPricesProps>(set => ({
	data: null,
	status: null,
	fetchBitcoinDataPrices: async () => {
		try {
			const response = await getBitcoinDataPrices();
			set({ data: response, status: 'success' });
		} catch (error) {
			set({ status: 'failed' });
		}
	},
}));

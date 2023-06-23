import { create } from 'zustand';

import { getBitcoinDataPrices } from '@/services';

import { UseBitcoinDataPricesProps } from './types';

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

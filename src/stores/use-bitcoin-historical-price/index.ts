import { create } from 'zustand';

import { getBitcoinHistoricalPrice } from '@/services';

import { UseBitcoinHistoricalPriceProps } from './types';

export const useBitcoinHistoricalPrice = create<UseBitcoinHistoricalPriceProps>(set => ({
	data: [],
	status: null,
	fetchBitcoinHistoricalPrice: async () => {
		try {
			const response = await getBitcoinHistoricalPrice();
			set({ data: response, status: 'success' });
		} catch (error) {
			set({ status: 'failed' });
		}
	},
}));
